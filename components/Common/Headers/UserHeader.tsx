import { View, Text } from '@/components/Themed';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import { router } from 'expo-router';

const UserHeader = ({ headerText }: any) => {
  const { top } = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const handlePress = () => {
    router.back();
  };

  return (
    <View
      style={{
        paddingTop: top + 15,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Ionicons
        name='arrow-back-outline'
        size={25}
        style={{
          paddingLeft: 15,
        }}
        onPress={handlePress}
        color={colorScheme === 'dark' ? 'white' : 'black'}
      />
      <Text
        style={{
          paddingLeft: 30,
          fontSize: 18,
        }}
      >
        {headerText}
      </Text>
    </View>
  );
};

export default UserHeader;
