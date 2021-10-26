import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import {
    IonIcon,
    IonLabel,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, images, person } from 'ionicons/icons';
import ClassView from './ClassPage/Class';
import FeedView from './FeedPage/Feed';
import ProfileView from './ProfilePage/Profile';


const HomeView: React.FC = () => (
    <IonPage>
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
                        <ProfileView />
                    </Route>
                    <Route exact path="/home">
                        <Redirect to="/feed" />
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

    </IonPage>
);

export default HomeView;
