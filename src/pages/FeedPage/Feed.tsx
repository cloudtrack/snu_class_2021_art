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
import Faker from 'faker';
import { add, camera, cloudUpload, search } from 'ionicons/icons';
import { observer } from 'mobx-react';
import { FeedItem } from '../../components/FeedItem';
import { ICommentItemProps } from '../../components/FeedItem/commentItem';
import HidingHeader from '../../components/HidingHeader/HidingHeader';
import { useHidingHeader } from '../../hooks/useHidingHeader';
import { useStores } from '../../stores/RootStore';
import './Feed.css';

const FeedView: React.FC = () => {
  const [hideDecimal, setScrollYCurrent] = useHidingHeader(50)
  const fakeCommentList: ICommentItemProps[] = [];

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
        {
          artworkStore.artworks.map((artwork) => (
            <FeedItem key={artwork.id} artwork={artwork} />
          ))
        }
      </IonContent>
    </IonPage>
  );
};

export default observer(FeedView);
