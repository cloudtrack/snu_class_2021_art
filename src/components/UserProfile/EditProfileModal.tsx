import {
  createAnimation,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonText,
  IonToolbar
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

interface EditProfileModalProps {
  showModal: boolean;
  onDidDismiss: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = props => {
  const { showModal, onDidDismiss } = props;

  const enterAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0.99', transform: 'translateX(+100%)' },
        { offset: 1, opacity: '0.99', transform: 'translateX(0)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: any) => enterAnimation(baseEl).direction('reverse');

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
      <IonContent>
        <IonText>
          <h1>Show a profile picture here</h1>
        </IonText>
        {/* <AmplifyS3Image imgKey="profilepic/.png" /> */}
        <IonButton onClick={() => onDidDismiss()}>Edit Profile</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default EditProfileModal;
