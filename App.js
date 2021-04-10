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
      setPictures(data.jobs[currentJobIndex].pictures)
      
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting pics','', [{text: 'Retry', onPress: () => getCompanyPics()}])
    }
  }

  

  useEffect(() => {
    console.log(jobs.length)
  }, [])

  function handleLike(){
    nextPicture()
  }

  function handlePass(){
    nextPicture()
  }

  function nextPicture(){
    console.log("handle pic")
    const nextIndex = pictures.length - 1 == currentPicIndex ? 0 : currentPicIndex + 1
    setPicIndex(nextIndex)
  }

  function nextJob(){
    console.log("handle job")
    const nextIndex = jobs.length - 1 == currentJobIndex ? 0 : currentJobIndex + 1
    setJobIndex(nextIndex)
    setPictures(jobs[currentJobIndex].pictures)
  }

  function handleCheckPress(){
    swipesRef.current.openLeft()
  }
  function handleInfoPress(){
    swipesRef.current.openRight()
  }

  function handleRightPress(){
    nextJob()
    setPicIndex(0)
  }
  function handleLeftPress(){
    nextJob()
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
                currentIndex={currentJobIndex} 
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
