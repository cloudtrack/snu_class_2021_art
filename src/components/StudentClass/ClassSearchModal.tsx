import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonModal, IonSearchbar, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";

interface IClassSearchModalProps {
  showModal: boolean;
  onDidDismiss: () => void;
};


const ClassSearchModal: React.FC<IClassSearchModalProps> = (props) => {
  const { showModal, onDidDismiss } = props;
  const [searchText, setSearchText] = useState('');

  return (
    <IonModal
      isOpen={showModal}
      onDidDismiss={() => onDidDismiss()}
    >
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => onDidDismiss()}>
              <IonIcon color="white" slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonChange={
            (e) => {
              setSearchText(e.detail.value!)
            }} />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          Search Text: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
    </IonModal>

  );
}

export default observer(ClassSearchModal);
