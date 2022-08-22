import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { Text } from "react-native";

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    },[])

    return (
        <Text className='text-red-500'>Home Screen</Text>
    );
}
 
export default HomeScreen;