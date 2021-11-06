import { IonContent, IonPage, IonLabel, IonInput, IonItem, IonList, IonImg, IonButton, IonHeader, IonBackButton, IonButtons, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { observer } from 'mobx-react'
import UserStore from "../../models/domain/UserStore";


interface registerProps {
  userStore: UserStore,
  isUsernameValid: (username: string) => boolean,
  isPasswordValid: (password: string) => boolean,
  signUp: (username: string, password: string) => {},
  confirmSignUp: (username: string, password: string, code: string) => {}
}

const RegisterView: React.FC<registerProps> = observer((props) => {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const renderSignUp = (props: registerProps) => {
    return (
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonImg
            style={{ margin: "20px auto 20px", width: "20%" }}
            src={"assets/icon/icon.png"}
          ></IonImg>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              value={username}
              placeholder="Enter Input"
              onIonChange={e => setUsername(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              placeholder="Enter Password"
              onIonChange={e => setPassword(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonButton
            style={{ margin: "50px 50px 50px 50px" }}
            expand="block"
            type="submit"
            onClick={() => { props.signUp(username, password) }}
            disabled={
              !(props.isUsernameValid(username) && props.isPasswordValid(password))
            }
          >Sign Up</IonButton>
        </IonList>
      </IonContent>
    )
  }
  const renderConfirm = (props: registerProps) => {
    return (
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Confirmation Code</IonLabel>
            <IonInput value={code}
              placeholder="Enter Input"
              onIonChange={e => setCode(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonButton
            style={{ margin: "50px 50px 50px 50px" }}
            expand="block"
            type="submit"
            onClick={(e) => {
              props.confirmSignUp(username, password, code)
            }}
            disabled={code.length !== 6}
          >Confirm Code</IonButton>
        </IonList>
      </IonContent>
    )
  }

  return (
    <IonPage>
      {!props.userStore.isConfirmed && props.userStore.user !== null ? renderConfirm(props) : renderSignUp(props)}
    </IonPage>
  )
})

export default RegisterView;
