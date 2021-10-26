import React from "react";
import { useHistory } from "react-router";
import UserStore from "../../models/domain/UserStore";
import RegisterView from "./RegisterView";

const RegisterController: React.FC<{ userStore: UserStore }> = (props) => {
  const userStore = props.userStore;
  const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  const history = useHistory()
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

  const onSignUp = (username: string, password: string): void => {
    userStore.signUp(username, password)
    history.push("/register")
  }

  const onConfirm = (username: string, password: string, code : string ) => {
    userStore.confirmAuthentication(username, password, code)
    if (userStore.isLoggedIn) {
      history.push("/")
    }
  }

  return (
    <RegisterView
      user = {userStore.user}
      isUsernameValid={isUsernameValid}
      isPasswordValid={isPasswordValid}
      onSignUp={onSignUp}
      onConfirm={onConfirm} />
  )
}

export default RegisterController;
