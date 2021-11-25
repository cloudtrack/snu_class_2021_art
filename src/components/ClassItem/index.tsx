import { IonGrid, IonRow, IonAvatar, IonSkeletonText, IonCard, IonCardHeader, IonCardContent, IonIcon, IonText } from "@ionic/react";
import { bookmark } from "ionicons/icons";

interface IClassItemProps {}

export const ClassItem: React.FC<IClassItemProps> = () => {
  return (
    <IonCard>
      <IonCardHeader>
        {/* Show class name and professor name and notif dot */}
        <IonGrid>
          <IonRow className="ion-align-itmes-center">
            <IonIcon icon={bookmark} size="large"/>
            <IonText>classname</IonText>
          </IonRow>
        </IonGrid>
      </IonCardHeader>
      <IonCardContent>
        {/* Show class description */}
        <IonSkeletonText animated style={{ width: "100%" }} />
      </IonCardContent>
    </IonCard>
  );
};
