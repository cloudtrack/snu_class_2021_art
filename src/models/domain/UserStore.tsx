
import Amplify, { Auth } from "aws-amplify";
import { makeAutoObservable } from "mobx";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);

class UserStore {
  rootStore
  user: any | null = null
  isConfirmed: boolean = false
  isLoggedIn: boolean = false

  constructor(rootStore : any) {
    this.rootStore = rootStore
    makeAutoObservable(this, {rootStore : false})
  }

  async signUp(username: string, password: string) {
    console.log("yooooo signing up userstore")
    await Auth.signUp(username, password)
      .then((user) => {
        this.user = user
        this.isConfirmed = user.userConfirmed
        console.log(user)
      })
      .catch((e) => {
        console.log('error signing up:', e)
      });
  }

  async signIn(username: string, password: string) {
    await Auth.signIn(username, password)
      .then(user => {
        this.user = user
        this.isLoggedIn = true
        console.log(user)
      })
      .catch(e => {
        console.log(e);
      })
  }

  async confirmAuthentication(username: string, password: string, code: string) {
    try {
      await Auth.confirmSignUp(username, code)
      this.isConfirmed = true
      await Auth.signIn(username, password).then(
        (user) => {
          this.user = user
          this.isLoggedIn = true
        }
      )
    } catch (e) {
      console.log(e)
    }
  }


}

export default UserStore;
