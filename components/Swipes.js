import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {RectButton} from 'react-native-gesture-handler'
import SwipeableImage from './SwipeableImage'

function Swipes({ pictures, jobs, picIndex, currentIndex, handleLike, handlePass, swipesRef}) {
    const [willLike, setWillLike] = useState(false)
    const [willPass, setWillPass] = useState(false)

    const renderLeftActions = () => {
        return (
            <RectButton style={styles.container}>
                <SwipeableImage job={jobs[currentIndex+1]} pictures={pictures} picIndex={picIndex}></SwipeableImage>
            </RectButton>
        )
    }
    const renderRightActions = () => {
        return (
            <RectButton style={styles.container}>
                <SwipeableImage job={jobs[currentIndex+1]} pictures={pictures} picIndex={picIndex} ></SwipeableImage>
            </RectButton>
        )
    }

    return (
        <Swipeable
        ref={swipesRef}
        friction={2}
        leftThreshold={40}
        rightThreshold={40}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        onSwipeableLeftOpen={() => {
            setWillLike(false)
            handleLike()
        }}
        onSwipeableRightOpen={() => {
            setWillPass(false)
            handlePass()
        }}
        onSwipeableLeftWillOpen={() => setWillLike(true)}
        onSwipeableRightWillOpen={() => setWillPass(true)}  
        >
            <SwipeableImage job={jobs[currentIndex]} pictures={pictures} picIndex={picIndex}/>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default React.forwardRef((props,ref) => <Swipes swipesRef={ref} {... props}></Swipes>)