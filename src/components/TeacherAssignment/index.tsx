import { IonList, IonItem, IonText } from "@ionic/react";
import { observer } from "mobx-react-lite";
import { Assignment } from "../../models";
import { useStores } from "../../stores/RootStore";
import AssignmentItem from "../AssignmentItem/AssignmentItem";

const TeacherAssignment: React.FC<{
  assignment: Assignment;
}> = ({ assignment }) => {
  const { assignmentStore } = useStores();
  return (
    <>
      <IonList>
        {(assignmentStore.assignments.length > 0) ?
          assignmentStore.assignments.filter(
            (assignment) => assignment.classID === assignment.id
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
    </>
  );
};

export default observer(TeacherAssignment);
