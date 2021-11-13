import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { logoFacebook, logoGoogle, logoIonic } from "ionicons/icons";
import "./RegisterPage/RegisterController"
import "./RegisterHome.css"
import { observer } from "mobx-react";

const RegisterHomeView: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar >
          <IonTitle class="ion-text-center">
            <IonIcon icon={logoIonic} />  {/* TODO: find a new icon */}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <div className="container">
          <IonText >
            <h1>Build your art skills in the cloud<br />
              Demonstrate and share learning easily</h1>
          </IonText>
        </div>
        <div className="footer">
          <IonButton color="danger" expand="block">
            <IonIcon slot="start" icon={logoGoogle} />
            Continue with Google
          </IonButton>
          <IonButton expand="block">
            <IonIcon slot="start" icon={logoFacebook} />
            Continue with Facebook
          </IonButton>
          <IonText color="medium" class="ion-text-center">
            Or
          </IonText>
          <IonButton fill="outline" expand="block" routerLink="/register">
            Create account
          </IonButton>
          <IonText color="medium">
            Have an account already? <IonRouterLink routerLink="/login">
              Log in
            </IonRouterLink>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default observer(RegisterHomeView);
