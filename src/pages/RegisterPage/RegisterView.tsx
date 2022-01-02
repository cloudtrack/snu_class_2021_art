import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import UserStore from '../../stores/UserStore';

interface registerProps {
  userStore: UserStore;
  isUsernameValid: (username: string) => boolean;
  isPasswordValid: (password: string) => boolean;
  signUp: (username: string, password: string, role: string) => void;
  confirmSignUp: (username: string, password: string, code: string) => void;
}

const RegisterView: React.FC<registerProps> = observer(props => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const renderSignUp = (props: registerProps) => (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <form className="ion-padding">
        <IonImg style={{ margin: '20px auto 20px', width: '20%' }} src={'assets/md-applicon.svg'} />
        {/* <IonIcon src='/assets/shapes.svg'></IonIcon> */}
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
        <IonItem>
          <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput
            type="password"
            value={confirmPassword}
            placeholder="Enter Password again to confirm"
            onIonChange={e => setConfirmPassword(e.detail.value!)}
            clearInput
          />
        </IonItem>
        <IonItem>
          <IonLabel>Role</IonLabel>
          <IonSelect
            interface="popover"
            value={role}
            placeholder="Select Your Role"
            onIonChange={e => setRole(e.detail.value)}
            >
            <IonSelectOption value="student">Student</IonSelectOption>
            <IonSelectOption value="teacher">Teacher</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonButton
          style={{ margin: '50px 50px 50px 50px' }}
          expand="block"
          onClick={() => {
              props.signUp(username, password, role);
            }}
          disabled={
              !(
                props.isUsernameValid(username) &&
                props.isPasswordValid(password) &&
                password === confirmPassword &&
                role !== ''
              )
            }
          >
          Sign Up
        </IonButton>
      </form>
    </IonContent>
  );
  const renderConfirm = (props: registerProps) => (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Confirmation Code</IonLabel>
          <IonInput
            value={code}
            placeholder="Enter Input"
            onIonChange={e => setCode(e.detail.value!)}
            clearInput
          />
        </IonItem>
        <IonButton
          style={{ margin: '50px 50px 50px 50px' }}
          expand="block"
          onClick={e => {
              props.confirmSignUp(username, password, code);
            }}
          disabled={code.length !== 6}
          >
          Confirm Code
        </IonButton>
      </IonList>
    </IonContent>
  );
  return (
    <IonPage>
      {(() => {
        if (!props.userStore.isLoggedIn && props.userStore.shouldRenderConfirm) {
return renderConfirm(props);
} else {
return renderSignUp(props);
}
      })()}
    </IonPage>
  );
});

export default RegisterView;
