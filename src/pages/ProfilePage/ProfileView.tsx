import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Profile.css';

interface profileProps {
  signOut: () => void
}


const ProfileView: React.FC<profileProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton
          onClick={() => {
            props.signOut()
          }}>LOG OUT</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ProfileView;
