import { IonItem, IonList } from "@ionic/react"
import { usePhotoGallery } from "../../hooks/userPhotoGallery";

const PhotoGalleryPopover: React.FC = () => {
  const { takePhoto, pickPhoto } = usePhotoGallery();
  return (
    <IonList>
      <IonItem button
        onClick={() => {
          console.log("take photo clicked");
          takePhoto();
        }}
      >Take photos</IonItem>
      <IonItem button
        onClick={() => {
          console.log("choose from gallery clicked");
          pickPhoto();
        }}
      >Choose from gallery</IonItem>
    </IonList>
  );
};

export default PhotoGalleryPopover;
