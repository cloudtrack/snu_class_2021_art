import { IonContent, IonPage, IonLabel, IonInput, IonItem, IonList, IonImg, IonButton } from "@ionic/react";
import React, { useState } from "react";


const RegisterView: React.FC<{ onSubmit: any }> = (props) => {

  const [text, setText] = useState<string>();
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
              value={text}
              placeholder="Enter Input"
              onIonChange={e => setText(
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
            onClick={
              props.onSubmit(text, password)
            }
          >Sign Up</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default RegisterView;
