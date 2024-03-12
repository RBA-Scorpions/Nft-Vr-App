import { View, Text } from '@/components/Themed';
import { Dimensions, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;

export default function TabOneScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View
        className='py-12 mb-12 mt-4 rounded-[25px]'
        style={{
          backgroundColor: '#0DB7B7',
          width: '90%',
          alignSelf: 'center',
        }}
      >
        <Text
          className='text-center'
          style={{
            fontSize: 20,
            fontWeight: '700',
            lineHeight: 18,
          }}
        >
          Discover, collect, and sell extraordinary NFTs
        </Text>
      </View>
    </View>
  );
}
