/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


const Header = ({searchText,onSearch,clearSearch}) => {
  const [isTextInputOpen, setIsTextInputOpen] = React.useState(false);

  const toggleTextInput = () => {
    setIsTextInputOpen(prevProps => !prevProps);
    searchText !== '' && clearSearch();
  };


  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={require('../assets/nav_bar.png')}
       style={styles.navbarContainer}>
      <View style={styles.secondaryContainer}>
        {isTextInputOpen ? (
          <Pressable
          style={styles.backIconContainer}
          onPress={toggleTextInput}
           >
            <Image
              source={require('../assets/back.png')}
              style={styles.backIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              value={searchText}
              onChangeText={onSearch}
              autoFocus
              onBlur={toggleTextInput}
              placeholderTextColor="#000"
            />
          </Pressable>
        ) : (
          <View
            style={styles.searchContainer}
           >
            <Text style={styles.headerText}>Romantic Comedy</Text>
            <Pressable
             onPress={toggleTextInput}
            >
            <Image
              source={require('../assets/search.png')}
              style={styles.searchIcon}
            />
              </Pressable>
          </View>
        )}
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 8,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width : '100%',
  },
  backIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems :'center',
  },
  secondaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginHorizontal: 'auto',
  },
  navbarContainer:{
  padding : 10
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  searchIcon :{
    width: 20,
    height: 20,
  },
  headerText: {
    color: '#CACACA',
    textAlign: 'center',
    fontSize: 14,
  },
  textInput: {
    width: '70%',
    backgroundColor: '#FFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    color :'#000',
  },
});

export default Header;
