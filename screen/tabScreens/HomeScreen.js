import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import BooksApi from '../data/BookApi';

// This is the main HomeScreen Function in the File
const HomeScreen = ({navigation}) => {
  const bookCard = ({item}) => {
    return (
      <View style={styles.bookmainContainer}>
        <View style={styles.bookContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('BookDetails', {
                bookId: item.id,
              })
            }>
            <Image
              style={styles.bookImage}
              source={item.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('drawerNavigation')}>
          <Image
            source={require('../../asset/horizontallinescolor.png')}
            style={{
              width: 20,
              height: 20,
              marginTop: 20,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#190140',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 15,
          }}>
          All Books
        </Text>
        <Image
          source={require('../../asset/magnifying-glass.png')}
          style={{
            width: 30,
            height: 30,
            marginTop: 15,
            marginRight: 5,
          }}
        />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText1}>Ebook</Text>
        <Text style={styles.categoryText2}>Audiobooks</Text>
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            keyExtractor={item => item.id}
            data={BooksApi}
            renderItem={bookCard}
            numColumns="2"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bookmainContainer: {
    paddingHorizontal: 10,
  },

  bookContainer: {
    width: 165,
    height: undefined,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
  },

  bookImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },

  maincontainer: {
    flex: 1,
  },

  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
  },
  categoryContainer: {
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    width: '90%',
    height: 60,
    justifyContent: 'space-evenly',
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 20,
  },
  categoryText1: {
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 15,
    color: '#190140',
  },
  categoryText2: {
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 40,
    marginTop: 15,
    color: '#190140',
  },
});
