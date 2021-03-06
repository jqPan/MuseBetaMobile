import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

import { Context as StoryContext } from '../../providers/StoryProvider.js';
import { Context as LocationContext } from '../../providers/LocationProvider.js';

import { Filter } from '../../components/Filter.js';
import { StoryCard } from '../../components/StoryCard.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});

export const TopListScreen = ({ navigation }) => {
  const { state: { top }, fetchTopStories } = useContext(StoryContext);
  const { state: { city } } = useContext(LocationContext);
  const [refreshing, setRefreshing] = useState(false);
  const [channel, setChannel] = useState('All');

  const ref = React.useRef(null);
  useScrollToTop(ref);

  useEffect(() => {
    if (city)
      fetchTopStories(city);
  }, [city]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchTopStories(city);
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Filter navigation={navigation} channel={channel} setChannel={c => setChannel(c)} />
      <FlatList
        data={top}
        ref={ref}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
        refreshing={refreshing}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return item.channel === channel
            || channel === 'All' ?
            <StoryCard
              navigation={navigation}
              item={item}
            /> : null
        }}
      />
    </SafeAreaView>
  );
};