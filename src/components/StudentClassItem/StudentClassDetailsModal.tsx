import { IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonIcon, IonPopover, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { close } from "ionicons/icons";
import { IClassDeatilsProps } from "../ClassItem/ClassDetailsModal";

const StudentClassDetailsModal: React.FC<IClassDeatilsProps> = (props) => {
  const { classItem, showClassDetails, onDidDismiss } = props;
  return (<IonPopover
    isOpen={showClassDetails}
    onDidDismiss={onDidDismiss}
  >
    <IonHeader translucent>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={() => onDidDismiss()}>
            <IonIcon color="white" slot="icon-only" icon={close} />
          </IonButton>
        </IonButtons>
        <IonTitle>Class Details</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid
        style={{
          "background-color": "#e4e4e4",
        }}
        className="ion-padding">
        <IonRow >
          <IonText color="white"><h1>{classItem.name}</h1></IonText>
        </IonRow>
        <IonRow>
          <IonText color="medium">
            <p>{classItem.description}</p>
          </IonText>
        </IonRow>
      </IonGrid>
    </IonContent>

  </IonPopover>);
}

export default StudentClassDetailsModal;
