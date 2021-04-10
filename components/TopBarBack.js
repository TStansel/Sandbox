import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {FontAwesome5, FontAwesome} from '@expo/vector-icons'
import Modal from 'react-native-modal';
import ProfilePage from './ProfilePage'


export default function TopBarBack({handleBackPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={ () => handleBackPress}>
                <FontAwesome5 name="arrow-left" size={27} color="#5c5c5c"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9,
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