import { Route } from 'react-router-dom';
import React from 'react';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, images, person } from 'ionicons/icons';
import ClassView from './ClassPage/Class';
import FeedView from './FeedPage/Feed';
import ProfileProvider from './ProfilePage/ProfileProvider';

const HomeView: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/feed">
          <FeedView />
        </Route>
        <Route exact path="/class">
          <ClassView />
        </Route>
        <Route path="/profile">
          <ProfileProvider />
        </Route>
        <Route exact path="/home">
          <FeedView />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/feed">
          <IonIcon icon={images} />
          <IonLabel>Feed</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/class">
          <IonIcon icon={calendar} />
          <IonLabel>Class</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default HomeView;
