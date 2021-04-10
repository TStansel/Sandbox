import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default class ApplyPage extends Component {

    

  render() {
    return (
      <View style={styles.container}>
          

          <View style={styles.body}>
            <Image style={styles.img} source={{uri: this.props.job.pictures[0]}}></Image>
            <Text style={styles.prompt}> {this.props.job.question} </Text>
        </View>
        <TextInput
            style={{ 
    	    height: 100, 
            margin: 10,
            borderRadius: 10,
            textAlign: 'center',
    	    borderColor: 'gray', 
            fontSize: 18,
    	    borderWidth: 2,
    	    placeholderTextColor: 'gray',
            }}
	        placeholder="Write your response here!"
            />
            
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:175,
    borderTopLeftRadius: 10,    
    borderTopRightRadius: 10,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  img: {
    width: 320,
    height: 85,
    borderRadius: 5,
    marginBottom:10,
    alignSelf:'center',
    marginTop:1
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  prompt:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600",
    margin: 10,
    textAlign: 'center'
  },
  info:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});