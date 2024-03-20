import React from 'react';
import Colors from '@/constants/Colors';
import { View, Text } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image, Pressable, useColorScheme } from 'react-native';
import { Link } from 'expo-router';

const Header = () => {
  const colorScheme = useColorScheme();
  const { top } = useSafeAreaInsets();

  return (
    <View
      className='flex flex-row justify-between items-center'
      style={{ paddingTop: top + 10 }}
    >
      <Image
        style={{ width: 35, height: 35, marginLeft: 10 }}
        source={
          colorScheme === 'dark'
            ? require('../../../assets/images/Dark.png')
            : require('../../../assets/images/Light.png')
        }
      />
      <Text style={{ fontSize: 18, fontWeight: '400', fontFamily: 'Gotham' }}>
        ENMA Galaxy
      </Text>
      <Link href='/settings' asChild>
        <Pressable>
          {({ pressed }) =>
            colorScheme === 'dark' ? (
              <Image
                width={30}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                source={require('../../../assets/icons/settings/setting.png')}
              />
            ) : (
              <Image
                width={30}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                source={require('../../../assets/icons/settings/setting-light.png')}
              />
            )
          }
        </Pressable>
      </Link>
    </View>
  );
};

export default Header;
