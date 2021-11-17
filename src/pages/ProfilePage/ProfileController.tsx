

import Amplify from "@aws-amplify/core"
import { observer } from "mobx-react"
import { useHistory } from "react-router-dom"
import awsconfig from "../../aws-exports.js"
import UserStore from "../../models/domain/UserStore"
import ProfileView from "./ProfileView"

Amplify.configure(awsconfig)

interface profileViewModelProps {
  userStore: UserStore
}

const ProfileController: React.FC<profileViewModelProps> = observer((props) => {
  const { userStore } = props;
  const history = useHistory();

  const signOut = async () => {
    await userStore.signOut();
    history.replace("/pub")
  }

  return (
    <ProfileView
    userData={userStore.userData}
    signOut={signOut} />
  )
})

export default ProfileController
