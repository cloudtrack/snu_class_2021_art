import { IonList, IonItem, IonText, IonCol, IonGrid, IonRow, IonImg, IonCard, IonAlert } from "@ionic/react";
import assert from "assert";
import { DataStore } from "aws-amplify";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ArtWork, Assignment, Student } from "../../models";
import { getImgLinkCached } from "../../stores/PictrueStore";
import { useStores } from "../../stores/RootStore";
import AssignmentItem from "../AssignmentItem/AssignmentItem";

const SubmissionStatus: React.FC<{
  assignment: Assignment;
  student: Student
}> = observer(({ assignment, student }) => {
  const [artwork, setArtwork] = useState<ArtWork>();
  const [imgURL, setImgUrl] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const { artworkStore } = useStores();

  useEffect(() => {
    const artwork = artworkStore.artworks.find(artwork => (
      artwork.assignmentID === assignment.id &&
      artwork.studentID === student.id)
    );
    if (artwork !== undefined) {
      setArtwork(artwork);
    }
  });

  useEffect(() => {
    const fetchArtWork = async (aw: ArtWork) => {
      if (aw.image !== undefined) {
        const result = await getImgLinkCached(aw.image);
        if (result !== undefined) {
          setImgUrl(result);
        }
      }
    }

    if (artwork !== undefined) {
      fetchArtWork(artwork);
    }

  }, [student]);

  return (
    <>
    <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='my-custom-class'
          header={'Give Grade Feedback'}
          inputs={[
            // input date with min & max
            {
              name: 'grade',
              type: 'number',
              min: 0,
              max: 100
            }]}
            buttons={[
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  console.log('Confirm Cancel');
                }
              },
              {
                text: 'Ok',
                handler: async (alertData) => {
                  console.log('Confirm Ok');
                  console.log(alertData.grade)
                  await DataStore.save(
                    ArtWork.copyOf(
                      artwork!,
                      item => {
                        item.grade = parseInt(alertData.grade);
                      }
                    )
                  )
                }
              }
            ]}
            ></IonAlert>
      <IonCard onClick={() => setShowAlert(true) }>
        <IonItem key={student.id}>
          <IonText>
            <h3>{student.name}</h3>
          </IonText>
        </IonItem>

        {
          artwork === undefined ?
            <IonItem>
              <IonText>Did not submit</IonText>
            </IonItem> :
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonText>
                    {`Uploaded At: ${artwork.updatedAt}`}
                  </IonText>
                </IonCol>
                <IonCol className="ion-align-items-center ion-justify-content-end">
                  {`Grade: ${artwork.grade === undefined ||
                      artwork.grade === null ||
                      artwork.grade < 0 ? "Not Graded" : artwork.grade
                    }`}
                </IonCol>
                <IonRow>
                  <IonImg src={imgURL} />
                </IonRow>
              </IonRow>
            </IonGrid>
        }
      </IonCard>
    </>
  );
});


const TeacherAssignment: React.FC<{
  assignment: Assignment;
  index: number;
}> = ({ assignment, index }) => {
  const { classStore, artworkStore } = useStores();

  useEffect(() => {
    classStore.getStudent(assignment);
    artworkStore.initialize();
  }, [assignment]);

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
            <SubmissionStatus
              key={student.id}
              assignment={assignment}
              student={student}
            />
          ))
        }
      </IonList>
    </>
  );
};

export default observer(TeacherAssignment);
