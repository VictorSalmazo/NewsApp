import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Title from './Title';
import Subtitle from './Subtitle';


const BlockCard = ({ style, imageStyle, item: news }) => {
    return (
        <View style={[styles.container, style]} >
            <Image
                source={{ uri: news.thumbnail }}
                style={[styles.image, imageStyle]}
            />
            <View style={styles.contentContainer}>
                <Title>{news.title}</Title>
                <Subtitle>{news.desc}</Subtitle>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginBottom: 15
    },
    image: {
        width: '100%',
        height: 200,
    },
    contentContainer: {
        padding: 5
    }
})

export default BlockCard;