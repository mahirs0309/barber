import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BookingConfirmationScreen from './screens/BookingConfirmationScreen';
import BarberArrivalScreen from './screens/BarberArrivalScreen';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
        <Stack.Screen name="BarberArrival" component={BarberArrivalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
