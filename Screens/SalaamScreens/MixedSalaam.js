import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { Linking } from 'react-native';


 


export default function  MixedSalaam({ navigation }) {
    return (
      
          
          <ScrollView contentContainerstyle={styles.container}>
            
            <View style={styles.card}>
              <Text style={styles.text}>120 Mixed bundle</Text>
              <Text style={styles.text_2}>Weekly 120 call minutes + 120 messages + 120MB internet just for 45 Afs. To activate send "A 45" and to deactivate send "D 45" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 45"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 45"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Weekly mixed bundle</Text>
              <Text style={styles.text_2}>Weekly 200 call minutes + 40 minutes to other operators + 200 messages just for 85 Afs. To activate send "A 85" and to deactivate send "D 85" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 85"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 85"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            
            
            
            
              
              
            <Text style={styles.end}></Text>
          </ScrollView>
        
  
  
    );
    }
  

  

  
    
    
  const styles = StyleSheet.create({
      container: {
        backgroundColor: "#000",
        alignContent:"center",
        alignItems:"center",
      },
      card: {
        backgroundColor:'#17374F',

        width:'90%',
        height: 220,
        borderRadius: 10,
        alignItems:'center',
        marginLeft:'5%',
        marginTop:'2%',
        shadowOpacity:0.8,
        shadowOffset:{height:1,widht:0},
        shadowRadius:4,
      },
      text: {
        fontSize: 20,
        backgroundColor:'#409BDE',
        width: '100%',
        height:'20%',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        position:'absolute',
        color:'#fff',
        paddingLeft:20,
        paddingTop:10,
      },
      text_2:{
        position:'absolute',
        marginTop:'15%',
        fontSize:17,
        color:'#fff',
        width:'90%',
      },
      button: {
        backgroundColor: '#5AC94D',
        width:'35%',
        height:'20%',
        marginTop:'45%',
        marginLeft:'-50%',
        borderRadius:10,
        alignItems:'center',
        paddingTop:13,
      },
      button_2: {
        backgroundColor: '#C95252',
        width:'35%',
        height:'20%',
        marginTop:'-13%',
        marginLeft:'50%',
        borderRadius:10,
        alignItems:'center',
        paddingTop:13,
      },
      end:{
        marginTop:10,
      }
  });