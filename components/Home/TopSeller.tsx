import {
  Dimensions,
  ImageBackground,
  View,
  useColorScheme,
} from 'react-native';
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
            color: '#FFF',
          }}
        >
          {Seller.id}
        </Text>
      </View>

      <View
        style={{
          marginTop: 15,
        }}
      >
        <ImageBackground
          source={require('../../assets/images/Person.png')}
          borderRadius={50}
          style={{ aspectRatio: 1, width: 100 }}
        >
          <Image
            source={require('../../assets/icons/others/iconVerified.png')}
            style={{
              position: 'absolute',
              bottom: 1,
              right: 10,
              aspectRatio: 1,
            }}
          />
        </ImageBackground>
      </View>
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
