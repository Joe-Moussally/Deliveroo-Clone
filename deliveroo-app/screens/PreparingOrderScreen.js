import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        },4000)
    },[])

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require('../assets/place_order.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='w-80 h-80'
        delay={130}
      />
      
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        delay={130}
        className='text-lg my-10 mx-2 text-white font-bold text-center'
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={56} indeterminate={true} color='white'/>

    </SafeAreaView>
  )
}

export default PreparingOrderScreen