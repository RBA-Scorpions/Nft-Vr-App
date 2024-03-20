import { View, Text } from '@/components/Themed';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const UserHeader = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: top + 10,
      }}
    ></View>
  );
};

export default UserHeader;
