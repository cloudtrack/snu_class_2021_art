import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { observer } from 'mobx-react';
import { NavList } from '../../components/NavList';
import { UserProfile } from '../../components/UserProfile';
import { UserDataType } from '../../stores/UserStore';
import './Profile.css';

interface profileProps {
  signOut: () => void;
  userData: UserDataType;
}

const ProfileView: React.FC<profileProps> = ({ userData, signOut }) => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle size="large">Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding" fullscreen>
      <UserProfile userData={userData} />
      <NavList
        logout={() => {
            signOut();
          }}
      />
    </IonContent>
  </IonPage>
);

export default observer(ProfileView);
