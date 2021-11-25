import { AmplifyS3Image } from '@aws-amplify/ui-react';
import {
  IonAvatar,
  IonGrid,
  IonIcon,
  IonRow,
  IonSkeletonText,
  IonText
} from '@ionic/react';
import CryptoJS from 'crypto-js';
import { pencilOutline } from 'ionicons/icons';
import { useState } from 'react';
import { UserDataType } from '../../stores/UserStore';
import EditProfileModal from './EditProfileModal';
import './index.css';

interface IUserProfileProps {
  userData: UserDataType;
}

export const UserProfile: React.FC<IUserProfileProps> = ({ userData }) => {
  const [showProfileEditModal, setShowProfileEditModal] = useState(false);

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
  const emailMD5Hash = CryptoJS.MD5(email!);
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
              <AmplifyS3Image
              imgKey={`profilepic/thumbnails/thumbnail-${userData.profile}`}
              /> : // show thumbnails
              // <IonText>{userData.profile}</IonText> :
              <img src={`https://www.gravatar.com/avatar/${emailMD5Hash}`} />}
            <div className="avatar-upload" onClick={() => setShowProfileEditModal(true)}>
              <IonIcon icon={pencilOutline} />
            </div>
          </IonAvatar>
        </IonRow>
        <IonRow class="ion-justify-content-center">
          <h1>{name}</h1>
        </IonRow>
        <IonRow class="ion-justify-content-center">
          <span>{role}</span>
        </IonRow>
      </IonGrid>
    </>
  );
};
