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
