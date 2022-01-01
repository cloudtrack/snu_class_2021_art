import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { close, logoFacebook, logoGoogle, logoIonic } from "ionicons/icons";
import "./RegisterPage/RegisterController"
import "./RegisterHome.css"
import { observer } from "mobx-react";
import { useStores } from "../stores/RootStore";
import React, { useEffect } from "react";


const RegisterHomeView: React.FC = () => {

  const { userStore } = useStores();
  const [showModal, setShowModal] = React.useState(
    false
  );

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
