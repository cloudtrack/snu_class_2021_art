import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { calendar, images, person } from 'ionicons/icons';
import ClassProvider from './ClassPage/ClassProvider';
import FeedView from './FeedPage/Feed';
import ProfileProvider from './ProfilePage/ProfileProvider';

const HomeView: React.FC = () => (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/feed">
          <FeedView />
        </Route>
        <Route exact path="/tabs/class">
          <ClassProvider />
        </Route>
        <Route exact path="/tabs/profile">
          <ProfileProvider />
        </Route>
        <Route exact path="/tabs" render={() => <Redirect to="/tabs/feed" />}/>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/feed">
          <IonIcon icon={images} />
          <IonLabel>Feed</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/class">
          <IonIcon icon={calendar} />
          <IonLabel>Class</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
);

export default HomeView;
