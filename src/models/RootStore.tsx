import { autorun, toJS } from "mobx";
import React from "react";
import UserStore from "./domain/UserStore"

export function autoSave(store: any, save: any) {
  let firstRun = true;
  autorun(() => {
    const json = JSON.stringify(toJS(store));
    if (!firstRun) {
      save(store, json);
    }
    firstRun = false;
  });
}

class RootStore {
  userStore;
  constructor() {
    this.userStore = new UserStore(this)
  }
}

const StoresContext = React.createContext(new RootStore())
export const useStores = () => React.useContext(StoresContext);
