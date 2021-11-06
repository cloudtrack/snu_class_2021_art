import Amplify from "aws-amplify";
import awsconfig from "../../aws-exports";
import React from "react";
import UserStore from "../../models/domain/UserStore";
import RegisterView from "./RegisterView";
import { observer } from "mobx-react";

Amplify.configure(awsconfig);

const RegisterController: React.FC<{ userStore: UserStore }> = observer((props) => {
  const userStore = props.userStore;
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

  const signUp = async (username: string, password: string) => {
    await userStore.signUp(username, password);
  }

  const confirm = async (username: string, password: string, code: string) => {
    await userStore.confirm(username, code);
    await userStore.signIn(username, password);
  }

  console.log(userStore)

  return (
    <RegisterView
      userStore={userStore}
      isUsernameValid={isUsernameValid}
      isPasswordValid={isPasswordValid}
      signUp={signUp}
      confirmSignUp={confirm} />
  )
})

export default RegisterController;
