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
import { StudentClass } from '../../components/StudentClass';
import { UserDataType } from '../../stores/UserStore';
import './Class.css';

interface IClassViewProps {
  userData: UserDataType;
}

const ClassView: React.FC<IClassViewProps> = ({ userData }) => (
  <IonPage>
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">Class</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      {
        userData?.role === 'student' ? <StudentClass userData={userData} /> : <></> // TODO: show class page for teacher
      }
    </IonContent>
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton color="primary">
        <IonIcon icon={search} />
      </IonFabButton>
    </IonFab>
  </IonPage>
);

export default ClassView;
