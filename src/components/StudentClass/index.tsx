import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { useState } from 'react';
import { UserDataType } from '../../stores/UserStore';
import { ClassItem } from '../ClassItem';
import { search } from 'ionicons/icons';
import ClassSearchModal from './ClassSearchModal';
import { useStores } from '../../stores/RootStore';
import { observer } from 'mobx-react';
interface IStudentClassProps {
  userData: UserDataType;
}

export const StudentClass: React.FC<IStudentClassProps> = observer(({ userData }) => {
  // show the classes student is taking in card
  const [isFabOpen, setIsFabOpen] = useState(false);

  const { classStore } = useStores();

  return (
    <>
      <ClassSearchModal
        showModal={isFabOpen}
        onDidDismiss={() => setIsFabOpen(false)}
      />
      <div className="ion-padding-start ion-padding-end ion-padding-bottom ion-margin-bottom">
        {
          (classStore.isLoading) ?
            <div>Loading...</div> :
            classStore.classes.map((classData) => {
              return (
                <ClassItem
                  classItem={classData}
                  description={classData.description}
                />
              );
            })
        }
      </div>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="primary">
          <IonIcon
            icon={search}
            onClick={() => {
              setIsFabOpen(true);
            }} />
        </IonFabButton>
      </IonFab>
    </>
  );
});
