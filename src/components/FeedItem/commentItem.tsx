import { IonCard, IonGrid, IonIcon, IonLabel, IonRow, IonText } from '@ionic/react';
import { DataStore } from 'aws-amplify';
import { personCircle } from 'ionicons/icons';
import { FC, useEffect, useState } from 'react';
import { Student, Teacher } from '../../models';

export interface ICommentItemProps {
  userID: string | undefined;
  isTeacher: boolean;
  comment: string;
}

export const CommentItem: FC<ICommentItemProps> = ({ userID, isTeacher, comment }) => {
  const [username, setUserName] = useState('');

  useEffect(() => {
    const handleUserName = async () => {
      if (isTeacher && userID !== undefined) {
        const teacher = await DataStore.query(Teacher, t => t.id('eq', userID!));
        setUserName(teacher[0].name!)
      } else if (userID !== undefined) {
        const students = await DataStore.query(Student, s => s.id('eq', userID!));
        setUserName(students[0].name!);
      }
    }
    handleUserName()
  }, [userID]);

  return (
  <IonRow className="ion-margin-top">
    <IonCard color="light" className="feed-comment">
      <IonGrid>
        <IonRow className="ion-align-items-center">
          <IonIcon icon={personCircle} size="large" />
          <IonText className="feed-userID" color="dark">
            {username}
          </IonText>
          <IonLabel className="ion-margin-end">:</IonLabel>
          <IonText>{comment}</IonText>
        </IonRow>
      </IonGrid>
    </IonCard>
  </IonRow>
);
}
