import firebase from 'firebase';

import { AuthStore } from './AuthStore';

import { MessagesStore } from './MessagesStore'

const config = {
    apiKey: "AIzaSyD3CdvAdWyQ-PocI5Dzxg5jeosLxv3uuxM",
    authDomain: "supercanvas-db1b5.firebaseapp.com",
    databaseURL: "https://supercanvas-db1b5.firebaseio.com",
    projectId: "supercanvas-db1b5",
    storageBucket: "supercanvas-db1b5.appspot.com",
    messagingSenderId: "837112694624"
};

if(!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const stores = {
    auth: new AuthStore(firebase),
    messages: new MessagesStore(firebase)
};