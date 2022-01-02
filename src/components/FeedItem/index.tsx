import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
  IonTextarea,
  useIonModal,
} from '@ionic/react';
import { DataStore } from 'aws-amplify';
import { chatbubbleEllipses, heart, heartOutline, personCircle } from 'ionicons/icons';
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

import { Comment } from '../../models';
import { observer } from 'mobx-react';

interface IFeedItemProps {
  artwork: ArtWork;
}

const FeedItem: React.FC<IFeedItemProps> = ({ artwork }) => {

  const [username, setUserName] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [liked, setLiked] = useState(false);
  const [commentString, setCommentString] = useState<string>('');
  const [clicked, setClicked] = useState(false);

  const { userStore, commentStore } = useStores();

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
      DataStore.query(Student, s => s.id('eq', artwork.studentID!))
        .then(res => {
          setUserName(res[0].name!);
        }).catch(err => {
          console.log(err);
        });
    };

    fetchUserName();
  }, [artwork]);

  useEffect(() => {
    const fetchImgURL = async () => {
      if (artwork.image !== undefined) {
        const result = await getImgLinkCached(artwork.image);
        console.log(result);
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
            <IonText className="feed-username">{username}</IonText>
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
                clicked && <>
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
                        new Date().toISOString(),
                        userStore.userData?.role === 'student' ? userStore.userData?.id : undefined,
                        userStore.userData?.role === 'teacher' ? userStore.userData?.id : undefined,
                      );
                      setCommentString('');
                    }}
                  >
                    Comment
                  </IonButton>
                </>
              }
            </IonCol>
          </IonRow>

          {/* Should be handled to show all the comments for a specific art work */}
          {
            commentStore.comments.map((comment: Comment) => {
              if (comment.artworkID === artwork.id) {
                console.log(comment);
                return (
                  <CommentItem
                    key={artwork.id}
                    isTeacher={
                      comment.studentID === undefined ||
                      comment.studentID === null ||
                      comment.studentID === ""
                    }
                    userID={
                      comment.studentID === undefined ||
                        comment.studentID === null ||
                        comment.studentID === "" ?
                        comment.teacherID :
                        comment.studentID
                    }
                    comment={comment.message} />
                );
              } else {
                return <></>;
              }
            })
          }
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default observer(FeedItem);
