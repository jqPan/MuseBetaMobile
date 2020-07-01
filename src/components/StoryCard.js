import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  Ionicons,
  FontAwesome
} from '@expo/vector-icons';

import userDefault from './../../assets/user-default.png';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 350,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 5
  },
  meta: {
    color: 'grey',
    flexDirection: 'row'
  },
  profileImg: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 15,
    marginRight: 10
  },
  author: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  geolocation: {
    fontSize: 13,
  },
  prime: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  pitch: {
    paddingHorizontal: 15,
    fontSize: 16,
  },
  metaContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    marginVertical: 5,
  },
  actions: {
    alignItems: 'center',
  },
  actionsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
  },
  button: {
    backgroundColor: 'rgb(245,245,245)',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    height: 45,
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export const StoryCard = ({ navigation, item }) => {
  return (
    <View style={styles.card}>

      <View style={styles.header}>
        <View style={styles.meta}>
          <Image
            style={styles.profileImg}
            source={userDefault}
          />
          <View>
            <TouchableOpacity>
              <Text style={styles.author}>{item.authorName}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.geolocation}>{item.city}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text>...</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.prime}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.genre}</Text>
      </View>

      <Text style={styles.pitch}>{item.pitch}</Text>

      <View style={styles.metaContainer}>
        <Text style={styles.meta}>{Date.now()}</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.actionsWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('StoryDetailScreen', { _id: item._id })}
          >
            <View style={styles.button}>
              <Ionicons name='md-book' size={22} color='grey' />
              <Text>  Read</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <FontAwesome name='bookmark-o' size={22} color='grey' />
              <Text>  Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};