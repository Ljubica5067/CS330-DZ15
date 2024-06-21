import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FoodSelectionScreen from './screens/FoodSelectionScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

const Stack = createStackNavigator();

const App = () => {
    return ( <
        NavigationContainer >
        <
        Stack.Navigator initialRouteName = "Home" >
        <
        Stack.Screen name = "Home"
        component = { HomeScreen }
        /> <
        Stack.Screen name = "FoodSelection"
        component = { FoodSelectionScreen }
        /> <
        Stack.Screen name = "Confirmation"
        component = { ConfirmationScreen }
        /> <
        /Stack.Navigator> <
        /NavigationContainer>
    );
};

export default App;