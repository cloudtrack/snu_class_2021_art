

import { action, extendObservable, makeObservable, observable } from "mobx";
import { Storage } from "@capacitor/storage"
import { autoSave } from "../RootStore";


class UserStore {
  rootStore
  user: string | null = null
  shouldConfirm: boolean = false
  shouldLogIn: boolean = false
  isLoggedIn: boolean = false

  constructor(rootStore: any) {
    this.rootStore = rootStore
    makeObservable(this, {
      user: observable,
      shouldConfirm: observable,
      shouldLogIn: observable,
      isLoggedIn: observable,
      setUser: action,
      setLoggedIn: action,
      rootStore: false
    })
    this.load()
    autoSave("userStore", this.save.bind(this))
  }

  async load() {
    const { value } = await Storage.get({ key: "userStore" })
    if (value !== null) {
      const data = JSON.parse(value)
      extendObservable(this, data)
    }
  }

  async save(json: string) {
    await Storage.set({
      key: "userStore",
      value: json
    })
  }

  setUser(user: string | null) {
    this.user = user
  }

  setShouldConfirm(shouldConfirm: boolean) {
    this.shouldConfirm = shouldConfirm
  }

  setShouldLogIn(shouldLogIn: boolean) {
    this.shouldLogIn = shouldLogIn
  }

  setLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn
  }

  // async signIn(username: string, password: string) {
  //   await Auth.signIn(username, password)
  //     .then(user => {
  //       this.user = user
  //       this.isLoggedIn = true
  //       console.log(user)
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     })
  // }

}

export default UserStore;
