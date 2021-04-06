import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
  Image} from 'react-native';



  export default class MyListScreen extends React.Component{
    constructor(){
        super();
        this.state={
            toDo : ''
        }
    }
      
    
      render(){
          return(
              <View >
                  <Text>Hello</Text>
                  <TouchableOpacity
              style={styles.button}>
                <Text style = {styles.txt}>Add</Text>
            </TouchableOpacity>
            <TextInput
            style={styles.loginBox}
            placeholder="Enter what u want to do"
            onChangeText={(text)=>{
              this.setState({
              toDo: text
            })}}/>
              </View>
          )
      }
  }

  const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'cyan',
     alignItems: 'center'
     
   },
   button:{
    width:80,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#323aa8",
    marginTop:35,
    marginLeft:15
   },
   loginBox:{
    width: 250,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    marginTop:30,
    marginLeft:30
  },
  txt:{
    fontSize:20,
   fontWeight:'bold',
   color : 'white'
  },
  title:{
     fontSize:65,
     fontWeight:"200",
     color:'white',
     paddingBottom:30
  },
  profileContainer:{     
    marginTop:20,
    alignItems:'center'
  }
  })



  