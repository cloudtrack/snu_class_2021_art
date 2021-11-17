import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToolbar,
  useIonAlert
} from '@ionic/react';
import {
  chatboxEllipses,
  chatbubbleEllipses,
  chevronForward,
  handRight,
  help,
  informationCircleOutline,
  logOut,
  personCircle,
  thumbsUp
} from 'ionicons/icons';
import { CommentItem, ICommentItemProps } from './commentItem';
import './index.css';

interface IFeedItemProps {
  commentList: ICommentItemProps[];
}

export const FeedItem: React.FC<IFeedItemProps> = ({ commentList }) => {
  const [present] = useIonAlert();
  return (
    <IonCard>
      <IonCardHeader className="feed-header">
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonIcon icon={personCircle} size="large" />
            <IonText className="feed-username">username</IonText>
          </IonRow>
        </IonGrid>
      </IonCardHeader>
      <IonCardContent className="feed-image">
        <IonImg src="https://picsum.photos/640/300" />
      </IonCardContent>
      <IonCardContent className="feed-control">
        <IonGrid>
          <IonRow className="ion-align-items-center ion-justify-content-end">
            <IonIcon icon={thumbsUp} className="ion-margin-end" color="danger" />
            <IonIcon icon={chatbubbleEllipses} color="primary" />
          </IonRow>
          {commentList.map(({ username, comment }, index) => (
            <CommentItem key={index} username={username} comment={comment} />
          ))}
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};
