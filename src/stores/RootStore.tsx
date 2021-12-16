import React from "react";
import ArtworkStore from "./ArtworkStore";
import AssignmentStore from "./AssignmentStore";
import ClassStore from "./ClassStore";
import PictureStore from "./PictrueStore";
import UserStore from "./UserStore"

class RootStore {
  userStore: UserStore;
  pictureStore: PictureStore;
  classStore : ClassStore;
  assignmentStore: AssignmentStore;
  artworkStore: ArtworkStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.pictureStore = new PictureStore(this);
    this.classStore = new ClassStore(this);
    this.assignmentStore = new AssignmentStore(this);
    this.artworkStore = new ArtworkStore(this);
  }
}

export default RootStore;

const StoresContext = React.createContext(new RootStore());
export const useStores = () => React.useContext(StoresContext);
