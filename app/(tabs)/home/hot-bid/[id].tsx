import React, { useState } from 'react';
import { View, Text } from '@/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import UserHeader from '@/components/Common/Headers/UserHeader';
import { Bids } from '@/components/Home/Bids';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import Details from '@/components/Nft/Details';
import Offers from '@/components/Nft/Offers';
import History from '@/components/Nft/History';

const TopSeller = () => {
  const { id } = useLocalSearchParams();
  const numId = Number(id);
  const bidder = Bids.find((bid) => bid.id === numId);
  const width = Dimensions.get('window').width;
  const options = ['Details', 'Offers', 'History'];

  const [selectedOption, setSelectedOption] = useState<string>('Details');

  return (
    <ScrollView>
      <View
        className='min-h-screen'
        style={{
          paddingHorizontal: 15,
          paddingBottom: 100,
        }}
      >
        <Stack.Screen
          options={{
            header: () => <UserHeader headerText={bidder?.name} />,
          }}
        />
        <Image
          source={require('@/assets/images/bid.png')}
          resizeMode='contain'
          style={{
            width: width - 40,
            height: 400,
            alignSelf: 'center',
            borderRadius: 40,
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 28,
              fontWeight: '600',
              lineHeight: 42,
              width: '80%',
            }}
          >
            Abstact Smoke Red Blue
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
            }}
          >
            <Image source={require('@/assets/icons/heart/Active.png')} />
            <Text>92</Text>
          </View>
        </View>

        <Text
          style={{
            fontFamily: 'Poppins',
            marginTop: 5,
          }}
        >
          From{' '}
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
            }}
          >
            4.5 ETH
          </Text>
          <Text> {'- '}20 of 25 available</Text>
        </Text>

        <View
          style={{
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 12,
              fontWeight: '400',
            }}
          >
            Creator
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginVertical: 15,
            }}
          >
            <Image
              source={require('@/assets/images/Person.png')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <Text>Mia Ayana</Text>
          </View>
        </View>

        <View>
          <FlatList
            data={options}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: selectedOption === item ? 'bold' : '600',
                  paddingBottom: 10,
                }}
                onPress={() => setSelectedOption(item)}
              >
                {item}
              </Text>
            )}
            numColumns={3}
            contentContainerStyle={{ gap: 30 }}
            columnWrapperStyle={{ gap: 30 }}
          />

          {selectedOption === 'Details' ? (
            <Details />
          ) : selectedOption === 'Offers' ? (
            <Offers />
          ) : selectedOption === 'History' ? (
            <History />
          ) : null}
        </View>

        <View
          style={{
            marginVertical: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            gap: 10,
          }}
        >
          <Pressable
            style={{
              backgroundColor: 'rgba(13, 183, 183, 1)',
              paddingVertical: 15,
              width: '45%',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
              }}
            >
              Buy for 4.5 ETH
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: 'transparent',
              paddingVertical: 15,
              width: '45%',
              borderRadius: 10,
              borderColor: 'rgba(13, 183, 183, 1)',
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(13, 183, 183, 1)',
              }}
            >
              Make Offer
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default TopSeller;
