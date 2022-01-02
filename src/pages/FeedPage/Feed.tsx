import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { observer } from 'mobx-react';
import { FeedItem } from '../../components/FeedItem';
import HidingHeader from '../../components/HidingHeader/HidingHeader';
import { useHidingHeader } from '../../hooks/useHidingHeader';
import { useStores } from '../../stores/RootStore';
import './Feed.css';

// adding local notification for daily reminder to check newly published assignments and deadlines for existing ones
import { Capacitor } from '@capacitor/core';
 
declare var cordova: any; // stop TypeScript complaining.

var smallIcon: "res://notification-logo";
var d = new Date();
var hours = d.getHours();
var mins = d.getMinutes();
 
cordova.plugins.notification.local.schedule({
  id: 1,
  smallIcon: smallIcon,
  title: "Your daily art class reminder",
  text: "Check your classes for new assignments and deadlines for existing assignments!",
  trigger: { every: { hour: 10, minute: 30 }, count: 365 },
  foreground: true
}); 

const FeedView: React.FC = () => {
  const [hideDecimal, setScrollYCurrent] = useHidingHeader(200)

  const { artworkStore } = useStores();

  return (
    <IonPage>
      <HidingHeader hideDecimal={hideDecimal}>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
      </HidingHeader>
      <IonContent
        fullscreen
        scrollEvents
        onIonScroll={(e) => setScrollYCurrent(e.detail.scrollTop)}>
        <div className="ion-padding-start ion-padding-end ion-padding-bottom ion-margin-bottom">
          {
            artworkStore.artworks.map((artwork) => (
              <FeedItem key={artwork.id} artwork={artwork} />
            ))
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default observer(FeedView);
