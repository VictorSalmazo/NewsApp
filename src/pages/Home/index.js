import React from 'react';
import { Button, StyleSheet } from 'react-native';

import data from '../../../fakeData';

import SearchBar from '../../components/SearchBar';
import Content from '../../components/Content';
import FeaturedNews from '../../components/FeaturedNews';
import HorizontalNews from '../../components/HorizontalNews';
import VerticalNews from '../../components/VerticalNews';

const horizontalNews = data.filter(item => item.category === 'breaking-news');
const verticalNews = data.filter(item => item.category === 'tech');

const Home = ({ navigation }) => {
    return (
        <Content>
            <SearchBar />
            <FeaturedNews item={{
                id: '3',
                title: 'This is the title no three.',
                desc:
                    'Desc is the short form of description and this format is the actual same as our real database.',
                thumbnail: 'http://lorempixel.com/400/200/',
                category: 'breaking-news'
            }} />
            <HorizontalNews data={horizontalNews} />
            <VerticalNews data={verticalNews} />
            <Button
                title="Add News"
                onPress={() => navigation.navigate('AddNews')}
                style={styles.addButton}
            />
        </Content>
    );
}

const styles = StyleSheet.create({
    addButton: {
        borderRadius: 100,
        padding: 5,
        marginBottom: 10
    }
})

export default Home;