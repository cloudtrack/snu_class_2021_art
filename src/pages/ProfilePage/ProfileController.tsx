

import Auth from "@aws-amplify/auth"
import Amplify from "@aws-amplify/core"
import { observer } from "mobx-react"
import { useHistory } from "react-router"
import awsconfig from "../../aws-exports.js"
import UserStore from "../../models/domain/UserStore"
import ProfileView from "./ProfileView"

Amplify.configure(awsconfig)

interface profileViewModelProps {
  userStore: UserStore
}

const ProfileController: React.FC<profileViewModelProps> = observer((props) => {
  const history = useHistory()

  const signOut = async () => {
    await Auth.signOut()
      .then(
        () => {
          props.userStore.setUser(null)
          props.userStore.setShouldConfirm(false)
          props.userStore.setShouldLogIn(false)
          props.userStore.setLoggedIn(false)
        }
      )
      .catch(e => console.log(e))
    history.push("/")
  }

  return (
    <ProfileView
      signOut={signOut} />
  )
})

export default ProfileController
