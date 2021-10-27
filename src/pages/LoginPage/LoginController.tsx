
import Auth from "@aws-amplify/auth";
import React from "react";
import UserStore from "../../models/domain/UserStore";
import LoginView from "./LoginView";

const LoginController: React.FC<{ userStore: UserStore }> = (props) => {

  const onSubmit = (username: string, password: string) => {
    Auth.signIn(username, password)
  }

  return (
    <LoginView onSubmit={onSubmit}/>
  )
}

export default LoginController;
