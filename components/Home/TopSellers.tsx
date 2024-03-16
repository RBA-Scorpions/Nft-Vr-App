import { View, Text } from '@/components/Themed';
import React from 'react';
import { FlatList, Image } from 'react-native';
import { Sellers } from './Sellers';
import TopSeller from './TopSeller';

const TopSellers = () => {
  return (
    <View style={{ marginHorizontal: 15, marginTop: 40 }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
        }}
      >
        Top Sellers
      </Text>
      <View>
        <FlatList
          horizontal={true}
          data={Sellers}
          scrollEnabled={true}
          renderItem={({ item }) => <TopSeller Seller={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

export default TopSellers;
