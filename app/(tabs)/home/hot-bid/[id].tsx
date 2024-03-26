import React from 'react';
import { View, Text } from '@/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import UserHeader from '@/components/Common/Headers/UserHeader';
import { Bids } from '@/components/Home/Bids';

const TopSeller = () => {
  const { id } = useLocalSearchParams();
  const numId = Number(id);
  const bidder = Bids.find((bid) => bid.id === numId);

  return (
    <View>
      <Stack.Screen
        options={{
          header: () => <UserHeader headerText={bidder?.name} />,
        }}
      />
      <Text>Hot Bid</Text>
    </View>
  );
};

export default TopSeller;
