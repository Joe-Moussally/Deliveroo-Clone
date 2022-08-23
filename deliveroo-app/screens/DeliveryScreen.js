import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { XIcon } from 'react-native-heroicons/solid'

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>

        <View className='flex-row justify-between items-center p-5'>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <XIcon color='white' size={30}/>
            </TouchableOpacity>
            <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>
        
        <View className='bg-white mx-5 my-2 rounded-md p-6 z-60 shadow-md'>
            <View className='flex-row justify-between'>
                <View>
                    <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                    <Text className='text-3xl font-bold'>45-55 Minutes</Text>
                </View>
                <Image
                    source={{uri:'https://links.papareact.com/fls'}}
                    className='h-20 w-20'
                />
            </View>

        </View>

      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen