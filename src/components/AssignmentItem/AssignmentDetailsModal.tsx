import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { Assignment } from "../../models";
import { useStores } from "../../stores/RootStore";
import TeacherAssignment from "../TeacherAssignment";

interface IAssignmentDetailsProps {
  showAssignmentDeails: boolean;
  onDidDismiss: () => void;
  assignment: Assignment;
}

const AssignmentDetailsModal: React.FC<IAssignmentDetailsProps> = (props) => {
  const { showAssignmentDeails, onDidDismiss, assignment } = props;

  const { userStore } = useStores();

  return (
    <IonModal
      isOpen={showAssignmentDeails}
      onDidDismiss={() => onDidDismiss()}
    >
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => onDidDismiss()}>
              <IonIcon color="white" slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Assignment Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {
          (userStore.userData?.role === "teacher") ?
          <TeacherAssignment assignment={assignment}/> : //<StudentAssignment />
          <></>
        }
      </IonContent>
    </IonModal>
  );
}

export default AssignmentDetailsModal;
