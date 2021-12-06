import { IonButton, IonButtons, IonHeader, IonIcon, IonModal, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { observer } from "mobx-react";

interface IClassSearchModalProps {
  showModal : boolean;
  onDidDismiss: () => void;
};


const ClassSearchModal : React.FC<IClassSearchModalProps> = (props) => {
  const { showModal, onDidDismiss } = props;

  return (
    <IonModal
      isOpen={showModal}
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
    </IonModal>

  );
}

export default observer(ClassSearchModal);
