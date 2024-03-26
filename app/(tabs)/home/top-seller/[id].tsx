import React from 'react';
import { View, Text } from '@/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Sellers } from '@/components/Home/Sellers';
import UserHeader from '@/components/Common/Headers/UserHeader';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Bids } from '@/components/Home/Bids';
import HotBid from '@/components/Home/HotBid';

const TopSeller = () => {
  const { id } = useLocalSearchParams();
  const numId = Number(id);
  const seller = Sellers.find((seller) => seller.id === numId);

  const width = Dimensions.get('window').width;

  return (
    <ScrollView>
      <View className='min-h-screen'>
        <Stack.Screen
          options={{
            header: () => <UserHeader headerText={seller?.name} />,
          }}
        />
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/3f79/61a8/339e8ee11f4296f993506ced91a37b6e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3QAciElmaYB3ux3wyqqkJk6fABwhZvN034lamu3SXyYCC-vbUh03GkIV79RgYxjKgTf7QKEE51q0ly1Ax8sOxMIM9vyLwPWGdJROVKsxvCJ0idzHvDffSlcLI3EwqDKydudqNstd4c2uXcMuQAzKKWRMfsynz8YdjT8IwFJojcPX3iDzcsC63rl1bKIAUrDbsagNN~TcaTQxXQeooVwhbUF04pLzzSpjWKjTXNfvu~5FJ2O7OEc0c2NMa7YHNgFeDoJqdwYEv7nWd3fwDKEZbX~u9GOYzOoPMc30G71IZxD2XfI5JmfMcVIB~mlRw7OKRCusBjH9KiZG1e82vRpuA__',
          }}
          width={width}
          height={250}
        />

        <Image
          source={require('../../../../assets/images/Person.png')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            alignSelf: 'center',
            marginTop: -50,
          }}
        />
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 20,
            fontWeight: '600',
            lineHeight: 30,
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          Mia Ayana
        </Text>

        <View
          style={{
            marginHorizontal: 15,
            marginTop: 20,
            marginBottom: 100,
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 20,
              fontWeight: '600',
              lineHeight: 30,
            }}
          >
            Items
          </Text>
          <View
            style={{
              marginTop: 10,
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
      </View>
    </ScrollView>
  );
};

export default TopSeller;
