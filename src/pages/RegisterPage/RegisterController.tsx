import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import React from "react";
import { useHistory } from "react-router";
import UserStore from "../../models/domain/UserStore";
import RegisterView from "./RegisterView";
import { observer } from "mobx-react";

Amplify.configure(awsconfig);

const RegisterController: React.FC<{ userStore: UserStore }> = observer((props) => {
  const userStore = props.userStore;
  const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

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

  const signUp = async (username: string, password: string) => {
    await Auth.signUp(username, password)
      .then((user) => {
        userStore.setUser(user.userSub)
        userStore.setShouldConfirm(!user.userConfirmed)
      })
      .catch((e) => {
        const code = e.code;
        switch (code) {
          case "UserExistsException":
            userStore.setShouldLogIn(true)
            return
        }
      })
    history.push("/register")
  }

  const confirm = async (username: string, password: string, code: string) => {
    await Auth.confirmSignUp(username, code)
      .then(() => { userStore.setShouldConfirm(false) })
      .catch((e) => {
        userStore.setShouldConfirm(false)
        console.log(e)
      })
    await Auth.signIn(username, password).then(
      (user) => {
        userStore.setUser(user.userSub)
        userStore.setShouldLogIn(false)
        userStore.setLoggedIn(true)
      }
    ).catch((e) => {
      userStore.setShouldConfirm(false)
      console.log(e)})
    if (userStore.isLoggedIn) {
      history.push("/")
    }
  }

  return (
    <RegisterView
      user={userStore.user}
      shouldConfirm={userStore.shouldConfirm}
      shouldLogIn={userStore.shouldLogIn}
      isUsernameValid={isUsernameValid}
      isPasswordValid={isPasswordValid}
      signUp={signUp}
      confirmSignUp={confirm} />
  )
})

export default RegisterController;
