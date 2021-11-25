import React from "react";
import PictureStore from "./PictrueStore";
import UserStore from "./UserStore"

class RootStore {
  userStore: UserStore;
  pictureStore: PictureStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.pictureStore = new PictureStore(this);
  }
}

export default RootStore;

const StoresContext = React.createContext(new RootStore());
export const useStores = () => React.useContext(StoresContext);
