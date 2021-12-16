import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { Assignment } from "../../models";
import { useStores } from "../../stores/RootStore";
import StudentAssignment from "../StudentAssignment";
import TeacherAssignment from "../TeacherAssignment";

interface IAssignmentDetailsProps {
  showAssignmentDeails: boolean;
  onDidDismiss: () => void;
  assignment: Assignment;
  index: number;
}

const AssignmentDetailsModal: React.FC<IAssignmentDetailsProps> = (props) => {
  const { showAssignmentDeails, onDidDismiss, assignment, index } = props;

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
          <TeacherAssignment
          assignment={assignment}
          index={index}
          /> :
          <StudentAssignment
          assignment={assignment}
          index={index}
          />
        }
      </IonContent>
    </IonModal>
  );
}

export default AssignmentDetailsModal;
