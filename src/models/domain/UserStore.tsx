
import { action, makeObservable, observable } from "mobx";
import Auth from "@aws-amplify/auth";
import { CognitoUser } from "@aws-amplify/auth";


class UserStore {
  rootStore
  user: CognitoUser | null = null
  isConfirmed: boolean = false
  isLoggedIn: boolean = false

  constructor(rootStore: any) {
    this.rootStore = rootStore
    makeObservable(this, {
      user: observable,
      isConfirmed: observable,
      isLoggedIn: observable,
      setUser: action,
      setLoginStatus: action,
      setConfirmStatus: action,
      rootStore: false
    })
    this.initialize()
    console.log(this)
  }

  // initialize the store
  async initialize() {
    this.setUser(await this.getUser())
    if (await this.getLoginStatus()) {
      this.setLoginStatus(true)
    }
    if (await this.getConfirmStatus()) {
      this.setConfirmStatus(true)
    }
  }

  async signUp(username: string, password: string) {
    await Auth.signUp(username, password)
      .then((user) => {
        console.log(user)
        this.setUser(user.user)
        this.setConfirmStatus(user.userConfirmed)
      })
      .catch((e) => {
        const code = e.code;
        switch (code) {
          case "UserExistsException":
            console.log("User already exists.");
            // this.setShouldLogIn(true)
            return
        }
      })
  }

  async confirm(username: string, code: string) {
    await Auth.confirmSignUp(username, code)
      .then(() => {
        this.setConfirmStatus(true)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  async signIn(username: string, password: string) {
    await Auth.signIn(username, password)
      .then((user) => {
        this.setUser(user)
        this.setLoginStatus(true)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  async getUser(): Promise<CognitoUser | null> {
    return await Auth.currentAuthenticatedUser()
      .catch((e) => {
        console.log(e)
        return null
      })
  }

  async getLoginStatus(): Promise<boolean> {
    const attributes = await Auth.currentAuthenticatedUser()
      .catch((e) => {
        console.log(e)
      })
    if (attributes !== undefined) {
      console.log(attributes)
      return true
    } else {
      return false
    }
  }

  async getConfirmStatus(): Promise<boolean> {
    console.log("get confirm status")
    const attributes: CognitoUser = await Auth.currentAuthenticatedUser()
      .catch((e) => {
        console.log(e)
      })
    if (attributes !== undefined) {
      console.log(attributes)
      return true
    } else {
      return false
    }
  }

  setUser(user: CognitoUser | null) {
    this.user = user
  }

  setConfirmStatus(isConfirmed: boolean) {
    console.log("should confirm: : " + isConfirmed)
    this.isConfirmed = isConfirmed
  }

  setLoginStatus(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn
  }

}

export default UserStore;
