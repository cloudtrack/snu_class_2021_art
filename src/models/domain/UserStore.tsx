
import { action, makeObservable, observable } from "mobx";
import Auth from "@aws-amplify/auth";
import { CognitoUser } from "@aws-amplify/auth";


class UserStore {
  rootStore
  user: any | null = null
  isLoggedIn: boolean = false
  loading : boolean = false
  authCheckComplete : boolean = false
  role: string = ""

  constructor(rootStore: any) {
    this.rootStore = rootStore
    makeObservable(this, {
      // Observable properties
      user: observable,
      isLoggedIn: observable,
      loading: observable,
      authCheckComplete: observable,
      role: observable,

      // Actions
      setUser: action,
      setLoginStatus: action,
      setRole: action,

      // Not Observable
      rootStore: false
    })
    this.initialize()
    this.authCheckComplete = true
    console.log(this)
  }

  // initialize the store
  async initialize() {
    this.setUser(await this.getUser())
    if (this.user !== null) {
      this.setLoginStatus(true)
      const attributes = await Auth.userAttributes(this.user);
      if ( attributes !== undefined) {
        this.updateUserInfo()
      }
    }
  }

  async signUp(username: string, password: string, role: string) {
    console.log("sign up")
    await Auth.signUp({
      username,
      password,
      attributes: {
      'custom:role': role
    }})
      .then((user) => {
        console.log(user)
        this.setUser(user.user)
      })
      .catch((e) => {
        console.log(e)
        throw e
      })
  }

  async confirm(username: string, code: string) {
    await Auth.confirmSignUp(username, code)
      .catch((e) => {
        console.log(e)
        throw e
      })
  }

  async signIn(username: string, password: string) {
    await Auth.signIn(username, password)
      .then((user) => {
        console.log(user)
        this.setUser(user)
        this.setLoginStatus(true)
        this.updateUserInfo()
      })
      .catch((e) => {
        console.log(e)
        throw e
      })
  }

  async signOut() {
    await Auth.signOut()
      .then(() => {
        this.setUser(null)
        this.setLoginStatus(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  async getUser(): Promise<CognitoUser | null> {
    console.log("get user")
    return await Auth.currentAuthenticatedUser()
      .catch((e) => {
        console.log(e)
        return null
      })
  }

  setUser(user: CognitoUser | null) {
    this.user = user
  }

  setLoginStatus(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn
  }

  setRole(role: string) {
    this.role = role
  }

  async updateUserInfo() {
    const attributes = await Auth.userAttributes(this.user)
    this.setRole(attributes.find((attribute : any) => attribute.getName() === 'custom:role')?.getValue() ?? '')
  }

}

export default UserStore;
