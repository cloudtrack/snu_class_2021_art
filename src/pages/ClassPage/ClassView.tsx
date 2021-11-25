import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { search } from 'ionicons/icons';
import { StudentClass } from '../../components/StudentClass';
import { UserDataType } from '../../stores/UserStore';
import './Class.css';

interface IClassViewProps {
  userData: UserDataType;
}

const ClassView: React.FC<IClassViewProps> = ({ userData }) => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Class</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <ExploreContainer name="Tab 2 page" /> */}
        {
          userData?.role === "student" ?
            <StudentClass userData={userData} /> :
            <></> // TODO: show class page for teacher
        }
      </IonContent>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="primary">
          <IonIcon icon={search} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
}

export default ClassView;
