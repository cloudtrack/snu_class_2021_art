import {
  createAnimation,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonModal,
  IonToolbar,
  useIonPopover
} from '@ionic/react';
import CryptoJS from 'crypto-js';
import { arrowBack } from 'ionicons/icons';
import { UserDataType } from '../../stores/UserStore';
import PhotoGalleryPopover from './PhotoGalleryPopover';
import { AmplifyS3Image } from '@aws-amplify/ui-react/legacy';
import './EditProfileModal.css'

interface EditProfileModalProps {
  userData: UserDataType;
  showModal: boolean;
  onDidDismiss: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = (props) => {
  const { userData, showModal, onDidDismiss } = props;

  const enterAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '1', transform: 'translateX(+100%)' },
        { offset: 1, opacity: '1', transform: 'translateX(0)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: any) => enterAnimation(baseEl).direction('reverse');

  const [present, dismiss] = useIonPopover(PhotoGalleryPopover, { onDidDismiss, onHide: () => dismiss() });

  const emailMD5Hash = CryptoJS.MD5(userData!.email!);

  return (
    <IonModal
      isOpen={showModal}
      enterAnimation={enterAnimation}
      leaveAnimation={leaveAnimation}
      onDidDismiss={() => onDidDismiss()}
    >
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => onDidDismiss()}>
              <IonIcon color="white" slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <div className="container">
        {
          userData?.profile ?
              <AmplifyS3Image imgKey={`profilepic/originals/${userData?.profile}`} /> :
            <IonImg src={`https://www.gravatar.com/avatar/${emailMD5Hash}`} />
        }
      </div>
      <div className="footer">
        <IonButton
          className="ion-padding"
          expand="block"
          fill="outline"
          onClick={() => present()}
        >
          Edit Profile
        </IonButton>
      </div>
    </IonModal>
  );
};

export default EditProfileModal;
