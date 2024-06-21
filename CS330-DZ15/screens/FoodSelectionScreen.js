import React, { useState } from 'react';
import { View, Text } from 'react-native';
import FoodList from '../components/FoodList';

const foods = [
    { name: 'Food 1', price: 10 },
    { name: 'Food 2', price: 15 },
    { name: 'Food 3', price: 20 },
];

const FoodSelectionScreen = ({ navigation, route }) => {
    const [selectedFoods, setSelectedFoods] = useState([]);
    const { supplier } = route.params;

    const selectFood = (food) => {
        setSelectedFoods([...selectedFoods, food]);
    };

    const confirmSelection = () => {
        navigation.navigate('Confirmation', { order: selectedFoods });
    };

    return ( <
        View >
        <
        Text > Supplier: { supplier.name } < /Text> <
        Text > Select your food: < /Text> <
        FoodList foods = { foods }
        onSelect = { selectFood }
        /> <
        Button title = "Confirm Selection"
        onPress = { confirmSelection }
        /> <
        /View>
    );
};

export default FoodSelectionScreen;