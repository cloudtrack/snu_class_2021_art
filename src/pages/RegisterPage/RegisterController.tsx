import React from "react";
import UserStore from "../../models/domain/UserStore";
import RegisterView from "./RegisterView";

const RegisterController: React.FC<{ userStore: UserStore }> = (props) => {
  const userStore = props.userStore;
  const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  const isUsernameValid = (username: string): boolean => {
    return typeof username !== "undefined" &&
      username !== null &&
      username !== "" &&
      username.includes("@") &&
      username.substr(username.indexOf("@")) !== ""
  }

  const isPasswordValid = (password: string): boolean => {
    return typeof password !== "undefined" &&
      password !== null &&
      password !== "" &&
      password.match(passwordRegex) !== null;
  }

  const onSubmit = (username: string, password: string): void => {
    userStore.signUp(username, password)
  }

  return (
    <RegisterView
      isUsernameValid={isUsernameValid}
      isPasswordValid={isPasswordValid}
      onSubmit={onSubmit} />
  )
}

export default RegisterController;
