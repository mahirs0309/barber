import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BarberAuth from '../screens/BarberAuth';
import ClientAuth from '../screens/ClientAuth';
import ClientDashboard from '../screens/ClientDashboard';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="BarberAuth" component={BarberAuth} />
                <Stack.Screen name="ClientAuth" component={ClientAuth} />
                <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;
