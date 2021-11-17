import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { FeedItem } from '../../components/FeedItem';
import { ICommentItemProps } from '../../components/FeedItem/commentItem';
import Faker from 'faker';
import './Feed.css';

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
    </IonPage>
  );
};

export default FeedView;
