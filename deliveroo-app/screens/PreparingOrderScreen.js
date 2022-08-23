import { View, Text, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require('../assets/place_order.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='w-80 h-80'
      />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen