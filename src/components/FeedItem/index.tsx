import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonTextarea,
  useIonModal,

} from '@ionic/react';
import { DataStore } from 'aws-amplify';
import { add, chatbubbleEllipses, close, heart, heartOutline, personCircle, remove } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { Student } from '../../models';
import { ArtWork } from '../../models';
import { getImgLinkCached } from '../../stores/PictrueStore';
import './index.css';
import { CommentItem } from './commentItem';
import { useStores } from '../../stores/RootStore';
import { ImagePreviewModal } from '../ImagePreviewModal';

import './index.css';
import React from 'react';
// import { avatarImageFromEmail } from '../../utils';
// import { isCompositeComponent } from 'react-dom/test-utils';
// import { Comment } from '../../models';

// import { Comment } from '../../models';

interface IFeedItemProps {
  //commentList: ICommentItemProps[];
  artwork: ArtWork;
}

export const FeedItem: React.FC<IFeedItemProps> = ({ artwork }) => {

  const [useranme, setUserName] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [liked, setLiked] = useState(false);
  const [commentString, setCommentString] = useState<string>('');
  const [clicked, setClicked] =useState(false);

  const { commentStore } = useStores();

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
        {/* <IonSlides options={slideOpts}>
          <IonSlide > */}
        <div className='imgwrapper'>
          <img src={imgURL} className='coverimg' />
        </div>
        {/* </IonSlide>
        </IonSlides> */}
      </IonCardContent>
      <IonCardContent className="feed-control">
        <IonGrid>
          <IonRow>
            <IonCol className="ion-align-items-center ion-justify-content-end" onClick={
              () => { setLiked(!liked); }
            }>
              {
                liked ?
                  <IonButton className='like' fill='clear'><IonIcon size='large' icon={heart} className="ion-margin-end" color="danger" /></IonButton> :
                  <IonButton className='like' fill='clear'><IonIcon size='large' icon={heartOutline} className="ion-margin-end" color="danger" /></IonButton>
              }

            </IonCol>

        {/* add comment section */}

            <IonCol className="ion-align-items-center ion-justify-content-end">
                <IonButton fill='clear' className="like" onClick={
                  () => { setClicked(!clicked); }
                }>
                  <IonIcon icon={chatbubbleEllipses} color="primary" size="large" />
                </IonButton>
                {
                  clicked ?
                    <>
                      <IonTextarea className="float-left"
                      placeholder="Comment .... "
                      value={commentString}
                      onIonChange={e => setCommentString(e.detail.value!)}
                      />
                      <IonButton
                      className="ion-button small float-right round" size="small"
                      onClick={() => {
                        commentStore.addComment(
                          artwork.id,
                          commentString,
                          '2019-05-03T18:18:13.683Z',
                          'student',
                          'teacher'
                        );
                       }}
                       >
                         Comment
                      </IonButton>
                    </>:
                    <>
                    </>
                }
            </IonCol>
          </IonRow>

          {/* Should be handled to show all the comments for a specific art work */}
          <CommentItem key={artwork.id} username={useranme} avatar={imgURL} comment={"It is a comment"}  />
        </IonGrid>
      </IonCardContent>

    </IonCard>
  );
};
