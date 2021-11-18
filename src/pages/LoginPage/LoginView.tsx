import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

interface loginProps {
  isUsernameValid: any;
  isPasswordValid: any;
  onSubmit: any;
}

const LoginView: React.FC<loginProps> = observer(props => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonImg
            style={{
              margin: '20px auto 20px',
              width: '20%',
            }}
            src={'assets/icon/icon.png'}
          />
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              value={username}
              placeholder="Enter Input"
              onIonChange={e => setUsername(e.detail.value!)}
              clearInput
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              placeholder="Enter Password"
              onIonChange={e => setPassword(e.detail.value!)}
              clearInput
            />
          </IonItem>
          <IonButton
            style={{
              margin: '50px 50px 50px 50px',
            }}
            type="submit"
            expand="block"
            onClick={() => {
              props.onSubmit(username, password);
            }}
            disabled={!(props.isUsernameValid(username) && props.isPasswordValid(password))}
          >
            Log In
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
});

export default LoginView;
