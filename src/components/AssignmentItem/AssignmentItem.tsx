import { IonCard, IonCardHeader, IonIcon, IonText, IonCardContent, IonCol, IonRow, IonGrid, IonFabButton } from "@ionic/react";
import { checkmarkDone, close, pencil } from "ionicons/icons";
import { observer } from "mobx-react";
import { useState } from "react";
import { Assignment } from "../../models";
import { useStores } from "../../stores/RootStore";
import AssignmentDetailsModal from "./AssignmentDetailsModal";

interface IAssignmentItemProps {
  index: number;
  assignment: Assignment;
}


const AssignmentItem: React.FC<IAssignmentItemProps> = observer(({
  index,
  assignment,
}) => {
  const [showDetails, setShowAssignmentDetails] = useState(false);

  const { userStore, artworkStore } = useStores();

  const submitted = artworkStore.artworks.find(artwork => (
    artwork.assignmentID === assignment.id &&
    artwork.studentID === userStore.userData?.id)
  );

  const overdue = Date.parse(assignment.deadline!!) < new Date().getTime();

  const getSubmitStatus = () => {
    let color = "";
    let icon;
    if (overdue && !submitted) { // 1 0
      color = "danger";
      icon = close;
    } else if (!overdue && !submitted) { // 0 0
      color = "warning";
      icon = pencil;
    } else { //
      color = "success";
      icon = checkmarkDone;
    }
    return(
      <IonFabButton color={color}>
        <IonIcon icon={icon} />
      </IonFabButton>
    )
  }

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
                    getSubmitStatus() : <></>
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
