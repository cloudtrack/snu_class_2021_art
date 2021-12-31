import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
  useIonModal
} from '@ionic/react';
import { DataStore } from 'aws-amplify';
import { heart, heartOutline, personCircle } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { Student } from '../../models';
import { ArtWork } from '../../models';
import { getImgLinkCached } from '../../stores/PictrueStore';
import { ImagePreviewModal } from '../ImagePreviewModal';

import './index.css';
import React from 'react';

interface IFeedItemProps {
  // commentList: ICommentItemProps[];
  artwork: ArtWork;
}

export const FeedItem: React.FC<IFeedItemProps> = ({ artwork }) => {

  const [useranme, setUserName] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [liked, setLiked] = useState(false);

  const handleDismiss = () => {
    dismiss();
  }
  const [present, dismiss] = useIonModal(
    ImagePreviewModal,
    {
      imgURL: imgURL,
      onDismiss: handleDismiss
    }
  );

  useEffect(() => {
    const fetchUserName = async () => {
      const result = (await DataStore.query(Student)).filter(
        (student: Student) => student.id === artwork.studentID
      ).map((student: Student) => student.name)[0];
      if (result !== undefined) {
        setUserName(result);
      }
    };

    fetchUserName();
  }, [artwork]);

  useEffect(() => {
    const fetchImgURL = async () => {
      if (artwork.image !== undefined) {
        const result = await getImgLinkCached(artwork.image);
        if (result !== undefined) {
          setImgURL(result);
        }
      }
    };

    fetchImgURL();
  }, [artwork]);

  return (
    <IonCard>
      <IonCardHeader className="feed-header">
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonIcon icon={personCircle} size="large" />
            <IonText className="feed-username">{useranme}</IonText>
          </IonRow>
        </IonGrid>
      </IonCardHeader>
      <IonCardContent className="feed-image" onClick={() => {
        present({
          cssClass: 'modal-transparency',
          onDidDismiss: handleDismiss
        });
      }}>
        {/* <IonImg src="https://picsum.photos/640/300" /> */}
        <div className='imgwrapper'>
          <img src={imgURL} className='coverimg' />
        </div>
      </IonCardContent>
      <IonCardContent className="feed-control">
        <IonGrid>
          <IonRow className="ion-align-items-center ion-justify-content-end" onClick={
            () => { setLiked(!liked); }
          }>
            {
              liked ?
                <IonIcon size='large' icon={heart} className="ion-margin-end" color="danger" /> :
                <IonIcon size='large' icon={heartOutline} className="ion-margin-end" color="danger" />
            }
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};
