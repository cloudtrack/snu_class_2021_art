import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { logoFacebook, logoIonic } from "ionicons/icons";

const RegisterHomeView: React.FC = (props) => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar >
          <IonTitle class="ion-text-center">
            <IonIcon icon={logoIonic} />  {/* TODO: find a new icon */}
          </IonTitle>
          {/* <IonButtons slot="start">
                    <IonBackButton mode="md"/>
                </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonText class="ion-text-center">
          <h1>Build your art skills in the cloud<br />
            Demonstrate and share learning easily</h1>
        </IonText>
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
          Have an account already?
          <IonRouterLink routerLink="/login">
            Log in
          </IonRouterLink>
        </IonText>
      </IonContent>
    </IonPage>
  )
}

export default RegisterHomeView;
