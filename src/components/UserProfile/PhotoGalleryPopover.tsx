import { IonItem, IonList } from "@ionic/react"
import { usePhotoGallery } from "../../hooks/userPhotoGallery";
import { useStores } from "../../stores/RootStore";

const PhotoGalleryPopover: React.FC = () => {
  const { pictureStore } = useStores();
  const { getPhoto } = usePhotoGallery();
  return (
    <IonList>
      <IonItem button
        onClick={() => {
          console.log("take photo clicked");
          getPhoto("camera")
            .then((photo) => {
              pictureStore.uploadProfilePic(photo);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >Take photos</IonItem>
      <IonItem button
        onClick={() => {
          console.log("choose from gallery clicked");
          getPhoto("gallery")
            .then((photo) => {
              pictureStore.uploadProfilePic(photo);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >Choose from gallery</IonItem>
    </IonList>
  );
};

export default PhotoGalleryPopover;
