import React from 'react';
import {
  Feather,
  FontAwesome,
  FontAwesome6,
  Foundation,
} from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Image } from 'react-native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Foundation>['name'];
  color: string;
}) {
  return <Foundation size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // Disable the header globally for all screens within this Tabs component
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#24252D' : '#FFF',
          paddingBottom: 5,
          paddingTop: 10,
          height: 65,
          borderTopLeftRadius: 33,
          borderTopRightRadius: 33,
        },

        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // ... other desired tab bar options
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Foundation size={30} color={color} name='home' />
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} color={color} name='search' />
          ),
        }}
      />
      <Tabs.Screen
        name='listNft'
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/plusIcon.png')}
              style={{
                marginBottom: 45,
                width: 65,
                height: 65,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={30} color={color} name='bell' />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Feather size={30} color={color} name='user' />
          ),
        }}
      />
    </Tabs>
  );
}
