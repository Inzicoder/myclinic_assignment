/* eslint-disable prettier/prettier */
import * as React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import uuid from 'react-native-uuid';
import debounce from 'lodash/debounce';
import CardItem from '../components/CardItem';

const jsonData = require('../API/page1.json');
const jsonData2 = require('../API/page2.json');
const jsonData3 = require('../API/page3.json');
const contentArray = jsonData.page['content-items'].content;
const contentArray2 = jsonData2.page['content-items'].content;
const contentArray3 = jsonData3.page['content-items'].content;

const itemsPerPage = 9;
const initialState = contentArray.slice(0, 9);

const HomeScreen = () => {
  const [renderedData, setRenderedData] = React.useState(initialState);
  const [searchText, setSearchText] = React.useState('');
  const [isListEnd, setIsListEnd] = React.useState(false);


  const debouncedSearch = debounce(text => {
    const filteredData = contentArray.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setRenderedData(filteredData);
  }, 500);

  const handleSearch = React.useCallback((text) => {
    setSearchText(text);
    debouncedSearch(text);
  }, [debouncedSearch]);

  const clearSearch = React.useCallback(() => {
    setRenderedData(initialState);
    setSearchText('');
  }, []);


  const loadMoreData = React.useCallback( () => {
    if (!isListEnd && searchText.length === 0) {
        const startIndex = renderedData.length; 
        const endIndex = Math.min(startIndex + itemsPerPage, contentArray.length);
        const newRenderedData = contentArray.slice(startIndex, endIndex);
        setRenderedData(prevRenderedData => [...prevRenderedData, ...newRenderedData]);
      if (renderedData.length === 20) {
          setRenderedData(prevRenderedData => [...prevRenderedData, ...contentArray2]);
        }
        if (renderedData.length === 40) {
          setRenderedData(prevRenderedData => [...prevRenderedData, ...contentArray3]);
          setIsListEnd(true);
        }
    }
  }, [isListEnd, renderedData.length, searchText.length]);

  return (
    <View style={styles.container}>
      <Header
        onSearch={handleSearch}
        searchText={searchText}
        clearSearch={clearSearch}
      />
      <FlatList
        initialNumToRender={9}
        data={renderedData}
        renderItem={(item) => <CardItem {...item}  />}
        keyExtractor={() => uuid.v4()}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        onEndReached={loadMoreData}
        onEndReachedThreshold={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#12100E',
  },

  image: {
    width: 100,
    height: 198,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  name: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#CACACA',
    textAlign: 'left',
  },
  columnWrapper: {
    alignItems:'center',
  },
});

export default HomeScreen;
