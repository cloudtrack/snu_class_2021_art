import { IonContent, IonFab, IonFabButton, IonIcon, IonLoading } from "@ionic/react";
import { add } from "ionicons/icons";
import { observer } from "mobx-react";
import { useState } from "react";
import { useStores } from "../../stores/RootStore";
import { UserDataType } from "../../stores/UserStore";

interface ITeacherClassProps {
  userData: UserDataType;
}


export const TeacherClass: React.FC<ITeacherClassProps> = observer(({ userData }) => {
  const [isFabOpen, setIsFabOpen] = useState(false);

  const { classStore } = useStores();

  return (
    <>
      {/* Implement add class component */}
      <></>
      <IonContent>
        <h1>Teacher Class</h1>
        {
          (classStore.isLoading) ?
            <div>Loading</div> :
            classStore.classes.map((classData, index) => {
              if (classData !== null) {
                return (
                  <div key={index}>
                    <h3>{classData.name}</h3>
                    <p>{classData.description}</p>
                  </div>
                );
              }
            })
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
});
