import { IonItem, IonList } from "@ionic/react"
import { usePhotoGallery } from "../../hooks/userPhotoGallery";
import { useStores } from "../../stores/RootStore";

const PhotoGalleryPopover: React.FC = () => {
  const { pictureStore } = useStores();
  const { takePhoto, pickPhoto } = usePhotoGallery();
  return (
    <IonList>
      <IonItem button
        onClick={() => {
          console.log("take photo clicked");
          takePhoto()
            .then((photo) => {
              pictureStore.uploadPicture(photo);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >Take photos</IonItem>
      <IonItem button
        onClick={() => {
          console.log("choose from gallery clicked");
          pickPhoto()
            .then((photo) => {
              pictureStore.uploadPicture(photo);
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
