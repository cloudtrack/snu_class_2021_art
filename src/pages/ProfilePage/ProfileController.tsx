import { observer } from "mobx-react"
import { useHistory } from "react-router-dom"
import UserStore from "../../stores/UserStore"
import ProfileView from "./ProfileView"

interface profileViewModelProps {
  userStore: UserStore
}

const ProfileController: React.FC<profileViewModelProps> = observer((props) => {
  const { userStore } = props;
  const { userData } = userStore;
  const history = useHistory();

  const signOut = async () => {
    await userStore.signOut();
    history.replace("/pub")
  }

  return (
    <ProfileView userData={userData} signOut={signOut} />
  )
})

export default ProfileController
