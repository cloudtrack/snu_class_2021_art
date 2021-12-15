import React from "react"
import { useStores } from "../../stores/RootStore"
import ClassController from "./ClassController"

const ClassProvider: React.FC = () => {
  const { userStore, classStore } = useStores();

  return (
    <ClassController
    userStore={userStore}
    classStore={classStore} />
  );
}

export default ClassProvider;
