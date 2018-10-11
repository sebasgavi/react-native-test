import * as firebase from 'firebase';

import { AuthStore } from './AuthStore';
import { MensajesStore } from './MensajesStore';

if(!firebase.apps.length) firebase.initializeApp({
  apiKey: "AIzaSyDpWz2i2PVoN0WedM1hzumnd5_P3Kmdk4c",
  authDomain: "web-adv-test.firebaseapp.com",
  databaseURL: "https://web-adv-test.firebaseio.com",
  projectId: "web-adv-test",
  storageBucket: "web-adv-test.appspot.com",
  messagingSenderId: "637314218364"
});

export const stores = {
  auth: new AuthStore(firebase),
  mensajes: new MensajesStore(firebase),
};