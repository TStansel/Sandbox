import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import TopBar from './components/TopBar'
import axios from 'axios'
import student from './db/student.json'
import BottomBar from './components/BottomBar'
import Swipes from './components/Swipes'
import ProfilePage from './components/ProfilePage'
import Modal from 'react-native-modal';
import CompanyProfilePage from './components/CompanyProfilePage';
import ApplyPage from './components/ApplyPage';
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

  function handleApplicationSubmit(){
    Alert.alert('Congratulations!','Your application was submitted!', [{text: 'Close', onPress:() => handleApplicationPress()}])
    studentReturn = {
      name: student.name,
      school: student.university,
      gpa: student.gpa,
      major: student.major
    }
    axios.post('http://10.37.9.157:5000/api/', studentReturn)
    console.log(studentReturn)
  }

  function handleBackPress(){
    setProfileVisible(!isProfileVisible);
  }

  function logSubmit(){
    console.log('submit')
  }

  function handleApplicationBackPress(){
    setApplicationVisible(!isApplicationVisible);
  }

  function handleInfoBackPress(){
    setInfoVisible(!isInfoVisible);
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
      <Modal isVisible={isInfoVisible} >
        <TouchableOpacity style={styles.button} onPress={handleInfoBackPress}>
                <FontAwesome5 name="arrow-left" size={27} color="#5c5c5c"/>
        </TouchableOpacity>
        <CompanyProfilePage handleBackPress={handleInfoBackPress} job={jobs[currentJobIndex]}></CompanyProfilePage>
      </Modal>
      <Modal isVisible={isApplicationVisible} >
        <TouchableOpacity style={styles.button} onPress={handleApplicationBackPress}>
                <FontAwesome5 name="arrow-left" size={27} color="#5c5c5c"/>
        </TouchableOpacity>
        <ApplyPage handleBackPress={handleApplicationBackPress} job={jobs[currentJobIndex]}></ApplyPage>
        <TouchableHighlight onPress={handleApplicationSubmit}>
                <View style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit</Text>
                </View>
            </TouchableHighlight>
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
  },
  submitButton: {
    marginTop: 5,
    width: 385,
    height: 75,
    backgroundColor: '#64EDCC',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
    color: '#64EDCC',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
