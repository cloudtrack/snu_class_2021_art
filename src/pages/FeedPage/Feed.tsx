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
import ExploreContainer from '../../components/ExploreContainer';
import { FeedItem } from '../../components/FeedItem';
import { ICommentItemProps } from '../../components/FeedItem/commentItem';
import Faker from 'faker';
import './Feed.css';
import {
  share,
  logoVimeo,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  add,
  camera,
  search,
  cloudCircle,
  cloudUpload
} from 'ionicons/icons';

const FeedView: React.FC = () => {
  const fakeCommentList: ICommentItemProps[] = [];
  for (let i = 0; i < 2; i++) {
    fakeCommentList.push({
      comment: Faker.lorem.sentence(),
      username: Faker.name.findName(),
    });
  }
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
