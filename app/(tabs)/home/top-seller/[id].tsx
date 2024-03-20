import React from 'react';
import { View, Text } from '@/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Sellers } from '@/components/Home/Sellers';
import { useColorScheme } from 'react-native';
import UserHeader from '@/components/Common/Headers/UserHeader';

const TopSeller = () => {
  const { id } = useLocalSearchParams();
  const numId = Number(id);
  const seller = Sellers.find((seller) => seller.id === numId);

  return (
    <View>
      <Stack.Screen
        options={{
          header: () => <UserHeader />,
        }}
      />
      <Text>TopSeller</Text>
    </View>
  );
};

export default TopSeller;
