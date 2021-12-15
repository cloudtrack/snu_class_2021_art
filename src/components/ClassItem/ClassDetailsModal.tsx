import { dismiss } from "@ionic/core/dist/types/utils/overlays";
import { IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonModal, IonRow, IonText, IonTextarea, IonTitle, IonToolbar, useIonPopover } from "@ionic/react";
import { add, arrowBack, close } from "ionicons/icons";
import { observer } from "mobx-react";
import { useState } from "react";
import { Class, Teacher } from "../../models";
import AddAssignmentModal from "./AddAssignmentModal";

interface IClassDeatilsProps {
  classItem: Class;
  teacher: Teacher;
  showClassDetails: boolean;
  onDidDismiss: () => void;
}

const ClassDetailsModal: React.FC<IClassDeatilsProps> = (props) => {
  const { classItem, teacher, showClassDetails, onDidDismiss } = props;
  const [addAssignment, setAddAssignment] = useState(false);

  return (
    <IonModal
      isOpen={showClassDetails}
      onDidDismiss={() => onDidDismiss()}
    >
      <AddAssignmentModal
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
          {(classItem.Assignments !== undefined &&
            classItem.Assignments.length > 0) ?
            classItem.Assignments.map((assignment) => (
              (assignment !== null) ?
                <IonItem key={assignment.id}>
                  <IonText>
                    <h3>{assignment.deadline}</h3>
                  </IonText>
                </IonItem> :
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
