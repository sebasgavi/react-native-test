import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import { stores } from '../stores';

@observer export class Main extends React.Component{

  @observable mensaje = '';

  constructor(props){
    super(props);
    this.onEnviar = this.onEnviar.bind(this);
  }

  onEnviar(){
    stores.mensajes.enviarMensaje(this.mensaje, stores.auth.user);
  }

  render(){
    return <View style={styles.container}>
      <Text>Main</Text>

      <FormLabel>Mensaje</FormLabel>
      <FormInput
        onChangeText={v => (this.mensaje = v)}
        value={this.mensaje}
        placeholder="el mensaje"
      />

      <Button
        buttonStyle={styles.button}
        title="Enviar"
        large
        onPress={this.onEnviar}
      />
    </View>
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