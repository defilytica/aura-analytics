import ReactDOM from 'react-dom/client';
import ApplicationUpdater from './state/application/updater';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import {auraClient, client} from './apollo/client';
import store from './state';
import { initializeApp } from "firebase/app";
import {FIREBASE_API_KEY} from "./data/balancer/constants";



function Updaters() {
  return (
    <>
      <ApplicationUpdater />
    </>
  );
}
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "aura-analytics-1c4b3.firebaseapp.com",
    databaseURL: "https://aura-analytics-1c4b3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aura-analytics-1c4b3",
    storageBucket: "aura-analytics-1c4b3.appspot.com",
    messagingSenderId: "1086945417593",
    appId: "1:1086945417593:web:8ef6c8fa5aa484205e37a8",
    measurementId: "G-8YYQH414HC"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ApolloProvider client={auraClient}>
      <Provider store={store}>
        <Updaters />
        <HashRouter>
        <App />
        </HashRouter>
      </Provider>
    </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
