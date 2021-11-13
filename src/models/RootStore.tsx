import React from "react";
import UserStore from "./domain/UserStore"

class RootStore {
  userStore;
  constructor() {
    this.userStore = new UserStore(this)
  }
}

const StoresContext = React.createContext(new RootStore())
export const useStores = () => React.useContext(StoresContext);
