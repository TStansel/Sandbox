import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default function BottomBar({handleLeftPress, handleRightPress, handleCheckPress, handleInfoPress}) {
    return (
        <View style ={styles.container}>
            <View />
            <TouchableOpacity style={styles.button} onPress={handleInfoPress}>
                <FontAwesome name="info" size={27} color="#5c5c5c"></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLeftPress}>
                <FontAwesome name="arrow-left" size={27} color="#64EDCC"></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleRightPress}>
                <FontAwesome name="arrow-right" size={27} color="#64EDCC"></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCheckPress}>
                <FontAwesome name="check" size={27} color="#64EDCC"></FontAwesome>
            </TouchableOpacity>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.46,
        elevation: 9
    },
})