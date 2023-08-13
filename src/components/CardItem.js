import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {getImageSource} from '../helper';

const CardItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={getImageSource(item['poster-image'])}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 6,
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
});

export default React.memo(CardItem);
