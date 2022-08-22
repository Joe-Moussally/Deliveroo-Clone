import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { TailwindProvider } from 'tailwindcss-react-native';
import BasketScreen from './screens/BasketScreen';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { store } from './store';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Restaurant' component={RestaurantScreen} options={{animation:'slide_from_right'}}/>
            <Stack.Screen name='Basket' component={BasketScreen}
              options={{presentation:'modal',headerShown:false,animation:'slide_from_bottom'}}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  )
}