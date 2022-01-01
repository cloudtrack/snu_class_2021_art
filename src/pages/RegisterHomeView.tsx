import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { logoFacebook, logoGoogle, logoIonic } from "ionicons/icons";
import "./RegisterPage/RegisterController"
import "./RegisterHome.css"
import { observer } from "mobx-react";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

const RegisterHomeView: React.FC = () => {
  return (
    <IonPage >
      <IonHeader >
        <IonToolbar >
          <IonTitle class="ion-text-center">
            <IonIcon color="primary" icon={logoIonic} />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
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
            // "text-shadow": "2px 2px #000000",
            "text-shadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
          }}>
            Build your art skills in the cloud<br />
            Demonstrate and share learning easily
          </IonText>
        </div>
        <div className="footer">
          <IonButton color="danger" expand="block" onClick={
            () => {
              // amplify google federated signin
              Auth.federatedSignIn({
                provider: CognitoHostedUIIdentityProvider.Google,
              }).then(credentials => {
                console.log(credentials);
              }).catch(err => console.log(err));
            }}>
            <IonIcon slot="start" icon={logoGoogle} />
            Continue with Google
          </IonButton>
          <IonButton expand="block" color="tertiary">
            <IonIcon slot="start" icon={logoFacebook} onClick={
              () => {

              }
            } />
            Continue with Facebook
          </IonButton>
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
