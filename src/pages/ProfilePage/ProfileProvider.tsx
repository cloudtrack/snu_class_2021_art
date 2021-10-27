import React from "react"
import { useStores } from "../../models/RootStore"
import ProfileController from "./ProfileController"

const ProfileProvider: React.FC = () => {
  const { userStore } = useStores()
  return (
    <ProfileController userStore={userStore} />
  )
}

export default ProfileProvider;
