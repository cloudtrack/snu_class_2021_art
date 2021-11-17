import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Class.css';

const ClassView: React.FC = () => (
  <IonPage>
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">Class</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <ExploreContainer name="Tab 2 page" />
    </IonContent>
  </IonPage>
);

export default ClassView;
