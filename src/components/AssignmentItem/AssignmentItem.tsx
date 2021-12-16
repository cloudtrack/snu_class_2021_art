import { IonCard, IonCardHeader, IonIcon, IonText, IonCardContent, IonCol, IonRow, IonGrid, IonFabButton } from "@ionic/react";
import { pencil } from "ionicons/icons";
import { observer } from "mobx-react";
import { useState } from "react";
import { Assignment } from "../../models";
import { useStores } from "../../stores/RootStore";
import AssignmentDetailsModal from "./AssignmentDetailsModal";

interface IAssignmentItemProps {
  index: number;
  assignment: Assignment;
}

const SubmitStatus: React.FC<{ assignment: Assignment }> = observer(({ assignment }) => {

  return (
    <>
      <IonFabButton>
      </IonFabButton>
    </>
  )
});


const AssignmentItem: React.FC<IAssignmentItemProps> = observer(({
  index,
  assignment,
}) => {
  const [showDetails, setShowAssignmentDetails] = useState(false);

  const { userStore } = useStores();

  return (
    <>
      <AssignmentDetailsModal
        index={index}
        showAssignmentDeails={showDetails}
        assignment={assignment}
        onDidDismiss={() => setShowAssignmentDetails(false)}
      />
      <IonCard onClick={() => setShowAssignmentDetails(true)}>
        <IonCardHeader>
          <IonIcon icon={pencil} />
          <IonText color="dark">{`Assignment ${index + 1}`}</IonText>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonText>
                  <p>{assignment.description}</p>
                </IonText>
                <IonText>
                  <p>{assignment.openTime}</p>
                </IonText>
                <IonText>
                  <p>{assignment.deadline}</p>
                </IonText>
              </IonCol>
              <IonCol size="2">
                {
                  userStore.userData?.role === "student" ?
                    <SubmitStatus assignment={assignment} /> : <></>
                }
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </>
  )
});

export default AssignmentItem;
