import { IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { useState } from "react";
import { useStores } from "../../stores/RootStore";
import { UserDataType } from "../../stores/UserStore";

interface ITeacherClassProps {
  userData: UserDataType;
}


export const TeacherClass: React.FC<ITeacherClassProps> = ({ userData }) => {
  const [isFabOpen, setIsFabOpen] = useState(false);

  const { classStore } = useStores();

  return (
    <>
      {/* Implement add class component */}
      <></>
      <IonContent>
        <h1>Teacher Class</h1>
        {
          (classStore.classes.length > 0) ?
            classStore.classes.map((classData, index) => {
              if (classData !== null) {
                return (
                  <div key={index}>
                    <h3>{classData.name}</h3>
                    <p>{classData.description}</p>
                  </div>
                );
              }
            }) :
            <div>
              <h3>You have no class!</h3>
            </div>
        }
      </IonContent>
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
