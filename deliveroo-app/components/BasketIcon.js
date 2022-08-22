import { View, Text, TouchableOpacity } from 'react-native'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

    if(items.length == 0) return null
    
  return (
    <View className='absolute bottom-10 z-50 w-full'>
      <TouchableOpacity
        className='bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1'
        onPress={() => navigation.navigate('Basket')}
      >
        <Text className='text-white font-extrabold text-lg py-1 px-2 bg-[#01A296] rounded'>{items.length}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>${basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon