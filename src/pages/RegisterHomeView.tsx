import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonModal, IonPage, IonRouterLink, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { close, logoFacebook, logoGoogle, logoIonic } from "ionicons/icons";
import "./RegisterPage/RegisterController"
import "./RegisterHome.css"
import { observer } from "mobx-react";
import { useStores } from "../stores/RootStore";
import React, { useEffect } from "react";
import { Auth } from "aws-amplify";


const RegisterHomeView: React.FC = () => {

  const { userStore } = useStores();
  const [showModal, setShowModal] = React.useState(false);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [role, setRole] = React.useState("");

  const isUsernameValid = (username: string): boolean => (
    username !== null && username !== '' && username.includes('@') && username.substr(username.indexOf('@')) !== ''
  );

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const isPasswordValid = (password: string): boolean => password !== null && password !== '' && password.match(passwordRegex) !== null;

  useEffect(() => {
    const getUser = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser();
      setUsername(attributes.email);
    };
    console.log(userStore.user);
    if (userStore.user !== null) {
      getUser();
    }
  });

  useEffect(() => {
    const initialize = async () => {
      if (!userStore.authCheckComplete) {
        setShowModal(false);
      } else {
        setShowModal(
          userStore.user !== null &&
          userStore.userData === null
        );
      }
    }
    initialize();

  }, [userStore.user, userStore.userData, userStore.authCheckComplete]);

  return (
    <IonPage >
      <IonHeader >
        <IonToolbar >
          <IonTitle class="ion-text-center">
            <IonIcon color="primary" icon={logoIonic} />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonModal
        isOpen={showModal}
        onDidDismiss={() => {
          // userStore.signOut();
          setShowModal(false);
        }}
      >
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => {
                userStore.signOut();
                setShowModal(false);
              }}>
                <IonIcon color="white" slot="icon-only" icon={close} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonText class="ion-text-center">
            <h1>One more step...</h1>
          </IonText>
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
                userStore.signUp(username, password, role);
              }}
              disabled={
                !(
                  isUsernameValid(username) &&
                  isPasswordValid(password) &&
                  password === confirmPassword &&
                  role !== ''
                )
              }
            >
              Sign Up
            </IonButton>
          </form>
        </IonContent>
      </IonModal>
      <IonContent className="homescreen" style={{
        "--background": "none",
        "background-image": "url(/assets/background2.jpg)",
        "background-position": "center top",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      }}>
        <div className="container">
          <IonText color="light" style={{
            "font-family": "millenia, serif",
            "font-size": "3rem",
            "text-shadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
          }}>
            Build your art skills in the cloud
          </IonText>
        </div>
        <div className="footer">
          <IonButton color="danger" expand="block" onClick={
            () => {
              // amplify google federated signin
              userStore.federatedLogIn("Google");
            }}>
            <IonIcon slot="start" icon={logoGoogle} />
            Continue with Google
          </IonButton>
          {/* <IonButton expand="block" color="tertiary">
            <IonIcon slot="start" icon={logoFacebook} onClick={
              () => {

              }
            } />
            Continue with Facebook
          </IonButton> */}
          <IonText color="light" class="ion-text-center" style={{
            "text-shadow": "1px 1px #0b0b0b"
          }}>
            Or
          </IonText>
          <IonButton fill="solid" expand="block" routerLink="/register" color="light">
            Create account
          </IonButton>
          <IonText color="light" style={{
            "text-shadow": "1px 1px #0b0b0b"
          }}>
            Have an account already? <IonRouterLink color="secondary" routerLink="/login">
              Log in
            </IonRouterLink>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default observer(RegisterHomeView);
