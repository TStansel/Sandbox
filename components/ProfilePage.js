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
          
          <View style={styles.header}><View style={styles.nameView}>
                <Text style={styles.name}> {data.name} </Text>
            </View></View>
          <Image style={styles.avatar} source={{uri: "https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png"}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
            </View>
            
        </View>
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> GPA: </Text><Text style={styles.info}> {data.gpa} </Text>
            </View>
        </View>
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> School: </Text><Text style={styles.info}> {data.university} </Text>
            </View>
        </View>
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> Major: </Text><Text style={styles.info}> {data.major} </Text>
            </View>
        </View>
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> Degree Pursuing: </Text><Text style={styles.info}> {data.degree} </Text>
            </View>
        </View>
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> Graduation Year: </Text><Text style={styles.info}> {data.grad_year} </Text>
            </View>
        </View> 
        <View style={styles.outerTextContainerStack}>
            <View style={styles.innerTextContainerStack}>
                <Text style={styles.infoHeader}> Relevant Work Experience: </Text><Text style={styles.infoList}> 1.) {data.relevant_exp[0]} {"\n"} 2.) {data.relevant_exp[1]} {"\n"} 3.) {data.relevant_exp[2]} </Text>
            </View>
        </View>
        <View style={styles.outerTextContainerStack}>
            <View style={styles.innerTextContainerStack}>
                <Text style={styles.infoHeader}> Volunteer Experience: </Text><Text style={styles.infoList}> 1.) {data.volunteer_exp[0]} {"\n"} 2.) {data.volunteer_exp[1]} {"\n"} 3.) {data.volunteer_exp[2]} </Text>
            </View>
        </View>   
        <View style={styles.outerTextContainerStack}>
            <View style={styles.innerTextContainerStack}>
                <Text style={styles.infoHeader}> Awards: </Text><Text style={styles.infoList}> 1.) {data.awards[0]} {"\n"} 2.) {data.awards[1]} {"\n"} 3.) {data.awards[2]} </Text>
            </View>
        </View>     
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> Available to work: </Text><Text style={styles.info}> {data.availbility_date} </Text>
            </View>
        </View>
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> LinkedIn Profile: </Text><Text style={styles.info}> {data.linked_in} </Text>
            </View>
        </View>

        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  nameView:{
    paddingTop:40,
    alignItems: 'center',
  },
  extra:{
    paddingBottom: 20,
  },
  innerTextContainer:{
      flexDirection: 'row',
      alignItems: 'center',
  },
  outerTextContainer:{
        flexDirection: 'row',
  },
  innerTextContainerStack:{
    flexDirection: 'column',
    alignItems: "flex-start",
  },
  outerTextContainerStack:{
    flexDirection: 'row',
},
  header:{
    backgroundColor: "#00BFFF",
    height:110,
    borderTopLeftRadius: 10,    
    borderTopRightRadius: 10,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingBottom: 10,
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
    marginTop:80,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#000000",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#000000",
    marginTop:10,
  },
  infoList:{
    fontSize:16,
    color: "#000000",
    marginTop:10,
    paddingLeft:10,
  },
  infoHeader:{
    fontSize:16,
    fontWeight: 'bold',
    color: "#000000",
    marginTop:10,
    paddingLeft:5,
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