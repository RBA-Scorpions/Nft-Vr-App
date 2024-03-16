import React, { Component } from 'react';
import { View, Text } from '../Themed';
import { FlatList } from 'react-native';
import { Bids } from './Bids';
import HotBid from './HotBid';

export class HotBids extends Component {
  render() {
    return (
      <View
        style={{
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >
          Hot Bids
        </Text>

        {/*  List of hot bids */}
        <View
          style={{
            marginVertical: 20,
          }}
        >
          <FlatList
            data={Bids}
            scrollEnabled={false}
            renderItem={({ item }) => <HotBid Bid={item} />}
            numColumns={2}
            contentContainerStyle={{ gap: 10 }}
            columnWrapperStyle={{ gap: 10 }}
          />
        </View>
      </View>
    );
  }
}

export default HotBids;
