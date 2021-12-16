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
import { FeedItem } from '../../components/FeedItem';
import { ICommentItemProps } from '../../components/FeedItem/commentItem';
import HidingHeader from '../../components/HidingHeader/HidingHeader';
import { useHidingHeader } from '../../hooks/useHidingHeader';
import './Feed.css';

const FeedView: React.FC = () => {
  const [hideDecimal, setScrollYCurrent] = useHidingHeader(50)
  const fakeCommentList: ICommentItemProps[] = [];
  for (let i = 0; i < 2; i++) {
    fakeCommentList.push({
      comment: Faker.lorem.sentence(),
      username: Faker.name.findName(),
    });
  }

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
        {new Array(10).fill(null).map(() => (
          <FeedItem commentList={fakeCommentList} />
        ))}
      </IonContent>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="danger">
          <IonIcon icon={add} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={cloudUpload} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={camera} />
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={search} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonPage>
  );
};

export default FeedView;
