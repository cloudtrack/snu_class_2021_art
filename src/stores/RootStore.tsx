import React from "react";
import AssignmentStore from "./AssignmentStore";
import ClassStore from "./ClassStore";
import PictureStore from "./PictrueStore";
import UserStore from "./UserStore"

class RootStore {
  userStore: UserStore;
  pictureStore: PictureStore;
  classStore : ClassStore;
  assignmentStore: AssignmentStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.pictureStore = new PictureStore(this);
    this.classStore = new ClassStore(this);
    this.assignmentStore = new AssignmentStore(this);
  }
}

export default RootStore;

const StoresContext = React.createContext(new RootStore());
export const useStores = () => React.useContext(StoresContext);
