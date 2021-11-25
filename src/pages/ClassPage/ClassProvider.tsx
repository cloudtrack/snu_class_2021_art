import React from "react"
import { useStores } from "../../stores/RootStore"
import ClassController from "./ClassController"

const ClassProvider: React.FC = () => {
  const { userStore } = useStores();
  return (
    <ClassController userStore={userStore} />
  );
}

export default ClassProvider;
