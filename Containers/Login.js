import React, {Component} from 'react';
import { View, StyleSheet, ToastAndroid, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { stores } from '../stores/index'

@observer export class Login extends Component {

    @observable credenciales = {
        correo: 'elcorrein@hotmail.com',
        contra: 'superCorreo'
    };

    constructor(props) {
        super(props);
    }


    onSubmit = () => {
        ToastAndroid.show(this.credenciales.correo + ' ' + this.credenciales.contra, ToastAndroid.SHORT);
        stores.auth.loginFire(this.credenciales.correo, this.credenciales.contra);
    };


    render () {
        return <View style={styles.container}>
            <FormLabel>correo</FormLabel>
            <FormInput value={this.credenciales.correo} onChangeText={v => this.credenciales.correo = v} placeholder='Tu correo wey'/>
            <FormLabel>Contraseña</FormLabel>
            <FormInput value={this.credenciales.contra} placeholder='******' onChangeText={v => this.credenciales.contra = v} secureTextEntry/>
            <Button buttonStyle={styles.button} title='Iniciar Sesión' large onPress={this.onSubmit}/>

            <Text>{stores.auth.user ? stores.auth.user.uid: 'no has iniciado sesion.'}</Text>
            <Text>{stores.auth.errorCode ? stores.auth.errorMessage: ''}</Text>
        </View>;
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    button: {
        backgroundColor: 'red',
        marginTop: 20
    }


});