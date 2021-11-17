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
import { FC } from 'react';

export interface ICommentItemProps {
  username: string;
  avatar?: string;
  comment: string;
}

export const CommentItem: FC<ICommentItemProps> = ({ username, avatar, comment }) => (
  <IonRow className="ion-margin-top">
    <IonCard color="light" className="feed-comment">
      <IonGrid>
        <IonRow className="ion-align-items-center">
          <IonIcon icon={personCircle} size="large" />
          <IonText className="feed-username" color="dark">
            {username}
          </IonText>
          <IonLabel className="ion-margin-end">:</IonLabel>
          <IonText>{comment}</IonText>
        </IonRow>
      </IonGrid>
    </IonCard>
  </IonRow>
);
