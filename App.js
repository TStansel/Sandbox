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

export default function App() {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)
  const [isProfileVisible, setProfileVisible] = useState(false);
  async function fetchUsers(){
    try{
      const {data} = await axios.get('https://randomuser.me/api/?gender=female&results=50')
      setUsers(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting users','', [{text: 'Retry', onPress: () => fetchUsers()}])
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  function handleLike(){
    nextUser()
  }

  function handlePass(){
    nextUser()
  }

  function nextUser(){
    const nextIndex = users.length - 2 == currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  function handleCheckPress(){
    swipesRef.current.openLeft()
  }
  function handleInfoPress(){
    swipesRef.current.openRight()
  }

  function handleHomePress(){
    swipesRef.current.openLeft()
  }
  function handleProfilePress(){
    setProfileVisible(!isProfileVisible);
    console.log("profile")
  }
  function handleBackPress(){
    setProfileVisible(!isProfileVisible);
    console.log("back")
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
        {users.length > 1 && 
          users.map(
            (u,i) => (
              currentIndex == i && (
              <Swipes 
                key={i} 
                ref={swipesRef}
                currentIndex={currentIndex} 
                users={users} 
                handleLike={handleLike} 
                handlePass={handlePass}
                ></Swipes>)
          ))}
        </View>
      <BottomBar handleCheckPress={handleCheckPress} handleInfoPress={handleInfoPress}/>
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
