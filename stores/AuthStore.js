import { observable, action } from 'mobx';

export class AuthStore {

  @observable user = null;
  @observable error = null;

  fb = null;

  constructor(firebase){
    this.fb = firebase;

    
    this.fb.auth().onAuthStateChanged((receivedUser) => {
      if (receivedUser) {
        this.user = receivedUser;
      } else {
        this.user = null;
      }
    });
  }

  @action iniciarSesion(correo, contra){
    this.fb.auth().signInWithEmailAndPassword(correo, contra)
      .catch(error => {
        this.error = error.message;
      });
  }

  @action cerrarSesion(){
    this.fb.auth().signOut();
  }

}