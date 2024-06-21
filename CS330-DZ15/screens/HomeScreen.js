import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SupplierList from '../components/SupplierList';

const suppliers = [
    { name: 'Supplier 1' },
    { name: 'Supplier 2' },
    { name: 'Supplier 3' },
];

const HomeScreen = ({ navigation }) => {
    const selectSupplier = (supplier) => {
        navigation.navigate('FoodSelection', { supplier });
    };

    return ( <
        View >
        <
        Text > Select a supplier: < /Text> <
        SupplierList suppliers = { suppliers }
        onSelect = { selectSupplier }
        /> <
        /View>
    );
};

export default HomeScreen;