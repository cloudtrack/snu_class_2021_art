import {
  IonAvatar,
  IonGrid,
  IonIcon,
  IonRow,
  IonSkeletonText,
  IonText
} from '@ionic/react';
import { pencil } from 'ionicons/icons';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { useStores } from '../../stores/RootStore';
import { UserDataType } from '../../stores/UserStore';
import { avatarImageFromEmail } from '../../utils';
import EditProfileModal from './EditProfileModal';
import './index.css';

interface IUserProfileProps {
  userData: UserDataType;
}

export const UserProfile: React.FC<IUserProfileProps> = observer(({ userData }) => {
  const [showProfileEditModal, setShowProfileEditModal] = useState(false);

  const { pictureStore } = useStores();

  pictureStore.getProfilePic(true);

  if (!userData) {
    return (
      <>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonAvatar className="user-profile-avatar">
              <IonSkeletonText animated />
            </IonAvatar>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonSkeletonText animated style={{ width: '50vw' }} />
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonSkeletonText animated style={{ width: '30vw' }} />
          </IonRow>
        </IonGrid>
      </>
    );
  }
  const { email, name, role } = userData;
  return (
    <>
      <IonGrid>
        <EditProfileModal
          userData={userData}
          showModal={showProfileEditModal}
          onDidDismiss={() => {
            setShowProfileEditModal(false);
          }}
        />
        <IonRow class="ion-justify-content-center">
          <IonAvatar
            className="user-profile-avatar"
            onClick={() => setShowProfileEditModal(true)}>
            {userData.profile ?
              <img alt="profilepic" src={`${pictureStore.profilethumbnailurl}`} /> :
              <img src={avatarImageFromEmail(email!)} />
            }
            <div className="avatar-upload" onClick={() => setShowProfileEditModal(true)}>
              <IonIcon icon={pencil} />
            </div>
          </IonAvatar>
        </IonRow>
        <IonRow class="ion-justify-content-center">
          <IonText>
            <u>
              <h1>{name}</h1>
            </u>
          </IonText>
        </IonRow>
        <IonRow class="ion-justify-content-center">
          <span>{role}</span>
        </IonRow>
      </IonGrid>
    </>
  );
});
