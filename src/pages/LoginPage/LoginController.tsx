
import React from "react";
import UserStore from "../../models/domain/UserStore";
import LoginView from "./LoginView";

const LoginController: React.FC<{ userStore: UserStore }> = (props) => {
  const userStore = props.userStore;

  const onSubmit = (username: string, password: string) => {
    userStore.signIn(username, password)
  }

  return (
    <LoginView onSubmit={onSubmit}/>
  )
}

export default LoginController;
