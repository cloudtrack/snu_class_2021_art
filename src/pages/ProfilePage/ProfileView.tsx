import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { observer } from 'mobx-react';
import { NavList } from '../../components/NavList';
import { UserProfile } from '../../components/UserProfile';
import { UserDataType } from '../../models/domain/UserStore';
import './Profile.css';

interface IProfileProps {
  userData: UserDataType,
  signOut: () => void

}

const ProfileView: React.FC<IProfileProps> = ({userData, signOut}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <UserProfile userData={userData}></UserProfile>
        <NavList
          logout={() => {
            signOut()
          }}></NavList>
      </IonContent>
    </IonPage>
  );
};

export default observer(ProfileView);
