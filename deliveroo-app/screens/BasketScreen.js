import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
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

        {/* Items List */}
        <ScrollView>
            {Object.entries(itemsList).map(([key,items]) => (
                <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                    <Text className='text-[#00CCBB]'>{items.length} x</Text>
                    <Image
                        source={{uri:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}}
                        className='h-12 w-12 rounded-full'
                    />
                    <Text className='flex-1'>{items[0]?.name}</Text>
                    <Text className='text-gray-600'>${items[0].price}</Text>

                    {/* Remove item */}
                    <TouchableOpacity>
                        <Text
                            className='text-[#00CCBB] text-xs'
                            onPress={() => dispatch(removeFromBasket({id:key}))}
                        >
                            Remove
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>

        <View className='bg-white mt-5 space-y-4 p-5'>
            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Subtotal</Text>   
                <Text className='text-gray-400'>${basketTotal}</Text>
            </View>

            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Delivery Fee</Text>   
                <Text className='text-gray-400'>$3</Text>
            </View>

            <View className='flex-row justify-between'>
                <Text>Order Total</Text>   
                <Text className='font-extrabold'>${basketTotal+3}</Text>
            </View>

            <TouchableOpacity className='rounded-lg bg-[#00CCBB] px-4 py-3' onPress={() => navigation.navigate('PreparingOrder')}>
                <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
            </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen