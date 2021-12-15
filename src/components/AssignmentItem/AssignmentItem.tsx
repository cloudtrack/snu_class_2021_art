import { IonCard, IonCardHeader, IonIcon, IonText, IonCardContent } from "@ionic/react";
import { pencil } from "ionicons/icons";
import { observer } from "mobx-react";
import { Assignment } from "../../models";

interface IAssignmentItemProps {
  index: number;
  assignment: Assignment;
}

const AssignmentItem: React.FC<IAssignmentItemProps> = observer(({
  index,
  assignment,
}) => {
  return (
    <>
      <IonCard onClick={() => (true)}>

        <IonCardHeader>
          <IonIcon icon={pencil} />
          <IonText>{`Assignment ${index + 1}`}</IonText>
        </IonCardHeader>
        <IonCardContent>
          <IonText>
            <p>{assignment.description}</p>
          </IonText>
          <IonText>
            <p>{assignment.openTime}</p>
          </IonText>
          <IonText>
            <p>{assignment.deadline}</p>
          </IonText>
        </IonCardContent>
      </IonCard>
    </>
  )
});

export default AssignmentItem;
