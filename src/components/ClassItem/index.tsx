import {
  IonGrid,
  IonRow,
  IonAvatar,
  IonSkeletonText,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonIcon,
  IonText
} from '@ionic/react';
import { bookmark } from 'ionicons/icons';
import { Teacher } from '../../models';
import { avatarImageFromEmail } from '../../utils';
import './index.css';

export interface IClassItemProps {
  classname: string;
  teacher: Teacher;
}

export const ClassItem: React.FC<IClassItemProps> = ({ classname, teacher }) => (
  <IonCard>
    <IonCardHeader>
      {/* Show class name and professor name and notif dot */}
      <IonGrid>
        <IonRow className="ion-align-items-center">
          <IonIcon icon={bookmark} />
          <IonText class="ion-margin-start">{classname}</IonText>
          <IonAvatar class="ion-margin-start teacher-avatar-image">
            <img src={avatarImageFromEmail(teacher.email!)} alt={teacher.name} />
          </IonAvatar>
          <IonText class="ion-margin-start">{teacher.name}</IonText>
        </IonRow>
      </IonGrid>
    </IonCardHeader>
    <IonCardContent>
      {/* Show class description */}
      <IonSkeletonText animated style={{ width: '100%' }} />
    </IonCardContent>
  </IonCard>
);
