
import React from "react";
import { useHistory } from "react-router";
import UserStore from "../../models/domain/UserStore";
import LoginView from "./LoginView";

const LoginController: React.FC<{ userStore: UserStore }> = (props) => {

  const { userStore } = props;

  const history = useHistory()
  const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const isUsernameValid = (username: string): boolean => {
    return username !== null &&
      username !== "" &&
      username.includes("@") &&
      username.substr(username.indexOf("@")) !== ""
  }

  const isPasswordValid = (password: string): boolean => {
    return password !== null &&
      password !== "" &&
      password.match(passwordRegex) !== null;
  }

  const onSubmit = async (username: string, password: string) => {
    await userStore.signIn(username, password);
    history.push("/")
  }

  return (
    <LoginView
      isUsernameValid={isUsernameValid}
      isPasswordValid={isPasswordValid}
      onSubmit={onSubmit} />
  )
}

export default LoginController;
