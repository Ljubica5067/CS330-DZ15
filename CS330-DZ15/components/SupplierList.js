import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SupplierList = ({ suppliers, onSelect }) => {
    return ( <
        View > {
            suppliers.map((supplier, index) => ( <
                TouchableOpacity key = { index }
                onPress = {
                    () => onSelect(supplier) } >
                <
                Text > { supplier.name } < /Text> <
                /TouchableOpacity>
            ))
        } <
        /View>
    );
};

export default SupplierList;