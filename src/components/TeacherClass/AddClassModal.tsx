import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonText, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { observer } from "mobx-react";
import { useState } from "react";
import ClassStore from "../../stores/ClassStore";
import { useStores } from "../../stores/RootStore";

interface IAddClassModalProps {
  showModal: boolean;
  onDidDismiss: () => void;
}

const AddClassModal: React.FC<IAddClassModalProps> = (props) => {

  const [className, setClassName] = useState("");
  const [classDescription, setClassDescription] = useState("");
  const { showModal, onDidDismiss } = props;

  const { classStore } = useStores();

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
          <IonTitle>Create New Class</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Class Name</IonLabel>
            <IonInput
              value={className}
              onIonChange={e => setClassName(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Class Description</IonLabel>
            <IonTextarea
              value={classDescription}
              rows={6} cols={12}
              placeholder="Enter class description here"
              onIonChange={e => setClassDescription(e.detail.value!)}
            >
            </IonTextarea>
          </IonItem>
        </IonList>
        <IonButton
          style={{
            margin: '50px 50px 50px 50px',
          }}
          type="submit"
          expand="block"
          onClick={() => {
            classStore.addClass(className, classDescription);
            onDidDismiss();
          }}
        >
          Create Class
        </IonButton>
      </IonContent>
    </IonModal>
  );
}

export default observer(AddClassModal);
