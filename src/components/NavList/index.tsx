import {
  IonAlert,
  IonCard,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  useIonAlert
} from '@ionic/react';
import { useState } from 'react';
import { informationCircleOutline, logOut } from 'ionicons/icons';
import './index.css';

interface INavListProps {
  logout: () => void;
}
interface NavItem {
  onClick: () => void;
  label: string;
  icon: string;
}

export const NavList: React.FC<INavListProps> = ({ logout }) => {
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [present] = useIonAlert();
  const navItem: NavItem[] = [
    {
      onClick: () => setShowLogoutAlert(true),
      label: 'Log Out',
      icon: logOut,
    },
    {
      onClick: () => {
        present('Art Class Application');
      },
      label: 'About',
      icon: informationCircleOutline,
    },
  ];
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
        {navItem.map(({ onClick, icon, label }, index) => (
          <IonItem key={index} onClick={onClick} button>
            <IonIcon slot={'start'} icon={icon} color="primary" />
            <IonLabel>{label}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonCard>
  );
};
