import React from "react"
import { useStores } from "../../stores/RootStore"
import ProfileController from "./ProfileController"

const ProfileProvider: React.FC = () => {
  const { userStore } = useStores()
  return (
    <ProfileController userStore={userStore} />
  )
}

export default ProfileProvider;
