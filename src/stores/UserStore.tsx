import Auth, { CognitoUser } from '@aws-amplify/auth';
import { DataStore } from '@aws-amplify/datastore';
import { action, makeObservable, observable } from 'mobx';
import { Teacher, Student } from '../models';

export type UserDataType = Student | Teacher | null;

class UserStore {
  rootStore
  user: any | null = null
  userData: UserDataType = null
  isLoggedIn: boolean = false
  loading: boolean = false
  authCheckComplete: boolean = false

  constructor(rootStore: any) {
    this.rootStore = rootStore;
    makeObservable(this, {
      // Observable properties
      user: observable,
      isLoggedIn: observable,
      loading: observable,
      authCheckComplete: observable,
      userData: observable,

      // Actions
      setUser: action,
      setUserData: action,
      setLoginStatus: action,

      // Not Observable
      rootStore: false,
    });
    this.initialize();
    this.authCheckComplete = true;
    console.log(this);
  }

  // initialize the store
  async initialize() {
    this.setUser(await this.getUser());
    if (this.user !== null) {
      this.setLoginStatus(true);
      const attributes = await Auth.userAttributes(this.user);
      if (attributes !== undefined) {
        this.updateUserInfo();
      }
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
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  }

  async signIn(username: string, password: string) {
    await Auth.signIn(username, password)
      .then(user => {
        console.log(user);
        this.setUser(user);
        this.setLoginStatus(true);
        this.updateUserInfo();
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
    const attributes = await Auth.currentAuthenticatedUser().catch(e => {
      console.log(e);
    });
    if (attributes !== undefined) {
      console.log(attributes);
      return true;
    } else {
      return false;
    }
  }

  setUserData(userData: Student | null) {
    this.userData = userData;
  }

  setLoginStatus(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  setUser(user: CognitoUser | null) {
    this.user = user;
  }

  async updateUserInfo() {
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
