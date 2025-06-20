import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { Linking } from 'react-native';


 


export default function  Daily_vSalaam({ navigation }) {
    return (
      
          
          <ScrollView contentContainerstyle={styles.container}>
            
            <View style={styles.card}>
              <Text style={styles.text}>Daily voice bundle (60)</Text>
              <Text style={styles.text_2}>Daily 60 call minutes for 24 hours just for 15 Afs. To activate send "A 20" and to deactivate send "D 20" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 20"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 20"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Daily voice bundle (200)</Text>
              <Text style={styles.text_2}>Daily 200 call minutes for 24 hours just for 30 Afs. To activate send "A 30" and to deactivate send "D 30" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 30"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 30"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Daily voice bundle(300)</Text>
              <Text style={styles.text_2}>Daily 300 call minutes for 24 hours just for 45 Afs. To activate send "A 50" and to deactivate send "D 50" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 50"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 50"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>15 Off-Net minutes</Text>
              <Text style={styles.text_2}>Get 15 call minutes to other operators for 24 hours just for 25 Afs. To activate send "A OD" and to deactivate send "D OD" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A OD"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D OD"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>unlimited On-Net calls</Text>
              <Text style={styles.text_2}>Unlimited call minutes for 24 hours just for 10 Afs. To activate send "A UD" and to deactivate send "D UD" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A UD"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D UD"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
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