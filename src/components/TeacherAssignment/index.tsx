import { IonList, IonItem, IonText, IonCol, IonGrid, IonRow } from "@ionic/react";
import assert from "assert";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Assignment, Student } from "../../models";
import { useStores } from "../../stores/RootStore";
import AssignmentItem from "../AssignmentItem/AssignmentItem";




const TeacherAssignment: React.FC<{
  assignment: Assignment;
  index: number;
}> = ({ assignment, index }) => {
  const { classStore, artworkStore } = useStores();

  useEffect(
    () => {
      classStore.getStudent(assignment);
    });

    const getArtWork = (student : Student) => {
      const artwork = artworkStore.artworks.find(artwork => (
        artwork.assignmentID === assignment.id &&
        artwork.studentID === student.id));
      if (artwork === undefined) {
        return <IonText>Did not submit</IonText>
      } else {
        return(
          <>
            <IonText>{artwork.title}</IonText>
            <IonText>{artwork.description}</IonText>
            <IonText>{artwork.updatedAt}</IonText>
            <IonText>{artwork.grade}</IonText>
          </>
        )
      }
    }

  return (
    <>
      <IonGrid
        style={{
          "background-color": "#e4e4e4",
        }}
        className="ion-padding">
        <IonRow >
          <IonText color="white"><h1>{`Assignment ${index + 1}`}</h1></IonText>
        </IonRow>
        <IonRow>
          <IonText color="medium">
            <p>{assignment.description}</p>
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
              <h2>Student submissions</h2>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonList>
        {
          classStore.relatedStudents.map((student) => (
            <>
            <IonItem key={student.id}>
              <IonText>
                <h3>{student.name}</h3>
              </IonText>
            </IonItem>
            <IonItem>
              {getArtWork(student)}
            </IonItem>
            </>
            ))
        }
      </IonList>
    </>
  );
};

export default observer(TeacherAssignment);
