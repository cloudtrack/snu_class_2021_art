import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonText, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { observer } from "mobx-react";

interface IAddClassModalProps {
  showModal: boolean;
  onDidDismiss: () => void;
}

const AddClassModal: React.FC<IAddClassModalProps> = (props) => {

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
          <IonText>
            <h1>Add Class</h1>
          </IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      </IonContent>
    </IonModal>
  );
}

export default observer(AddClassModal);
