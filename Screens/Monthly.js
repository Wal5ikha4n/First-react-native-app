import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { Linking } from 'react-native';


 


export default function  Monthly({ navigation }) {
    return (
      
          
          <ScrollView contentContainerstyle={styles.container}>
            
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 1GB bundle</Text>
              <Text style={styles.text_2}>Monthly 1GB internet for 110 Afs. To activate send "1GB" and to deactivate send "U1GB" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"1GB"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"U1GB"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 2GB bundle</Text>
              <Text style={styles.text_2}>Monthy 2GB internet for 30 days just for 220 Afs. To activate send "M1" and to deactivate send "UM1" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"M1"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"UM1"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 3.2GB bundle</Text>
              <Text style={styles.text_2}>Monthly 3.2GB internet for 30 days just for 330 Afs. To activate send "M2" and to deactivate send "UM2" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"M2"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"UM2"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 4.5GB bundle</Text>
              <Text style={styles.text_2}>Monthly 4.5GB internet for 30 days only for 450 Afs. To activate send "DM3" and to deactivate send "UM3" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"DM3"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"UM3"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 6GB bundle</Text>
              <Text style={styles.text_2}>Monthly 6GB internet for 30 days only for 550 Afs. To activate send "M5" and to deactivate send "UM5" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"M5"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"UM5"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 10.5GB bundle</Text>
              <Text style={styles.text_2}>Monthly 10.5GB internet for 30 days just for 600 Afs. To activate send "R100" and to deactivate send "DR10" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"R100"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"DR10"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 20GB bundle</Text>
              <Text style={styles.text_2}>Monthly 20GB internet for 30 days just for 999 Afs. To activate send "R20" and to deactivate send "DR20" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"R20"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"DR20"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly social bundle</Text>
              <Text style={styles.text_2}>Monthly 850MB internet for social apps just for 90 Afs. To activate send "S100" and to deactivate send "U100" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"S100"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"U100"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
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
        backgroundColor:'#003633',
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
        backgroundColor:'#4A51C2',
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