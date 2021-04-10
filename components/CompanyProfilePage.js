import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class CompanyProfilePage extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: this.props.job.logo}}/>
          <View style={styles.extra}></View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
            </View>
            <View style={styles.nameView}>
                <Text style={styles.name}> {this.props.job.job_title} </Text>
            </View>
        </View>
        <View style={styles.outerTextContainerStack}>
            <View style={styles.innerTextContainerStack}>
                <Text style={styles.infoHeader}> Job Description: </Text><Text style={styles.infoList}> {this.props.job.job_description} </Text>
            </View>
        </View> 
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> Start Date: </Text><Text style={styles.info}> {this.props.job.start_date} </Text>
            </View>
        </View>
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> Schedule: </Text><Text style={styles.info}> {this.props.job.schedule} </Text>
            </View>
        </View>
        <View style={styles.outerTextContainerStack}>
            <View style={styles.innerTextContainerStack}>
                <Text style={styles.infoHeader}> Qualifications: </Text><Text style={styles.infoList}> 1.) {this.props.job.qualifications[0]} {"\n"} 2.) {this.props.job.qualifications[1]} {"\n"} 3.) {this.props.job.qualifications[2]} </Text>
            </View>
        </View>    
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> Benefits: </Text><Text style={styles.info}> {this.props.job.benefits} </Text>

            </View>
        </View>
        <View style={styles.outerTextContainer}>
            <View style={styles.innerTextContainer}>
                <Text style={styles.infoHeader}> Company Website: </Text><Text style={styles.info}> {this.props.job.website} </Text>
            </View>
        </View>

        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  nameView:{
    alignItems: 'center',
    textAlign: 'center',

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
    height:150,
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
    textAlign: 'center',
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