import React from 'react';
import { StyleSheet } from 'react-native';
import HorizontalList from './HorizontalList';

const HorizontalNews = ({ data }) => {
    return <HorizontalList title='Lista Horizontal' data={data} />;
}

const styles = StyleSheet.create({

})

export default HorizontalNews;