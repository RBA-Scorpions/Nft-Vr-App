import { View, Text } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabOneScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <Text className='text-3xl'>Tab One </Text>
    </View>
  );
}
