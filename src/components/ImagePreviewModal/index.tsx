import { IonContent, IonSlides, IonSlide, IonFooter, IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { add, close, remove } from "ionicons/icons";
import React from "react";
import 'swiper/swiper-bundle.min.css';

const slideOpts = {
  direction: 'vertical',
  zoom: false,
  spaceBetween: 10,
  centeredSlides: true
}

const slideZoomOpts = {
  zoom: true
}

export class ImagePreviewModal extends React.Component<{
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
