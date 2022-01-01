import Auth, { CognitoUser } from '@aws-amplify/auth';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { DataStore } from '@aws-amplify/datastore';
import { action, autorun, makeObservable, observable } from 'mobx';
import { Teacher, Student } from '../models';
import { sleep } from '../utils';
import RootStore from './RootStore';

export type UserDataType = Student | Teacher | null;

class UserStore {
  rootStore: RootStore;
  user: CognitoUser | null = null;
  userData: UserDataType = null;
  isInProcessOfFederatedSignIn :boolean = false;
  isLoggedIn: boolean = false;
  shouldRenderConfirm: boolean = false;
  authCheckComplete: boolean = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      // Observable properties
      user: observable,
      isLoggedIn: observable,
      isInProcessOfFederatedSignIn: observable,
      authCheckComplete: observable,
      userData: observable,

      // Actions
      setUser: action,
      setUserData: action,
      setLoginStatus: action,

      // Not Observable
      rootStore: false,
    });
    autorun(async () => {
      if (this.userData === null){
        this.authCheckComplete = false;
        await this.initialize();
        this.authCheckComplete = true;
      }
    })

    console.log(this);
  }

  // initialize the store
  async initialize() {
    this.setUser(await this.getUser());
    console.log(this.user);
    if (this.user !== null) {
      const attributes = await Auth.userAttributes(this.user);
      if (attributes !== undefined) {
        await this.updateUserInfo();
      }
      const loggedIn = await this.getLoginStatus();
      this.setLoginStatus(loggedIn);
    }
  }

  async signUp(username: string, password: string, role: string) {
    console.log('sign up');
    await Auth.signUp({
      username,
      password,
      attributes: {
        'custom:role': role,
      },
    })
      .then(user => {
        console.log(user);
        this.setUser(user.user);
        this.setShouldRenderConfirm(true);
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  }

  async confirm(username: string, code: string) {
    await Auth.confirmSignUp(username, code)
      .then(response => {
        console.log(response);
        this.setShouldRenderConfirm(false);
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  }

  async signIn(username: string, password: string) {
    await Auth.signIn(username, password)
      .then(async (user) => {
        console.log(user);
        this.setUser(user);
        this.setLoginStatus(true);
        await this.updateUserInfo();
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  }

  async signOut() {
    await Auth.signOut()
      .then(() => {
        this.setUser(null);
        this.setLoginStatus(false);
      })
      .catch(e => {
        console.log(e);
      });
  }

  async getUser(): Promise<CognitoUser | null> {
    console.log('get user');
    return await Auth.currentAuthenticatedUser().catch(e => {
      console.log(e);
      return null;
    });
  }

  async getLoginStatus(): Promise<boolean> {
    console.log('get login status');
    const { attributes, signeInUserSession }= await Auth.currentAuthenticatedUser()
    .catch(e => {
      console.log(e);
    });
    if (attributes !== undefined) {
      console.log("probably logged in");
      console.log(attributes);
      if (attributes !== null &&
        attributes.hasOwnProperty('email_verified') &&
        (attributes['email_verified'] === 'true' ||
        attributes['email_verified'] === true) &&
        this.userData !== null) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  federatedLogIn(provider: string) {
    this.isInProcessOfFederatedSignIn = true;
    if (provider === 'Google') {
      Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      }).then(credentials => {
          console.log(credentials);
        }).catch(e => {
          console.log(e);
        });
    } else if (provider === 'Facebook') {
      Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Facebook,
      });
    }
  }

  setUserData(userData: UserDataType) {
    this.userData = userData;
  }

  setLoginStatus(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  setUser(user: CognitoUser | null) {
    this.user = user;
  }

  setProfilePic = async (profile: string) => {
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
    const userData = this.userData;
    if (userData?.role === 'student') {
      await DataStore.save(Student.copyOf(this.userData as Student, item => {
        // Update the values on {item} variable to update DataStore entry
        item.profile = profile;
      }));
    } else {
      await DataStore.save(Teacher.copyOf(this.userData as Teacher, item => {
        // Update the values on {item} variable to update DataStore entry
        item.profile = profile;
      }));
    }
    this.updateUserInfo();
  }

  setFederatedLoginStatus = (isInProcessOfFederatedSignIn: boolean) => {
    this.isInProcessOfFederatedSignIn = isInProcessOfFederatedSignIn;
  }

  setShouldRenderConfirm = (shouldRenderConfirm: boolean) => {
    this.shouldRenderConfirm = shouldRenderConfirm;
  }

  updateUserInfo = async () => {
    const attributes = await Auth.userAttributes(this.user);

    let role = attributes.find((attribute: any) => attribute.getName() === 'custom:role')?.getValue() ?? "";
    let email = attributes.find((attribute: any) => attribute.getName() === 'email')?.getValue() ?? "";

    // find Student according to email
    if (email !== '' && role === 'student') {
      this.setUserData((await DataStore.query(Student)).find((student: Student) => student.email === email) ?? null);
    } else if (email !== '' && role === 'teacher') {
      this.setUserData((await DataStore.query(Teacher)).find((teacher: Teacher) => teacher.email === email) ?? null);
    }
  }
}

export default UserStore;
