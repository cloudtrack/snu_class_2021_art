import { IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { close } from "ionicons/icons";
import { observer } from "mobx-react";
import { useState } from "react";

const AddAssignmentModal: React.FC<{
  showModal: boolean;
  onDidDismiss: () => void;
}> = ({ showModal, onDidDismiss }) => {

  const [description, setDescription] = useState("");

  return (
    <IonModal
      isOpen={showModal}
      onDidDismiss={() => onDidDismiss()}
    >
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onDidDismiss}>
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonButtons>
          <IonTitle>Add Assignment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea

              value={description}
              rows={6} cols={12}
              placeholder="Enter assignment description here"
              onIonChange={e => setDescription(e.detail.value!)}
            >
            </IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel>Start time</IonLabel>
            <IonDatetime
              displayFormat="MMM DD, YYYY HH:mm" placeholder="Select due date"
            />
          </IonItem>
          <IonItem>
            <IonLabel>Due Date</IonLabel>
            <IonDatetime
              displayFormat="MMM DD, YYYY HH:mm" placeholder="Select due date"
            />
          </IonItem>
        </IonList>
        <IonButton
          style={{
            margin: '20px 50px 20px 50px',
          }}
          type="submit"
          expand="block"
          onClick={() => {

          }}
        >
          Add Assignment
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default observer(AddAssignmentModal);
