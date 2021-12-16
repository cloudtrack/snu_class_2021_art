import { IonCol, IonFab, IonFabButton, IonFabList, IonGrid, IonIcon, IonItem, IonList, IonRow, IonText } from "@ionic/react";
import { cloudUpload, camera, images } from "ionicons/icons";
import { observer } from "mobx-react";
import { assign } from "mobx/dist/internal";
import { Student } from "../../models";
import { Assignment } from "../../models";
import { useStores } from "../../stores/RootStore";
import { UserDataType } from "../../stores/UserStore";

const StudentAssignment: React.FC<{
  assignment: Assignment;
  index: number;
}> = ({ assignment, index }) => {

  const { userStore, artworkStore } = useStores();

  const overdue = Date.parse(assignment.deadline!!) < new Date().getTime();

  const getArtWork = (studentid: UserDataType) => {
    const userData = studentid?.id;
    const artwork = artworkStore.artworks.find(artwork => (
      artwork.assignmentID === assignment.id &&
      artwork.studentID === userData));
    if (artwork === undefined) {
      return (
        <>
      <IonText>Did not submit</IonText>
      </>)
    } else {
      return (
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
        <IonRow>
          <IonCol></IonCol>
          <IonCol className="ion-no-padding ion-align-self-center ion-text-right">{`Deadline: ${assignment.deadline}`}</IonCol>
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
          <IonCol className="ion-no-padding ion-align-self-center ion-text-right">
            {overdue ? <IonText color="danger">Overdue</IonText> : <></>}
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonList>
        {getArtWork(userStore.userData)}
      </IonList>
      <IonFab
      vertical="bottom" horizontal="center"slot="fixed">
        <IonFabButton color="primary" disabled={overdue}>
          <IonIcon icon={cloudUpload} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={images} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={camera} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  );
}

export default observer(StudentAssignment);
