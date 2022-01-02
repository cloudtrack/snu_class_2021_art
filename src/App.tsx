
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

import "./theme/variables.css";

import HomeView from "./pages/HomeView";
import RegisterHomeView from "./pages/RegisterHomeView";
import LoginProvider from "./pages/LoginPage/LoginProvider";
import RegisterProvider from "./pages/RegisterPage/RegisterProvider";
import { useStores } from "./stores/RootStore";
import { observer } from "mobx-react";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { Storage } from 'aws-amplify';

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === "[::1]" ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [
  localRedirectSignIn,
  productionRedirectSignIn,
] = awsconfig.oauth.redirectSignIn.split(",");

const [
  localRedirectSignOut,
  productionRedirectSignOut,
] = awsconfig.oauth.redirectSignOut.split(",");

console.log(localRedirectSignIn);
console.log(productionRedirectSignIn);
console.log(isLocalhost);

const updatedAwsConfig = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  }
}

Amplify.configure(updatedAwsConfig);
Storage.configure({
  AWSS3: {
    bucket: 'snuclass2021artuserimage215818-dev', //REQUIRED -  Amazon S3 bucket name
    region: 'us-west-1', //OPTIONAL -  Amazon service region
    level: 'public'
  }
});


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

  return (
    <IonApp>
      <IonLoading message={'Loading...'} isOpen={!userStore.authCheckComplete} backdropDismiss />
      {!userStore.isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}
    </IonApp>
  );
}

export default observer(App);
