import { observer } from "mobx-react"
import UserStore from "../../stores/UserStore"
import ClassView from "./ClassView"

interface IClassControllerProps {
  userStore: UserStore;
}

const ClassController: React.FC<IClassControllerProps> = observer((props) => {
  const { userStore } = props;
  const { userData } = userStore;

  return (
    <ClassView userData={userData}/>
  );
})

export default ClassController;
