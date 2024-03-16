import { Dimensions, View, useColorScheme } from 'react-native';
import { Text } from '../Themed';
import React from 'react';
import { Image } from 'react-native';

const width = Dimensions.get('window').width;

const TopSeller = ({ Seller }: any) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        marginVertical: 20,
        padding: 35,
        borderColor: colorScheme === 'dark' ? 'transparent' : '#E3E1E3',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: colorScheme === 'dark' ? '#2A2D3A' : 'transparent',
      }}
    >
      <View
        style={{
          paddingVertical: 2,
          paddingHorizontal: 9,
          position: 'absolute',
          top: 10,
          left: 10,
          borderRadius: 20,
          backgroundColor: '#0DB7B7',
        }}
      >
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 14,
            fontWeight: '600',
          }}
        >
          {Seller.id}
        </Text>
      </View>
      <Image
        source={require('../../assets/images/Person.png')}
        width={100}
        style={{ borderRadius: 50, aspectRatio: 1, marginTop: 2 }}
      />
      <Text
        style={{
          marginTop: 5,
          textAlign: 'center',
        }}
      >
        {Seller.name}
      </Text>
      <Text
        style={{
          marginTop: 5,
          textAlign: 'center',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >
          {Seller.price}
        </Text>{' '}
        ETH
      </Text>
    </View>
  );
};

export default TopSeller;
