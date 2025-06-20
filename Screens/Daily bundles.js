import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { Linking } from 'react-native';


 


export default function  Daily({ navigation }) {
    return (
      
          
          <ScrollView contentContainerstyle={styles.container}>
            
            <View style={styles.card}>
              <Text style={styles.text}>Daily 280MB bundle</Text>
              <Text style={styles.text_2}>Daily 280 MB internet for 24 hours just for 30 Afs. To activate send "D200" and to deactivate send "UD200" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"D200"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"UD200"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Daily 1GB bundle</Text>
              <Text style={styles.text_2}>Daily 1GB internet for 24 hours just for 50 Afs. To activate send "D1" and to deactivate send "UD1" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"D1"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"UD1"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Daily 3GB bundle</Text>
              <Text style={styles.text_2}>Daily 3GB internet for 24 hours just for 90 Afs. To activate send "3GB" and to deactivate send "U3GB" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"3GB"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"U3GB"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Daily Facebook bundle</Text>
              <Text style={styles.text_2}>Daily 90MB internet only for Facebook just for 9 Afs. To activate send "DFB" and to deactivate send "UDFB" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"DFB"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"UDFB"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Daily Social bundle</Text>
              <Text style={styles.text_2}>Daily 200MB internet only for social apps like Facebook, Whatsapp and Viber just for 15 Afs. To activate send "S6" and to deactivate send "U6" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"S6"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"U6"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Yaraan social bundle</Text>
              <Text style={styles.text_2}>Daily 50MB internet for social apps and 50 free messages just for 5 Afs. To activate send "S5" and to deactivate send "US5" to 555. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"S5"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${555}&body=${"US5"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
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