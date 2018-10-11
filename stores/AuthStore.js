import { observable, action } from 'mobx';

export class AuthStore {

  @observable user = null;
  @observable error = null;

  fb = null;

  constructor(firebase){
    this.fb = firebase;
  }

  @action iniciarSesion(correo, contra){
    this.fb.auth().signInWithEmailAndPassword(correo, contra)
    .catch(error => {
      this.error = error.message;
    })
    .then(credentials => {
      if(credentials) this.user = credentials.user;
    });
  }

}