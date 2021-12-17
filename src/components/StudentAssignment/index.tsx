import { IonCol, IonFab, IonFabButton, IonFabList, IonGrid, IonIcon, IonImg, IonItem, IonList, IonRow, IonText } from "@ionic/react";
import { cloudUpload, camera, images } from "ionicons/icons";
import { observer } from "mobx-react";
import { assign } from "mobx/dist/internal";
import { useEffect, useState } from "react";
import { base64FromPath, usePhotoGallery } from "../../hooks/userPhotoGallery";
import { ArtWork, Student } from "../../models";
import { Assignment } from "../../models";
import { useStores } from "../../stores/RootStore";
import { UserDataType } from "../../stores/UserStore";
import { getImgLinkCached } from "../../stores/PictrueStore";
import { Filesystem } from "@capacitor/filesystem";
import { Cache } from "aws-amplify";

const StudentAssignment: React.FC<{
  assignment: Assignment;
  index: number;
}> = ({ assignment, index }) => {

  const { userStore, artworkStore, pictureStore } = useStores();
  const { getPhoto, savePicture } = usePhotoGallery();

  const overdue = Date.parse(assignment.deadline!!) < new Date().getTime();

  const [artworkIndex, setArtWorkIndex] = useState<number>(-1);
  const [artwork, setArtwork] = useState<ArtWork>();
  const [artworkURL, setArtworkURL] = useState<string>("");


  useEffect(() => {
    const userData = userStore.userData?.id;
    const artwork = artworkStore.artworks.find(artwork => (
      artwork.assignmentID === assignment.id &&
      artwork.studentID === userData));
    if (artwork !== undefined) {
      setArtwork(artwork);
    }
  });

  useEffect(() => {
    const artworkIndex = artworkStore.artworks.findIndex(artwork => (
      artwork.assignmentID === assignment.id &&
      artwork.studentID === userStore.userData?.id)
    );
    if (artworkIndex !== -1) {
      setArtWorkIndex(artworkIndex);
    }
  });

  useEffect(() => {
    if (artworkIndex > -1) {
      if (artworkStore.artworks[artworkIndex].image !== undefined) {
        console.log("image found")
        console.log(artworkStore.artworks[artworkIndex].image);
        getImgLinkCached(artworkStore.artworks[artworkIndex].image!!).then(
          (url: any) => {
            console.log("url");
            console.log(url)
            setArtworkURL(url as string);
          }
        )
      }
    }
  }, [artworkIndex]);

  // const getArtWork = (studentid: UserDataType) => {
  //   const userData = studentid?.id;
  //   const artwork = artworkStore.artworks.find(artwork => (
  //     artwork.assignmentID === assignment.id &&
  //     artwork.studentID === userData));


  //   }
  // }

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
          <IonCol
            className="ion-no-padding ion-align-self-center ion-text-right">
            {`Deadline: ${assignment.deadline}`}
          </IonCol>
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
            {overdue && (artworkIndex < 0) ? <IonText color="danger">Overdue</IonText> :
              ((artworkIndex < 0) ? <IonText color="dark">Not Submitted</IonText> : <IonText color="success">Submitted</IonText>)}
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonList>
        {

          (artwork === undefined) ?
            <>
              <IonText>Did not submit</IonText>
            </>
            :
            // setArtWorkIndex(artworkStore.artworks.indexOf(artwork));
            <>
              {/* <IonText>{artwork.title}</IonText> */}
              {/* <IonText>{artwork.description}</IonText> */}
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonText>{artwork.updatedAt}</IonText>
                  </IonCol>
                  <IonCol></IonCol>
                  <IonText>{artwork.grade !== undefined && artwork.grade > 0 ?
                    `${artwork.grade}/100` : "Not Graded"}</IonText>
                </IonRow>
              </IonGrid>
              <IonImg
                src={artworkURL}
              ></IonImg>
            </>
        }
      </IonList>
      <IonFab
        vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton color="primary" disabled={overdue}>
          <IonIcon icon={cloudUpload} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={images} onClick={() => {
              getPhoto("gallery", false).then(
                async (photo) => {
                  if (photo !== undefined) {
                    const base64 = await Filesystem.readFile({
                      path: photo,
                    })
                    console.log("photo from gallery: " + photo);
                    console.log("base64 from file: " + base64.data);
                    setArtworkURL(`data:image/jpeg;base64,${base64.data}`);
                    let postfix = photo.split(".").pop();
                    const regex = /[,/:]/g;
                    let pic =
                      assignment.id + "/" + userStore.userData?.id + "/" +
                      "originals/" +
                      new Date()
                        .toLocaleString()
                        .replaceAll(regex, "-")
                        .replaceAll(" ", "") +
                      "." + postfix;
                    Cache.setItem(pic, `data:image/jpeg;base64,${base64.data}`);
                    const studentID = userStore.userData?.id as string;
                    await artworkStore.addArtWork(
                      assignment.id,
                      studentID,
                      "assn/" + pic,
                    );
                    await pictureStore.uploadPicture(photo, pic);
                  }
                }
              );
            }} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={camera} onClick={() => {
              getPhoto("camera", false).then(
                async (photo) => {
                  if (photo !== undefined) {
                    const base64 = await Filesystem.readFile({
                      path: photo,
                    })
                    setArtworkURL(`data:image/jpeg;base64,${base64.data}`);
                    let postfix = photo.split(".").pop();
                    const regex = /[,/:]/g;
                    let pic =
                      assignment.id + "/" + userStore.userData?.id + "/" +
                      "originals/" +
                      new Date()
                        .toLocaleString()
                        .replaceAll(regex, "-")
                        .replaceAll(" ", "") +
                      "." + postfix;
                    Cache.setItem(pic, `data:image/jpeg;base64,${base64.data}`);
                    const studentID = userStore.userData?.id as string;
                    await artworkStore.addArtWork(
                      assignment.id,
                      studentID,
                      "assn/" + pic,
                    );
                    await pictureStore.uploadPicture(photo, pic);
                  }
                }
              );
            }} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  );
}


export default observer(StudentAssignment);
