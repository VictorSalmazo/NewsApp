import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, StatusBar } from 'react-native';

import { withFormik } from 'formik';
import Yup from 'yup';

const Form = (props) => {

    return (
        <View style={styles.container}>
            <Text>Título:</Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Digite o título'}
                value={props.values.title}
                onChange={text => props.setFieldValue('title', text)}
            />
            <Text>Descrição:</Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Digite o conteúdo da notícia'}
                value={props.values.desc}
                onChangeText={text => props.setFieldValue('desc', text)}
            />
            <Text>Autor:</Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Digite o nome do autor'}
                value={props.values.autor}
                onChangeText={text => props.setFieldValue('autor', text)}
            />
            <Button
                style={styles.button}
                onPress={props.handleSubmit}
                title="Enviar"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
    },
    inputs: {
        textAlign: 'center',
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 5
    },
})

export default withFormik({
    mapPropsToValues: () => ({ title: '', desc: '', autor: '' }),

    /*validationSchema: Yup.object().shape({
        title: Yup.string()
            .required('Digite o título da notícia'),
        desc: Yup.string()
            .required('Digite uma descrição para a notícia'),
        autor: Yup.string()
        .required('Informe o nome do Autor dessa notícia '),
    }),*/

    handleSubmit: (values, { setSubmitting, setErrors }) => {
        apiService.post('/autenticate', values)
            .then(values)
            .catch(err => {
                setSubmitting(false);
                setErrors({ message: err.message })
            })
    }
})(Form);