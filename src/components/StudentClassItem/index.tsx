import {
  IonGrid,
  IonRow,
  IonSkeletonText,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonIcon,
  IonText,
  IonCol,
  IonFabButton
} from '@ionic/react';
import { add, bookmark, checkmark } from 'ionicons/icons';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { useStores } from '../../stores/RootStore';
import { IClassItemProps } from '../ClassItem';
import StudentClassDetailsModal from './StudentClassDetailsModal';
import './index.css'
import { Class } from '../../models';

export interface ISCItemProps {
  classItem: Class;
  onDidDismiss: () => void;
}


export const StudentClassItem: React.FC<ISCItemProps> = observer((props) => {
  const { classItem, onDidDismiss } = props;

  const [popoverState, setShowClassDetails] = useState({
    popoverState: false,
    event: undefined
  });

  const { classStore } = useStores();

  return (
    <>
      <StudentClassDetailsModal
        classItem={classItem}
        showClassDetails={popoverState.popoverState}
        onDidDismiss={() => setShowClassDetails({
          popoverState: false,
          event: undefined
        })}
      />
      <IonCard
      // onClick={(e: any) => {
      //   e.persist();
      //   setShowClassDetails({
      //     popoverState: true,
      //     event: undefined
      //   })
      // }}
      >
        <IonCardHeader>
          {/* Show class name and professor name and notif dot */}
          <IonGrid>
            <IonRow className="ion-align-items-center">
              <IonIcon icon={bookmark} />
              <IonText class="ion-margin-start">
                <h3>{classItem.name}</h3></IonText>
            </IonRow>
            {/* <IonRow><IonText class="ion-margin-start">{teacher.name}</IonText></IonRow> */}
          </IonGrid>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                {
                  (classStore.isLoading) ?
                    <IonSkeletonText animated style={{ width: '100%' }} /> :
                    <IonText>{classItem.description}</IonText>
                }
              </IonCol>
              <IonCol size="2">
                <IonFabButton
                color={
                  classStore.classIDs.includes(classItem.id)?
                  "success" : "primary"
                }
                onClick={
                  () => {
                    classStore.joinClass(classItem);
                    onDidDismiss();
                  }
                }>
                  <IonIcon
                  icon={
                     classStore.classIDs.includes(classItem.id) ?
                    checkmark : add
                  }
                   />
                </IonFabButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </>
  )
});
