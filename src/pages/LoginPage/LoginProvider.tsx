import React from "react"
import { useStores } from "../../stores/RootStore"
import LoginController from "./LoginController"

const LoginProvider: React.FC = () => {
  const { userStore } = useStores()
  return (
    <LoginController userStore={userStore} />
  )
}

export default LoginProvider;
