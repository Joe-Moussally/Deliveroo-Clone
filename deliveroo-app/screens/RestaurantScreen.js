import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon, StarIcon, LocationMarkerIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'

const RestaurantScreen = () => {

    const navigation = useNavigation()

    const {
        params:{
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        }
    } = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    },[])

  return (
    <>
        <BasketIcon />

        <ScrollView>
        <View className='relative'>
            <Image
                source={{uri:imgUrl}}
                className='w-full h-56 bg-gray-300 p-4'
            />

            <TouchableOpacity
                className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
                onPress={() => {navigation.goBack()}}
            >
                <ArrowLeftIcon size={20} color='#00CCBB'/>
            </TouchableOpacity>
        </View>

        <View className='bg-white'>
            <View className='px-4 pt-4'>
                <Text className='text-3xl font-bold'>{title}</Text>
                <View className='flex-row space-x-2 my-1'>
                    <View className='flex-row items-center space-x-1'>
                        <StarIcon color='green' opacity={0.5} size={22}/>
                        <Text className='text-xs text-gray-500'>
                            <Text className='text-green-500'>{rating}</Text> . {genre}
                        </Text>
                    </View>

                    <View className='flex-row items-center space-x-1'>
                        <LocationMarkerIcon color='gray' opacity={0.4} size={22}/>
                        <Text className='text-xs text-gray-500'>
                            Nearby . {address}
                        </Text>
                    </View>

                </View>

                <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>

            </View>

            {/* Food Allergy */}
            <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20}/>
                <Text className='pl-2 flex-1 text-md font-bold'>
                    Have a food allergy?
                </Text>
                <ChevronRightIcon color='#00CCBB'/>
            </TouchableOpacity>

        </View>

            <View className='pb-36'>
                <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
                    Menu
                </Text>

                {/* Dishes */}
                <DishRow
                    id='1'
                    name='Burger'
                    description='This is the dish description'
                    price={17}
                    image='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                />
                
                <DishRow
                    id='2'
                    name='Pizza'
                    description='This is the dish description'
                    price={12}
                    image='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                />

                <DishRow
                    id='3'
                    name='Salad'
                    description='This is the dish description'
                    price={10}
                    image='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                />
            </View>

        </ScrollView>
    </>

  )
}

export default RestaurantScreen