import { RefresherEventDetail } from '@ionic/core';
import { IonContent, IonFab, IonFabButton, IonIcon, IonRefresher, IonRefresherContent, IonSearchbar, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { UserDataType } from '../../stores/UserStore';
import { ClassItem, IClassItemProps } from '../ClassItem';
import Faker from 'faker';
import { search } from 'ionicons/icons';
import ClassSearchModal from './ClassSearchModal';
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
  const [searchText, setSearchText] = useState('');
  const [isFabOpen, setIsFabOpen] = useState(false);

  const fakeClassList: IClassItemProps[] = [];
  for (let i = 0; i < 2; i++) {
    fakeClassList.push({
      classname: Faker.name.firstName(),
      teacher: {
        id: Faker.random.uuid(),
        name: Faker.name.findName(),
        email: Faker.internet.email(),
      },
    });
  }
  return (
    <>
      <IonRefresher
        slot="fixed"
        onIonRefresh={doRefresh}
        pullFactor={0.5}
        pullMin={100}
        pullMax={200}>
        <IonRefresherContent />
      </IonRefresher>
      <IonToolbar className="ion-margin-top">
        <IonSearchbar
          showClearButton="focus"
          showCancelButton="focus"
          placeholder="Search art class"
          value={searchText}
          onIonChange={e => setSearchText(e.detail.value!)}
        />
      </IonToolbar>
      <IonContent>
        <ClassSearchModal
          showModal={isFabOpen}
          onDidDismiss={() => setIsFabOpen(false)}
        />
        {fakeClassList.map((clazz: IClassItemProps) => (
          <ClassItem {...clazz} />
        ))}
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
