import * as React from 'react';
import { View, Text, StyleSheet, TouchableHighlight  } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import { stores } from '../stores';

@observer export class Main extends React.Component{

  @observable mensaje = '';

  constructor(props){
    super(props);
    this.onEnviar = this.onEnviar.bind(this);
    this.onCerraSesion = this.onCerraSesion.bind(this);
  }

  onEnviar(){
    stores.mensajes.enviarMensaje(this.mensaje, stores.auth.user);
  }

  onCerraSesion(){
    stores.auth.cerrarSesion();
  }

  onRemoveElement(key){
    stores.mensajes.eliminarMensaje(key);
  }

  render(){
    return <View style={styles.container}>
      {stores.mensajes.lista.map(elemento => 
        <TouchableHighlight onPress={() => this.onRemoveElement(elemento.key)}>
          <Text style={styles.listItem}>{elemento.mensaje}</Text>
        </TouchableHighlight>)}
      
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

      <Button
        buttonStyle={styles.button}
        title="Cerrar sesión"
        large
        onPress={this.onCerraSesion}
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
  listItem: {
    padding: 10,
    fontSize: 20,
  }
});