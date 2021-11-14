import { IonAvatar, IonButton, IonButtons, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { cameraOutline, logOutOutline, pencilOutline } from 'ionicons/icons';
import { useState } from 'react';
import EditProfileModal from './EditProfileModal';
import './Profile.css';

interface profileProps {
  role: string,
  signOut: () => void

}

const ProfileView: React.FC<profileProps> = (props) => {

  const [showProfileEditModal, setShowProfileEditModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <IonTitle>Profile</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={props.signOut}>
              <IonIcon slot="icon-only" icon={logOutOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <EditProfileModal
          showModal={showProfileEditModal}
          onDidDismiss={() => {
            setShowProfileEditModal(false);
          }}
        />
        <IonGrid className="top">
          <IonRow className="ion-text-center ion-justify-content-center">
            <IonCol size="12" className="animate__animated animate__fadeInTopLeft animate__faster">
              <IonAvatar className="avatar">
                {/* Just a placeholder avatar */}
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
              </IonAvatar>
              <div className="avatarUpload" onClick={ () => setShowProfileEditModal(true)}>
                <IonIcon icon={pencilOutline} />
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
