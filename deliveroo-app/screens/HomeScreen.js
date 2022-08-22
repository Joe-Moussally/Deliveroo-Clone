import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { UserIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline'
import { ChevronDownIcon } from 'react-native-heroicons/solid'
import Categories from '../components/Categories';
import Featured from '../components/Featured';

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    },[])

    return (
        <SafeAreaView className='bg-white pt-3'>
                {/* Header */}
                <View className='flex-row pb-3 mt-8 items-center space-x-2 px-2'>
                    <Image
                        source={{uri:'https://links.papareact.com/wru'}}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />
                
                    <View className='flex-1'>
                        <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
                        <View className='flex-row items-center'>
                            <Text className='font-bold text-xl'>Current Location</Text>
                            <ChevronDownIcon size={20} color='#00CCBB' />
                        </View>
                    </View>

                    <UserIcon size={35} color='#00CCBB'/>
                </View>

                {/* Search */}
                <View className='flex-row items-center pb-2 mx-2 space-x-2'>
                    <View className='flex-row space-x-2 flex-1 bg-gray-200 p-2 rounded'>
                        <SearchIcon color='#00CCBB'/>
                        <TextInput
                            placeholder='Restaurants and cuisines...'
                            keyboardType='default'
                        />
                    </View>

                    <AdjustmentsIcon color='#00CCBB'/>
                </View>

                {/* Body */}
                <ScrollView
                    className='bg-gray-100'
                >

                    {/* Categories Section */}
                    <Categories />

                    {/* Featured Section */}
                    <Featured
                        id='1'
                        title='Featured'
                        description='Paid placements from our partners'
                    />

                    <Featured
                        id='2'
                        title='Featured'
                        description='Paid placements from our partners'
                    />

                    <Featured
                        id='3'
                        title='Featured'
                        description='Paid placements from our partners'
                    />

                </ScrollView>
        </SafeAreaView>
    );
}
 
export default HomeScreen;