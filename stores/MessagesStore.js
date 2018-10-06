import { observable, action } from 'mobx';

export class MessagesStore {

    @observable mensajes = [];

    fb;

    constructor (firebase) {
        this.fb = firebase;
    }

    @action enviarMensaje(mensaje, user) {
        const ref = this.fb.database().ref('mensajes').push();
        ref.then(() => {
            ref.set({
                mensaje: mensaje,
                user: user.email
            });
        });

    }

}