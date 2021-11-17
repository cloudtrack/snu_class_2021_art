import {
  IonAvatar,
  IonButton,
  IonCard,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  useIonAlert
} from '@ionic/react';
import { chevronForward, handRight, help, informationCircleOutline, logOut } from 'ionicons/icons';
import './index.css';

interface INavListProps {
  logout: () => void;
}

export const NavList: React.FC<INavListProps> = ({ logout }) => {
  const [present] = useIonAlert();
  return (
    <IonCard>
      <IonList>
        <IonItem onClick={logout} button>
          <IonIcon slot={'start'} icon={logOut} color="primary" />
          <IonLabel>Log Out</IonLabel>
        </IonItem>
        <IonItem
          button
          onClick={() => {
            present('Art Class Application');
          }}
        >
          <IonIcon slot={'start'} icon={informationCircleOutline} color="warning" />
          <IonLabel>About</IonLabel>
        </IonItem>
      </IonList>
    </IonCard>
  );
};
