import React from 'react';
import { View, Text, Button } from 'react-native';

const OrderConfirmation = ({ order, onConfirm }) => {
    return ( <
        View >
        <
        Text > Your order: < /Text> {
            order.map((item, index) => ( <
                Text key = { index } > { item.name } - $ { item.price } < /Text>
            ))
        } <
        Text > Total: $ { order.reduce((sum, item) => sum + item.price, 0) } < /Text> <
        Button title = "Confirm Order"
        onPress = { onConfirm }
        /> <
        /View>
    );
};

export default OrderConfirmation;