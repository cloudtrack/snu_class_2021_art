import { observer } from "mobx-react"
import ClassStore from "../../stores/ClassStore";
import UserStore from "../../stores/UserStore"
import ClassView from "./ClassView"

interface IClassControllerProps {
  userStore: UserStore;
  classStore: ClassStore;
}

const ClassController: React.FC<IClassControllerProps> = observer((props) => {
  const { userStore, classStore } = props;
  const { userData } = userStore;

  classStore.initialize();

  return (
    <ClassView userData={userData}/>
  );
})

export default ClassController;
