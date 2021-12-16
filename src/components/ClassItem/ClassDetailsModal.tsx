import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonList, IonModal, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { add, arrowBack } from "ionicons/icons";
import { observer } from "mobx-react";
import { useState } from "react";
import { Class } from "../../models";
import { useStores } from "../../stores/RootStore";
import AssignmentItem from "../AssignmentItem/AssignmentItem";
import AddAssignmentModal from "./AddAssignmentModal";

export interface IClassDeatilsProps {
  classItem: Class;
  showClassDetails: boolean;
  onDidDismiss: () => void;
}

const ClassDetailsModal: React.FC<IClassDeatilsProps> = (props) => {
  const { classItem, showClassDetails, onDidDismiss } = props;
  const [addAssignment, setAddAssignment] = useState(false);

  const { assignmentStore } = useStores();

  return (
    <IonModal
      isOpen={showClassDetails}
      onDidDismiss={() => onDidDismiss()}
    >
      <AddAssignmentModal
        classItem={classItem}
        showModal={addAssignment}
        onDidDismiss={() => setAddAssignment(false)} />
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => onDidDismiss()}>
              <IonIcon color="white" slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Class Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid
          style={{
            "background-color": "#e4e4e4",
          }}
          className="ion-padding">
          <IonRow >
            <IonText color="white"><h1>{classItem.name}</h1></IonText>
          </IonRow>
          <IonRow>
            <IonText color="medium">
              <p>{classItem.description}</p>
            </IonText>
          </IonRow>
        </IonGrid>
        <IonGrid
          className="ion-padding-horizontal"
          style={{
            "background-color": "#f4f4f4",
          }}>
          <IonRow>
            <IonCol>
              <IonText>
                <h2>Assignments</h2>
              </IonText>
            </IonCol>
            <IonCol className="ion-no-padding ion-align-self-center ion-text-right">
              <IonButton className="ion-no-padding" color="dark" fill="clear" onClick={() => {
                setAddAssignment(true);
              }}>
                <IonIcon slot="icon-only" icon={add} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          {(assignmentStore.assignments.length > 0) ?
            assignmentStore.assignments.filter(
              (assignment) => assignment.classID === classItem.id
            ).map((assignment, index) => (
              (assignment !== null) ?
              <AssignmentItem assignment={assignment} index={index} /> :
              <></>
            )) :
            <IonItem no-lines>
              <IonText>
                <p>You haven't annoucned any assignments!</p>
              </IonText>
            </IonItem>
          }
        </IonList>

      </IonContent>
      {/* <IonFab className="ion-padding" vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="primary">
            <IonIcon
              icon={add}
              onClick={() => {
                // setIsFabOpen(true);
              }} />
          </IonFabButton>
        </IonFab> */}
    </IonModal>
  );
}

export default observer(ClassDetailsModal);
