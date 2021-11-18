import { IonCard, IonGrid, IonIcon, IonLabel, IonRow, IonText } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
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
