import { observable, action } from 'mobx';

export class MensajesStore {

  @observable mensajes = [];

  fb = null;

  constructor(firebase){
    this.fb = firebase;
  }


  @action enviarMensaje(mensaje, user){
    let ref = this.fb.database().ref('mensajes').push();
    ref.set({
      mensaje: mensaje,
      user: user.email
    })
  }
}