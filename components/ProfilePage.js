import React, { Component } from 'react';
import data from './../db/student.json'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: "https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png"}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
            </View>
            <Text style={styles.name}> {data.name} </Text>
        </View>
                <Text style={styles.info}> GPA: {data.gpa} </Text>
                <Text style={styles.info}> School: {data.university} </Text>
                <Text style={styles.info}> Major: {data.major} </Text>
                <Text style={styles.info}> Degree Pursuing: {data.degree} </Text>
                <Text style={styles.info}> Graduation Year: {data.grad_year} </Text>
                <Text style={styles.info}> Relevant Work Experience:{"\n"} 1.) {data.relevant_exp[0]} {"\n"} 2.) {data.relevant_exp[1]} {"\n"} 3.) {data.relevant_exp[2]}</Text>
                <Text style={styles.info}> Volunteer Experience:{"\n"} 1.) {data.volunteer_exp[0]} {"\n"} 2.) {data.volunteer_exp[1]} {"\n"} 3.) {data.volunteer_exp[2]}</Text>
                <Text style={styles.info}> Awards:{"\n"} 1.) {data.awards[0]} {"\n"} 2.) {data.awards[1]} {"\n"} 3.) {data.awards[2]}</Text>
                <Text style={styles.info}> Available to work: {data.availbility_date} </Text>
                <Text style={styles.info}> LinkedIn Profile: {data.linked_in} </Text>

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
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
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