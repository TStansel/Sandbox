import React from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default function SwipeableImage({job, pictures, picIndex}) {
    return (
        <View>
            
            <View style={styles.photoContainer}>
                <Text style={[styles.imageText]}>  (Swipe to see more office photos)</Text>
                <Image source={{uri: pictures[picIndex]}} style={styles.photo} />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary]}>{job.job_title}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={[styles.textSecondary]}>{job.name}</Text>
                </View>
                <View style={styles.textRow}>
                    <FontAwesome name="map-marker" size={20} color='black'></FontAwesome>
                    <Text style={[styles.textSecondary]}>{job.location}</Text>
                </View>
            </View>
        </View>
    )
}

const boxStyle = {
    position: 'absolute',
    top: '50%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 3,
    borderRadius: 10
}

const styles = StyleSheet.create({
    likeBox: {
        ... boxStyle,
        left: 40,
        borderColor: '#64EDCC'
    },
    passBox: {
        ... boxStyle,
        right: 40,
        borderColor: '#F06795'
    },
    photoContainer:{
        height: '100%',
        flexDirection: 'column'
    },
    photo: {
        
        height: '75%',
        width: '100%',
        resizeMode: 'center',
        borderRadius: 20,
    },
    textContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageText: {
        color: 'black',
        marginLeft: 10,
        fontSize: 25,
        marginBottom: 25,
    },
    textPrimary: {
        color: 'black',
        fontSize: 30,
        marginLeft: 0,
        fontWeight: 'bold',
    },
    textSecondary: {
        color: 'black',
        marginLeft: 10,
        fontSize: 25,
    },

})