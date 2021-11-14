import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent, IonList, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { close } from "ionicons/icons";
import { useState } from "react";

interface EditProfileModalProps {
  showModal: boolean,
  onDidDismiss: () => void
}


const EditProfileModal: React.FC<EditProfileModalProps> = (props) => {

  const { showModal, onDidDismiss } = props;

  return (
    <IonModal isOpen={showModal} onDidDismiss={() => onDidDismiss()}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Profile</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onDidDismiss()}>
              <IonIcon slot="icon-only" icon={ close } />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {/* <IonContent> */}
        {/* <form onSubmit={handleSubmit}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Username</IonLabel>
              <IonInput

                name="username"
                value={username}

                onIonChange={handleChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>

              <IonInput
                name="password"
                value={password}
                onIonChange={handleChange}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Role</IonLabel>
              <IonSelect
                name="role"
                value={role}
                onIonChange={handleChange}
              >
                <IonSelectOption value="admin">Admin</IonSelectOption>
                <IonSelectOption value="user">User</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
          <IonButton type="submit" expand="block">
            Save
          </IonButton>
        </form>
      </IonContent> */}
    </IonModal>
  );
};


export default EditProfileModal;
