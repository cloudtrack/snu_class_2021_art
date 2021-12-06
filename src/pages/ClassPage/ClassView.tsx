import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { add, camera, cloudUpload, search } from 'ionicons/icons';
import { useState } from 'react';
import { StudentClass } from '../../components/StudentClass';
import { TeacherClass } from '../../components/TeacherClass';
import { UserDataType } from '../../stores/UserStore';
import './Class.css';
import ClassSearchModal from './ClassSearchModal';

interface IClassViewProps {
  userData: UserDataType;
}

const ClassView: React.FC<IClassViewProps> = ({ userData }) => {
  const [isFabOpen, setIsFabOpen] = useState(false);

  return (
    <IonPage>
      <ClassSearchModal
        showModal={isFabOpen}
        onDidDismiss={() => setIsFabOpen(false)}
      />
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Class</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {
          userData?.role === 'student' ? <StudentClass userData={userData} /> : <TeacherClass />// TODO: show class page for teacher
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
    </IonPage>
  )
};

export default ClassView;
