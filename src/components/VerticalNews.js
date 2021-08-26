import React from 'react';
import { StyleSheet } from 'react-native';
import VerticalList from './VerticalList';

const VerticalNews = ({ data }) => {
    return <VerticalList title={'Lista Vertical'} data={data} />;
}

const styles = StyleSheet.create({
    container: {}
})

export default VerticalNews;