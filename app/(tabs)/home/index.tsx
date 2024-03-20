import { View } from '@/components/Themed';
import TopSellers from '@/components/Home/TopSellers';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import HotBids from '@/components/Home/HotBids';
import { Stack } from 'expo-router';
import Header from '@/components/Common/Headers/HomeHeader';

export default function TabOneScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../../assets/images/WelcomeMessage.png')}
          style={{ alignSelf: 'center', marginVertical: 10 }}
        />
        <TopSellers />
        <HotBids />
      </ScrollView>
    </View>
  );
}
