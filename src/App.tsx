
import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import RegisterView from "./pages/RegisterPage/RegisterHomeView";
import HomeView from "./pages/HomeView";
import FeedView from "./pages/Feed";
import ClassView from "./pages/Class";
import ProfileView from "./pages/Profile";
import LoginView from "./pages/LoginPage/LoginView";

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { observer } from "mobx-react";
import LoginProvider from "./pages/LoginPage/LoginProvider";
import RegisterHomeView from "./pages/RegisterPage/RegisterHomeView";
import RegisterProvider from "./pages/RegisterPage/RegisterProvider";
Amplify.configure(awsconfig);

class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/login">
              <LoginProvider />
            </Route>
            <Route exact path="/registerhome">
              <RegisterHomeView />
            </Route>
            <Route exact path="/register">
              <RegisterProvider />
            </Route>
            <Route exact path="/home">
              <HomeView />
            </Route>
            <Route exact path="/feed">
              <FeedView />
            </Route>
            <Route exact path="/class">
              <ClassView />
            </Route>
            <Route exact path="/profile">
              <ProfileView />
            </Route>
            <Route exact path="/">
              <Redirect to="/registerhome" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  }
}


export default App;
