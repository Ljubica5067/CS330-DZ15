import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FoodList = ({ foods, onSelect }) => {
    return ( <
        View > {
            foods.map((food, index) => ( <
                TouchableOpacity key = { index }
                onPress = {
                    () => onSelect(food) } >
                <
                Text > { food.name } - $ { food.price } < /Text> <
                /TouchableOpacity>
            ))
        } <
        /View>
    );
};

export default FoodList;