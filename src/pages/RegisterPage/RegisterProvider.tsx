import React from "react"
import { useStores } from "../../models/RootStore"
import RegisterController from "./RegisterController"

const RegisterProvider: React.FC = () => {
  const { userStore } = useStores()
  return (
    <RegisterController userStore={userStore} />
  )
}

export default RegisterProvider;
