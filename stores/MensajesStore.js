import { observable, action } from 'mobx';
import { ToastAndroid } from 'react-native';

export class MensajesStore {

  @observable lista = [];

  fb = null;
  refMensajes = null;

  constructor(firebase){
    this.fb = firebase;

    this.refMensajes = this.fb.database().ref('mensajes');

    this.refMensajes.on('child_added', (snapshot) => {
      let obj = snapshot.val();
      obj.key = snapshot.key;
      this.lista.push(obj);
      //ToastAndroid.show(JSON.stringify(obj), ToastAndroid.LONG);
    });

    this.refMensajes.on('child_removed', (snapshot) => {
      let index = this.lista.findIndex(function(elem){
        if(elem.key == snapshot.key) return true;
      });
      this.lista.splice(index, 1);
    });
  }


  @action enviarMensaje(mensaje, user){
    let ref = this.refMensajes.push();
    ref.set({
      mensaje: mensaje,
      user: user.email
    });
  }

  @action eliminarMensaje(key){
    this.refMensajes.child(key).remove();
  }
}