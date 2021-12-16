import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { observer } from 'mobx-react';
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
      <IonContent>
        {
          userData?.role === 'student' ?
          <StudentClass userData={userData} /> :
          <TeacherClass userData={userData}/>
        }
      </IonContent>
    </IonPage>
  )
};

export default observer(ClassView);
