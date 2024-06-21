import React from 'react';
import { View, Text } from 'react-native';
import OrderConfirmation from '../components/OrderConfirmation';

const ConfirmationScreen = ({ route, navigation }) => {
    const { order } = route.params;

    const confirmOrder = () => {
        navigation.navigate('Home');
        alert('Your order is confirmed and will arrive soon!');
    };

    return ( <
        View >
        <
        OrderConfirmation order = { order }
        onConfirm = { confirmOrder }
        /> <
        /View>
    );
};

export default ConfirmationScreen;