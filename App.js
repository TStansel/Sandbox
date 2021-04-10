import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Alert, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import TopBar from './components/TopBar'
import axios from 'axios'
import SwipeableImage from './components/SwipeableImage'
import BottomBar from './components/BottomBar'
import Swipes from './components/Swipes'
import ProfilePage from './components/ProfilePage'
import Modal from 'react-native-modal';
import DisplayProfile from './components/ProfilePage';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons'
import data from './db/jobs.json'
export default function App() {

  const [jobs, setJobs] = useState(data.jobs)
  const [currentJobIndex, setJobIndex] = useState(0)
  const [pictures, setPictures] = useState(data.jobs[currentJobIndex].pictures)
  const [currentPicIndex, setPicIndex] = useState(0)
  const swipesRef = useRef(null)
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [isApplicationVisible, setApplicationVisible] = useState(false);
 
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
  }, [])

  function handleLike(){
    nextPicture()
    console.log("like")
  }

  function handlePass(){
    nextPicture()
  }

  function nextPicture(){
    const nextIndex = pictures.length - 1 == currentPicIndex ? 0 : currentPicIndex + 1
    setPicIndex(nextIndex)
  }

  function backPicture(){
    const nextIndex = 0 == currentPicIndex ? pictures.length - 1 : currentPicIndex - 1
    setPicIndex(nextIndex)
  }

  function nextJob(){
    const nextIndex = jobs.length - 1 == currentJobIndex ? 0 : currentJobIndex + 1
    setJobIndex(nextIndex)
    setPictures(jobs[nextIndex].pictures)
  }

  function backJob(){
    const nextIndex = 0 == currentJobIndex ? jobs.length - 1 : currentJobIndex - 1
    setJobIndex(nextIndex)
    setPictures(jobs[nextIndex].pictures)
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
    backJob()
    setPicIndex(0)
  }

  function handleHomePress(){
    swipesRef.current.openLeft()
  }

  function handleProfilePress(){
    setProfileVisible(!isProfileVisible);
  }

  function handleInfoPress(){
    setInfoVisible(!isInfoVisible);
  }

  function handleApplicationPress(){
    setApplicationVisible(!isApplicationVisible);
  }

  function handleBackPress(){
    setProfileVisible(!isProfileVisible);
  }

  return (
    <View style={styles.container}>
      <TopBar handleHomePress={handleHomePress} handleProfilePress={handleProfilePress}/>
      <Modal isVisible={isProfileVisible} >
        <TouchableOpacity style={styles.button} onPress={handleBackPress}>
                <FontAwesome5 name="arrow-left" size={27} color="#5c5c5c"/>
        </TouchableOpacity>
        <ProfilePage handleBackPress={handleBackPress}></ProfilePage>
        </Modal>
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
      <BottomBar handleCheckPress={handleApplicationPress} handleInfoPress={handleInfoPress} handleRightPress={handleRightPress} handleLeftPress={handleLeftPress}/>
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
  }
});
