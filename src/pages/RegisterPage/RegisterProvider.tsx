import React from "react"
import { useStores } from "../../stores/RootStore"
import RegisterController from "./RegisterController"

const RegisterProvider: React.FC = () => {
  const { userStore } = useStores()
  return (
    <RegisterController userStore={userStore} />
  )
}

export default RegisterProvider;
