import { View, Text } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <View className='min-h-screen'>
      <Text className='text-3xl pt-20 text-center'>Search</Text>
    </View>
  );
}
