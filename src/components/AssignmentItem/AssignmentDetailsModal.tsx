import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { Assignment } from "../../models";

interface IAssignmentDetailsProps {
  showAssignmentDeails: boolean;
  onDidDismiss: () => void;
  assignment: Assignment;
}

const AssignmentDetailsModal: React.FC<IAssignmentDetailsProps> = (props) => {
  const { showAssignmentDeails, onDidDismiss, assignment } = props;
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
      </IonContent>
    </IonModal>
  );
}

export default AssignmentDetailsModal;
