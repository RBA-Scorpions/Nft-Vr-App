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

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // Disable the header globally for all screens within this Tabs component
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#2A2D3A' : '#FFF',
          paddingBottom: 5,
          paddingTop: 15,
          height: 65,
          position: 'absolute',
          borderTopLeftRadius: 33,
          borderTopRightRadius: 33,
        },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // ... other desired tab bar options
        headerShadowVisible: true,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) =>
            colorScheme === 'dark' ? (
              focused ? (
                <Image
                  source={require('../../assets/icons/home/home-dark-1.png')}
                  width={30}
                />
              ) : (
                <Image
                  source={require('../../assets/icons/home/home-dark-0.png')}
                  width={30}
                />
              )
            ) : focused ? (
              <Image
                source={require('../../assets/icons/home/home-light-1.png')}
                width={30}
              />
            ) : (
              <Image
                source={require('../../assets/icons/home/home-light-0.png')}
                width={30}
              />
            ),
        }}
      />
      <Tabs.Screen
        name='search'
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
