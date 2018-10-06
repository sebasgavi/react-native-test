import { observable, action } from 'mobx';

export class AuthStore {

    @observable user;
    @observable errorCode;
    @observable errorMessage;

    fb;

    constructor (firebase) {
        this.fb = firebase;
    }

    @action loginFire(mail, pass) {
        this.errorCode = null;
        this. errorMessage = null;
        this.user = null;
        this.fb.auth().signInWithEmailAndPassword(mail, pass).then( (credentials) => {
            if(credentials) this.user = credentials.user;
        }).catch( (error) => {
            this.errorCode = error.code;
            this.errorMessage = error.message;
        });
    }

}