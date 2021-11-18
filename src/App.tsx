
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonLoading } from "@ionic/react";
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

import HomeView from "./pages/HomeView";
import RegisterHomeView from "./pages/RegisterHomeView";
import LoginProvider from "./pages/LoginPage/LoginProvider";
import RegisterProvider from "./pages/RegisterPage/RegisterProvider";
import { useStores } from "./stores/RootStore";
import { observer } from "mobx-react";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const PrivateRoutes = () => {
  return (
    <IonReactRouter>
        <Switch>
          <Route exact path="/login" component={LoginProvider} />
          <Route exact path="/register" component={RegisterProvider} />
          <Route exact path="/pub" component={RegisterHomeView} />
          <Route path="/" render={() => <Redirect to="/pub" />} />
        </Switch>
    </IonReactRouter>
  );
}

const PublicRoutes = () => {
  return (
    <IonReactRouter>
      <Route path="/tabs" component={HomeView} />
      <Route path="/" render={() => <Redirect to="/tabs/feed" />} />
    </IonReactRouter>
  );
}

const App: React.FC = () => {
  const { userStore } = useStores()

  return !userStore.authCheckComplete ? (
    <IonApp>
      <IonLoading message={'Loading...'} isOpen />
    </IonApp>
  ) : (
    <IonApp>
      {!userStore.isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}
    </IonApp>
  );
}

export default observer(App);
