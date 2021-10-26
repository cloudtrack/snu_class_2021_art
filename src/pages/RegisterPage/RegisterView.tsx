import { IonContent, IonPage, IonLabel, IonInput, IonItem, IonList, IonImg, IonButton } from "@ionic/react";
import React, { useState } from "react";


const RegisterView: React.FC<{
  isUsernameValid: any,
  isPasswordValid: any,
  onSubmit: any
}> = (props) => {

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonImg
            style={{
              margin: "20px auto 20px",
              width: "20%"
            }}
            src={"assets/icon/icon.png"}
          ></IonImg>
          <IonItem>
            <IonLabel
              position="floating"
            >Email</IonLabel>
            <IonInput
              value={username}
              placeholder="Enter Input"
              onIonChange={e => setUsername(
                e.detail.value!
              )}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel
              position="floating"
            >Password</IonLabel>
            <IonInput
              value={password}
              placeholder="Enter Input"
              onIonChange={e => setPassword(
                e.detail.value!
              )}
              clearInput
            ></IonInput>
          </IonItem>
          <IonButton
            style={{
              margin: "50px 50px 50px 50px"
            }}
            expand="block"
            type="submit"
            onClick={() => {
              if (props.isUsernameValid(username) && props.isPasswordValid(password)) {
                props.onSubmit(username, password)
              }
            }}
          >Sign Up</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default RegisterView;
