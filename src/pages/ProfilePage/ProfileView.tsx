import { IonAlert, IonAvatar, IonButton, IonButtons, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { logOutOutline, pencilOutline } from 'ionicons/icons';
import { useState } from 'react';
import { Student, Teacher } from '../../models';
import EditProfileModal from './EditProfileModal';
import './Profile.css';

interface profileProps {
  userData: Student | Teacher | null,
  signOut: () => void

}

const ProfileView: React.FC<profileProps> = (props) => {

  const [showProfileEditModal, setShowProfileEditModal] = useState(false);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  return (
    <IonPage>
      <IonAlert
          isOpen={showLogoutAlert}
          onDidDismiss={() => setShowLogoutAlert(false)}
          // cssClass='my-custom-class'
          header={'Log out'}
          message={'Are you sure you want to log out?'}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok');
                props.signOut();
              }
            }
          ]}
        />
      <IonHeader>
        <IonToolbar >
          <IonTitle>Profile</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowLogoutAlert(true)}>
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
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar>
              <div className="avatarUpload" onClick={ () => setShowProfileEditModal(true)}>
                <IonIcon icon={pencilOutline} />
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonCardTitle>{props.userData?.name}</IonCardTitle>
              <IonCardSubtitle>{props.userData?.email}</IonCardSubtitle>
              <IonCardSubtitle>{props.userData?.role}</IonCardSubtitle>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ProfileView;
