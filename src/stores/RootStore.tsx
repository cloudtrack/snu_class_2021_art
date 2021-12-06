import React from "react";
import ClassStore from "./ClassStore";
import PictureStore from "./PictrueStore";
import UserStore from "./UserStore"

class RootStore {
  userStore: UserStore;
  pictureStore: PictureStore;
  classStore : ClassStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.pictureStore = new PictureStore(this);
    this.classStore = new ClassStore(this);
  }
}

export default RootStore;

const StoresContext = React.createContext(new RootStore());
export const useStores = () => React.useContext(StoresContext);
