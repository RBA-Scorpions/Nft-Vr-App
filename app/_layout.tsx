import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Image, Pressable } from 'react-native';
import { useEffect } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { View, Text } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import '../global.css';
import { EvilIcons } from '@expo/vector-icons';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Gotham: require('../assets/fonts/GothamMedium.ttf'),
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function Header() {
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
            ? require('../assets/images/Dark.png')
            : require('../assets/images/Light.png')
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
                source={require('../assets/icons/settings/setting.png')}
              />
            ) : (
              <Image
                width={30}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                source={require('../assets/icons/settings/setting-light.png')}
              />
            )
          }
        </Pressable>
      </Link>
    </View>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#2D2E36' : '#FFF',
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name='(tabs)'
          options={{
            header: () => <Header />,
            title: '',
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
