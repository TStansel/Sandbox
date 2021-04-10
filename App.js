import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Constants from 'expo-constants'
import TopBar from './components/TopBar'
import axios from 'axios'
import SwipeableImage from './components/SwipeableImage'
import BottomBar from './components/BottomBar'
import Swipes from './components/Swipes'
import data from './db/jobs.json'
export default function App() {

  const [jobs, setJobs] = useState(data.jobs)
  const [currentJobIndex, setJobIndex] = useState(0)
  const [pictures, setPictures] = useState(data.jobs[currentJobIndex].pictures)
  const [currentPicIndex, setPicIndex] = useState(0)
  const swipesRef = useRef(null)

  function getJson(){
    try{
      setJobs(data.jobs)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting jobs','', [{text: 'Retry', onPress: () => getJson()}])
    }
  }

  async function getCompanyPics(){
    try{
      console.log(data.jobs[0].name)
      setPictures(data.jobs[0].pictures)
      
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting pics','', [{text: 'Retry', onPress: () => getCompanyPics()}])
    }
  }

  

  useEffect(() => {
    console.log(jobs[currentJobIndex])
  }, [])

  function handleLike(){
    nextPicture()
  }

  function handlePass(){
    nextPicture()
  }

  function nextPicture(){
    const nextIndex = pictures.length - 2 == currentPicIndex ? 0 : currentPicIndex + 1
    setPicIndex(nextIndex)
  }

  function nextJob(){
    const nextIndex = jobs.length - 2 == currentJobIndex ? 0 : currentJobIndex + 1
    setCurrentJobIndex(nextIndex)
  }

  function handleCheckPress(){
    swipesRef.current.openLeft()
  }
  function handleInfoPress(){
    swipesRef.current.openRight()
  }

  function handleRightPress(){
    swipesRef.current.openLeft()
    setPicIndex(0)
  }
  function handleLeftPress(){
    swipesRef.current.openRight()
    setPicIndex(0)
  }

  function handleHomePress(){
    swipesRef.current.openLeft()
  }
  function handleProfilePress(){
    swipesRef.current.openRight()
  }

  return (
    <View style={styles.container}>
      <TopBar handleHomePress={handleHomePress} handleProfilePress={handleProfilePress}/>
      <View style={styles.swipes}>
        {pictures.length > 1 && 
          pictures.map(
            (u,i) => (
              currentPicIndex == i && (
              <Swipes 
                key={i} 
                ref={swipesRef}
                currentIndex={currentPicIndex} 
                jobs={jobs}
                pictures={pictures} 
                picIndex={currentPicIndex}
                handleLike={handleLike} 
                handlePass={handlePass}
                ></Swipes>)
          ))}
        </View>
      <BottomBar handleCheckPress={handleCheckPress} handleInfoPress={handleInfoPress} handleRightPress={handleRightPress} handleLeftPress={handleLeftPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  swipes: {
    flex:1,
    padding:10,
    paddingTop:8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation:7,
  },
});
