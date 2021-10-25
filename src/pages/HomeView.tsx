import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import {
    IonApp,
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
import ClassView from './Class';
import FeedView from './Feed';
import ProfileView from './Profile';


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
                    <IonTabButton tab="tab1" href="/tab1">
                        <IonIcon icon={images} />
                        <IonLabel>Feed</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/tab2">
                        <IonIcon icon={calendar} />
                        <IonLabel>Class</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tab3">
                        <IonIcon icon={person} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>

    </IonPage>
);

export default HomeView;
