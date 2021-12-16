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
  useIonModal
} from '@ionic/react';
import { DataStore } from 'aws-amplify';
import { add, chatbubbleEllipses, close, heart, personCircle, remove } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { Student } from '../../models';
import { ArtWork } from '../../models';
import { getImgLinkCached } from '../../stores/PictrueStore';
import './index.css';

import 'swiper/swiper-bundle.min.css';
import React from 'react';

interface IFeedItemProps {
  // commentList: ICommentItemProps[];
  artwork: ArtWork;
}

const slideOpts = {
  direction: 'vertical',
  zoom: false,
  spaceBetween: 10,
  centeredSlides: true
}

const slideZoomOpts = {
  zoom: true
}

class ImagePreviewModal extends React.Component<{
  imgURL: string,
  onDismiss: () => void;
}> {

  imgURL;
  onDismiss;

  private sliderRef = React.createRef<HTMLIonSlidesElement>();

  constructor(props: any) {
    super(props);
    this.imgURL = props.imgURL;
    this.onDismiss = props.onDismiss;
  }


  zoom = async (zoomIn: boolean) => {
    const swiper = await this.sliderRef.current?.getSwiper();
    zoomIn ? swiper.zoom.in() : swiper.zoom.out();
  }

  render(): React.ReactNode {
    return (
      // <>
      <IonContent
        className='modal-transparency'
      >
        <IonSlides
          className="sliderrr"
          ref={this.sliderRef}
          options={slideZoomOpts}>
          <IonSlide >
            <div className='swiper-zoom-container'>
              <img src={this.imgURL} alt="preview" />
            </div>
          </IonSlide>
        </IonSlides>
        <IonFooter className="footer">
          <IonRow>
            <IonCol size="4" class="ion-text-center">
              <IonButton className="btn" onClick={() => this.zoom(false)}>
                <IonIcon icon={remove} slot="start"></IonIcon>
                out
              </IonButton>
            </IonCol>
            <IonCol size="4" class="ion-text-center">
              <IonButton className="btn" onClick={this.onDismiss}>
                <IonIcon icon={close} slot="start"></IonIcon>
                close
              </IonButton>
            </IonCol>
            <IonCol size="4" class="ion-text-center">
              <IonButton className="btn" onClick={() => this.zoom(true)}>
                <IonIcon icon={add} slot="start"></IonIcon>
                in
              </IonButton>
            </IonCol>
          </IonRow>
        </IonFooter>
      </IonContent>
      // </>
    );
  }
}

export const FeedItem: React.FC<IFeedItemProps> = ({ artwork }) => {

  const [useranme, setUserName] = useState('');
  const [imgURL, setImgURL] = useState('');

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
          <IonRow className="ion-align-items-center ion-justify-content-end">
            <IonIcon icon={heart} className="ion-margin-end" color="danger" />
            <IonIcon icon={chatbubbleEllipses} color="primary" />
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};
