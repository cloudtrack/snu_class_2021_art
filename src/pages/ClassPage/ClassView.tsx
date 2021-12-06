import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { StudentClass } from '../../components/StudentClass';
import { TeacherClass } from '../../components/TeacherClass';
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
        {
          userData?.role === 'student' ? <StudentClass userData={userData} /> :
          <TeacherClass userData={userData}/>// TODO: show class page for teacher
        }
      </IonContent>
    </IonPage>
  )
};

export default ClassView;
