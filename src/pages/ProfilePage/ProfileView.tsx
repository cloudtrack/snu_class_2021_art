import { IonAlert, IonAvatar, IonButton, IonButtons, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { logOutOutline, pencilOutline } from 'ionicons/icons';
import { useState } from 'react';
import { Student, Teacher } from '../../models';
import EditProfileModal from './EditProfileModal';
import { observer } from 'mobx-react';
import { UserProfile } from '../../components/UserProfile';
import { UserDataType } from '../../models/domain/UserStore';
import { useStores } from '../../models/RootStore';
import './Profile.css';

interface profileProps {
  userData: UserDataType,
  signOut: () => void

}

const ProfileView: React.FC<profileProps> = ({userData, signOut}) => {
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
                signOut();
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <UserProfile userData={userData}></UserProfile>
        <IonButton
          onClick={() => {
            signOut()
          }}>LOG OUT</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default observer(ProfileView);
