import * as React from 'react';
import { View, StyleSheet, ToastAndroid, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { stores } from '../stores';

@observer export class Login extends React.Component {
  @observable credenciales = {
    correo: 'test@gmail.com',
    contra: '123456',
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    ToastAndroid.show('iniciando...', ToastAndroid.SHORT);
    stores.auth.iniciarSesion(this.credenciales.correo, this.credenciales.contra);
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Correo</FormLabel>
        <FormInput
          onChangeText={v => (this.credenciales.correo = v)}
          value={this.credenciales.correo}
          placeholder="tu correo electrónico"
        />

        <FormLabel>Contraseña</FormLabel>
        <FormInput
          onChangeText={v => (this.credenciales.contra = v)}
          value={this.credenciales.contra}
          placeholder="•••••••"
          secureTextEntry
        />

        <Button
          buttonStyle={styles.button}
          title="Iniciar Sesion"
          large
          onPress={this.onSubmit}
        />

        <Text>{stores.auth.user ? stores.auth.user.uid : 'No has iniciado sesión.'}</Text>

        {stores.auth.error && <Text>{stores.auth.error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  button: {
    backgroundColor: 'violet',
    marginTop: 20,
  },
});
