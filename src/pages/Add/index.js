import React from 'react';
import { View, Text, Button } from 'react-native';
import Form from '../../components/Form';

const Add = ({ navigation }) => {
    return (
        <View>
            <Text style={{textAlign: 'center', fontSize: 20}}>Cadastrar Notícias</Text>
            <Form/>
        </View>
    );
}

export default Add;