import React from "react";
import UserStore from "../../models/domain/UserStore";
import RegisterView from "./RegisterView";

const RegisterController: React.FC<{ userStore: UserStore }> = (props) => {
  const userStore = props.userStore;

  const onSubmit = (username: string, password: string) => {
    userStore.signUp(username, password)
  }
  return(
    <RegisterView onSubmit={onSubmit}/>
  )
}

export default RegisterController;
