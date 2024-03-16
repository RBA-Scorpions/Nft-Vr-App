import React from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  View,
  useColorScheme,
  Platform,
  Dimensions,
} from 'react-native';
import { Text } from '../Themed';

const width = Dimensions.get('window').width;

const ProductListItem = ({ Bid }: any) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colorScheme === 'dark' ? '#2A2D3A' : '#FFF',
          shadowColor: colorScheme !== 'dark' ? '#000' : undefined,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: colorScheme !== 'dark' ? 0.25 : 0,
          shadowRadius: 4,
          elevation: colorScheme !== 'dark' ? 2 : 0,
        },
      ]}
    >
      <Pressable>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../../assets/images/bid.png')}
        />
        <Text style={styles.title}>{Bid.name}</Text>
        <Text style={styles.price}>{Bid.price} ETH</Text>
      </Pressable>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    minHeight: 300,
    padding: 12,
    borderRadius: 10,
    width: '48.5%',
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  image: {
    width: '100%',
    minHeight: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 5,
    fontFamily: 'Poppins',
  },
  price: {
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
});
