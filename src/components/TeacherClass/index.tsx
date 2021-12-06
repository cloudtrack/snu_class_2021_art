import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { useState } from "react";
import { UserDataType } from "../../stores/UserStore";

interface ITeacherClassProps {
  userData: UserDataType;
}


export const TeacherClass : React.FC<ITeacherClassProps> = ({userData}) => {
  const [ isFabOpen, setIsFabOpen ] = useState(false);
  return (
    <>
      {/* Implement add class component */}
      <></>
      <div>
        <h1>Teacher Class</h1>
      </div>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="primary">
          <IonIcon
            icon={add}
            onClick={() => {
              setIsFabOpen(true);
            }} />
        </IonFabButton>
      </IonFab>
    </>
  );
};
