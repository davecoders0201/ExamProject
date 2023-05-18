import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import BooksApi from '../data/BookApi';
import RatingStars from './Ratingstars';

const BookDetails = ({navigation, route}) => {
  const id = route.params.bookId;
  console.log(id);

  const selectedBook = BooksApi.find(data => {
    return id === data.id;
  });
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Tabnavigation')}>
          <Image
            source={require('../../asset/back.png')}
            style={{
              width: 20,
              height: 20,
              marginTop: 20,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>

        <Image
          source={require('../../asset/dots.png')}
          style={{
            width: 30,
            height: 30,
            marginTop: 15,
            marginRight: 15,
          }}
        />
      </View>
      <View>
        <View style={styles.bookContainer}>
          <Text style={styles.authorText}>{selectedBook.author}</Text>
          <Text style={styles.mainHeader}>{selectedBook.title}</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.bookImage}
              source={selectedBook.image}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View style={styles.stars}>
          <Text style={{marginRight: 10, fontSize: 30, color: '#190140'}}>
            4.5
          </Text>
          <RatingStars rating={selectedBook.rating} />
        </View>
        <View>
          <Text
            style={{
              marginLeft: 15,
              marginBottom: 30,
              marginTop: -20,
              fontSize: 16,
            }}>
            892 Ratings on Google Play{' '}
          </Text>
        </View>
        <Text style={styles.description}>{selectedBook.description}</Text>
      </View>
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
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
  authorText: {
    color: 'orange',
    marginLeft: 10,
    marginTop: 10,
  },
  mainHeader: {
    fontSize: 30,
    textAlign: 'left',
    marginLeft: 10,
    color: '#190140',
  },
  imageContainer: {
    marginLeft: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -110,
    marginBottom: -110,
  },
  bookImage: {
    width: '90%',
    height: '65%',
    borderRadius: 20,
  },
  description: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    color: '#190140',
    marginTop: -10,
  },
  stars: {
    // marginTop: -10,
    marginBottom: 20,
    marginLeft: 10,
    flexDirection: 'row',
  },
});
