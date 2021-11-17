import {
  IonAvatar,
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonSkeletonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import CryptoJS from 'crypto-js';
import { UserDataType } from '../../models/domain/UserStore';
import './index.css';

interface IUserProfileProps {
  userData: UserDataType;
}

export const UserProfile: React.FC<IUserProfileProps> = ({ userData }) => {
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
        <IonRow class="ion-justify-content-center">
          <IonAvatar className="user-profile-avatar">
            <img src={`https://www.gravatar.com/avatar/${emailMD5Hash}`} />
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
