import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { stores } from '../stores/index';

@observer export class Main extends Component<{}, {}> {

    @observable message = 'hi';

    constructor (props) {
        super(props);
    }

    onEnviar = () => {
        stores.messages.enviarMensaje(this.message, stores.auth.user);
    };

    render() {
        return <View style={styles.container}>

            <Text>Main</Text>
            <FormLabel>Mensaje</FormLabel>
            <FormInput value={this.message} onChangeText={v => this.message = v} placeholder='una wea'/>
            <Button buttonStyle={styles.button} title='Un buton' large onPress={this.onEnviar}/>

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