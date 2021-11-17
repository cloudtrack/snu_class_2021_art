import {
  IonAlert,
  IonCard,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  useIonAlert
} from '@ionic/react';
import { informationCircleOutline, logOut } from 'ionicons/icons';
import { useState } from 'react';
import './index.css';

interface INavListProps {
  logout: () => void;
}

export const NavList: React.FC<INavListProps> = ({ logout }) => {
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [present] = useIonAlert();
  return (
    <IonCard>
      <IonAlert
          isOpen={showLogoutAlert}
          onDidDismiss={() => setShowLogoutAlert(false)}
          // cssClass='my-custom-class'
          header={'Log out'}
          message={'Are you sure you want to log out?'}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok');
                logout();
              }
            }
          ]}
        />
      <IonList>
        <IonItem onClick={() => setShowLogoutAlert(true)} button>
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
