import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { useSelector, useDispatch } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const [itemsList, setItemsList] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const groupedItems = items.reduce((results,item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
        },{})

        setItemsList(groupedItems)
    },[items])

  return (
    <SafeAreaView className='pt-9 flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
            <View>
                <Text className='text-lg font-bold text-center'>Basket</Text>
                <Text className='text-center text-gray-400'>
                    {restaurant.title}
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='absolute top-4 right-5'
            >
                <XCircleIcon color='#00CCBB' size={50}/>
            </TouchableOpacity>

        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 my-5 bg-white'>
            <Image
                source={{uri:'https://links.papareact.com/wru'}}
                className='w-7 h-7 bg-gray-300 p-4 rounded-full'
            />

            <Text className='flex-1'>Deliver in 50-75 min</Text>
            <TouchableOpacity>
                <Text className='text-[#00CCBB]'>Change</Text>
            </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen