import { RefresherEventDetail } from "@ionic/core";
import { IonContent, IonRefresher, IonRefresherContent } from "@ionic/react";
import { ClassItem } from "../ClassItem";
import { UserDataType } from "../../stores/UserStore";

interface IStudentClassProps {
  userData: UserDataType;
}

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
}

export const StudentClass: React.FC<IStudentClassProps> = ({ userData }) => {
  // show the classes student is taking in card

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
        <IonRefresherContent>
        </IonRefresherContent>
      </IonRefresher>
      <IonContent>
        {new Array(10).fill(null).map(() => (
          <ClassItem />
        ))}
      </IonContent>
    </>
  );
}
