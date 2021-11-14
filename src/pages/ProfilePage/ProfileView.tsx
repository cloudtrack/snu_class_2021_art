import { IonAvatar, IonButton, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { cameraOutline, personCircle } from 'ionicons/icons';
import './Profile.css';

interface profileProps {
  role: string,
  signOut: () => void
}

const ProfileView: React.FC<profileProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="top">
          <IonRow>
            <IonCol size="12">
              <IonAvatar className="avatar">
                {/* Just a placeholder avatar */}
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
              </IonAvatar>
              <div className="avatarUpload">
                <IonIcon icon={cameraOutline} />
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonCardTitle>Username</IonCardTitle>
              <IonCardSubtitle>{props.role}</IonCardSubtitle>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* A debug button for now */}
        <IonButton
          onClick={() => {
            props.signOut()
          }}>
          LOG OUT
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ProfileView;
