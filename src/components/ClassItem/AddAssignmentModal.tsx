import { IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { close } from "ionicons/icons";
import { observer } from "mobx-react";
import { useState } from "react";
import { Class } from "../../models";
import { useStores } from "../../stores/RootStore";

const AddAssignmentModal: React.FC<{
  classItem: Class;
  showModal: boolean;
  onDidDismiss: () => void;
}> = ({ classItem, showModal, onDidDismiss }) => {

  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [deadline, setDeadline] = useState("");

  const { assignmentStore } = useStores();

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
              value={startTime}
              onIonChange={e => setStartTime(e.detail.value!)}
              displayFormat="MMM DD, YYYY HH:mm" placeholder="Select due date"
            />
          </IonItem>
          <IonItem>
            <IonLabel>Deadline</IonLabel>
            <IonDatetime
              value={deadline}
              onIonChange={e => setDeadline(e.detail.value!)}
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
            assignmentStore.addAssignment(
              classItem.id,
              description,
              startTime,
              deadline
            );
            onDidDismiss();
          }}
        >
          Add Assignment
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default observer(AddAssignmentModal);
