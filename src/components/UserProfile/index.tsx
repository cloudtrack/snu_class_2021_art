import Auth from '@aws-amplify/auth';
import { AmplifyS3Image } from '@aws-amplify/ui-react/legacy';
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
import { observer } from 'mobx-react';
import { useState } from 'react';
import { useStores } from '../../stores/RootStore';
import { UserDataType } from '../../stores/UserStore';
import EditProfileModal from './EditProfileModal';
import './index.css';

interface IUserProfileProps {
  userData: UserDataType;
}

export const UserProfile: React.FC<IUserProfileProps> = observer(({ userData }) => {
  const [showProfileEditModal, setShowProfileEditModal] = useState(false);

  const { pictureStore } = useStores();

  pictureStore.getProfilePic(true);
  // should be in a controller / view model

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
              <img alt="profilepic" src={`${pictureStore.profilethumbnailurl}`} /> :
              // <AmplifyS3Image
              //   imgKey={`us-west-1:${accessKeyId}profilepic/thumbnails/thumbnail-${userData.profile}`}
              // /> : // show thumbnails
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
});
