import { IonList, IonItem, IonText, IonCol, IonGrid, IonRow, IonCard, IonAlert, IonCardTitle, IonCardHeader, useIonModal, IonButton, IonIcon } from "@ionic/react";
import { create } from "ionicons/icons";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ArtWork, Assignment, Student } from "../../models";
import { getImgLinkCached } from "../../stores/PictrueStore";
import { useStores } from "../../stores/RootStore";
import { ImagePreviewModal } from "../ImagePreviewModal";

const SubmissionStatus: React.FC<{
  assignment: Assignment;
  student: Student
}> = observer(({ assignment, student }) => {
  const [artwork, setArtwork] = useState<ArtWork>();
  const [imgURL, setImgUrl] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [grade, setGrade] = useState(-1);

  const handleDismiss = () => {
    dismiss();
  }

  const [present, dismiss] = useIonModal(ImagePreviewModal, {
    imgURL: imgURL,
    onDismiss: handleDismiss
  });

  const { artworkStore } = useStores();

  useEffect(() => {
    const artwork = artworkStore.artworks.find(artwork => (
      artwork.assignmentID === assignment.id &&
      artwork.studentID === student.id)
    );
    if (artwork !== undefined) {
      setArtwork(artwork);
    }
  }, [artworkStore.artworks, assignment, student]);

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

  }, [student, artwork]);

  useEffect(() => {
    if (artwork !== undefined) {
      if (artwork.grade !== undefined) {
        setGrade(artwork.grade);
      }
    }
  }, [artwork, grade]);

  return (
    <>
      <IonAlert isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Give Grade Feedback'}
        inputs={[
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
              const grade = parseInt(alertData.grade)
              setGrade(grade);
              await artworkStore.updateArtWorkGrade(
                artwork!,
                grade
              );
            }
          }]}
      />
      <IonCard>
        <IonCardHeader className="ion-no-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardTitle key={student.id}>
                  <IonText>
                    <h3>{student.name}</h3>
                  </IonText>
                </IonCardTitle>
              </IonCol>
              <IonCol className="ion-no-padding ion-align-self-center ion-text-right">
                {artwork === undefined ?
                  <></> :
                  <IonButton
                  color="secondary"
                  onClick={() => {
                    setShowAlert(true);
                  }}>
                    <IonIcon icon={create} />
                  </IonButton>
                }
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardHeader>
        {
          artwork === undefined ?
            <IonItem>
              <IonText>Did not submit</IonText>
            </IonItem> :
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonText>
                    {`Uploaded At: ${new Date(Date.parse(artwork.updatedAt!)).toDateString()}`}
                  </IonText>
                </IonCol>
                <IonCol className="ion-no-padding ion-align-self-center ion-text-right">
                  {`Grade: ${grade < 0 ? "Not Graded" : grade}`}
                </IonCol>
                <IonRow className="feed-image" onClick={() => {
                  present({
                    cssClass: 'modal-transparency',
                    onDidDismiss: handleDismiss
                  });
                }}>
                  <div className='imgwrapper'>
                    <img src={imgURL} className='coverimg' />
                  </div>
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
  }, [assignment, classStore, artworkStore]);

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
