import React from 'react';
import { View, Text, InputTexte, StyleSheet } from 'react-native';

const FlexDimensionsBasics = () => {
return (
    <View style={{Flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'red'}}/>
        <Text style={styles.heading}>Tela de Login</Text>
    </View>
);

};

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold' , 
        marginBottom: 20,
    },
});

export default FlexDimensionsBasics;