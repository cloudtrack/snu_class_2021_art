import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonList, IonModal, IonSearchbar, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { observer } from "mobx-react";
import { useState } from "react";
import { useStores } from "../../stores/RootStore";
import { ISCItemProps, StudentClassItem } from "../StudentClassItem";

interface IClassSearchModalProps {
  showModal: boolean;
  onDidDismiss: () => void;
};


const ClassSearchModal: React.FC<IClassSearchModalProps> = (props) => {
  const { showModal, onDidDismiss } = props;
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const { classStore } = useStores();

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
          <IonTitle>Search and Join Class</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonChange={
            (e) => {
              setSearchText(e.detail.value!)
            }} />
        <IonList>
          {
            (searchText !== "") ?
              <>
                {
                  classStore.allClasses
                    .filter(c => {
                      console.log(c.name.toLowerCase().includes(searchText.toLowerCase()))
                      return c.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    })
                    .map((classData) => {
                      if (classData !== null) {
                        const classItemProps: ISCItemProps = {
                          classItem: classData,
                          onDidDismiss: () => {
                            onDidDismiss();
                          }
                        }
                        return (
                          <StudentClassItem {...classItemProps} />
                        );
                      }
                    })
                }
              </>
              :
              <IonText>
                Enter what you want to search!
              </IonText>
          }
        </IonList>
      </IonContent>
    </IonModal>
  )
}

export default observer(ClassSearchModal);
