import { RefresherEventDetail } from '@ionic/core';
import { IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { UserDataType } from '../../stores/UserStore';
import { ClassItem, IClassItemProps } from '../ClassItem';
import Faker from 'faker';
import { search } from 'ionicons/icons';
import ClassSearchModal from './ClassSearchModal';
import { useStores } from '../../stores/RootStore';
import { Teacher } from '../../models';
import { DataStore } from 'aws-amplify';
interface IStudentClassProps {
  userData: UserDataType;
}

// function doRefresh(event: CustomEvent<RefresherEventDetail>) {
//   console.log('Begin async operation');

//   setTimeout(() => {
//     console.log('Async operation has ended');
//     event.detail.complete();
//   }, 2000);
// }

export const StudentClass: React.FC<IStudentClassProps> = ({ userData }) => {
  // show the classes student is taking in card
  const [searchText, setSearchText] = useState('');
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [isLoadingTeacher, setIsLoadingTeacher] = useState(false);

  const { classStore } = useStores();

  // const fakeClassList: IClassItemProps[] = [];
  // for (let i = 0; i < 2; i++) {
  //   fakeClassList.push({
  //     classItem: {
  //       id: Faker.random.uuid(),
  //       name: Faker.name.findName(),
  //       description: Faker.lorem.paragraph(),
  //     },
  //     teacher: {
  //       id: Faker.random.uuid(),
  //       name: Faker.name.findName(),
  //       email: Faker.internet.email(),
  //     },
  //     description: Faker.lorem.paragraph(),
  //   });
  // }
  return (
    <>
      {/* <IonRefresher
        slot="fixed"
        onIonRefresh={doRefresh}
        pullFactor={0.5}
        pullMin={100}
        pullMax={200}>
        <IonRefresherContent />
      </IonRefresher> */}
      <ClassSearchModal
        showModal={isFabOpen}
        onDidDismiss={() => setIsFabOpen(false)}
      />
      <IonContent>
        <IonTitle>Class Joined</IonTitle>
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
              }
            )
        }
      </IonContent>
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
};
