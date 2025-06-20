import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { Linking } from 'react-native';


 


export default function  Monthly_vSalaam({ navigation }) {
    return (
      
          
          <ScrollView contentContainerstyle={styles.container}>
            
            <View style={styles.card}>
              <Text style={styles.text}>Monthly voice bundle</Text>
              <Text style={styles.text_2}>Monthly 3000 call minutes for 30 days just for 299 Afs. To activate send "A 1500" and to deactivate send "D 1500" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 1500"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 1500"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly voice bundle</Text>
              <Text style={styles.text_2}>Monthly 500 call minutes for 30 days just fo90 Afs. To activate send "A 90" and to deactivate send "D 90" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 90"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 90"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 70 Off-Net bundle</Text>
              <Text style={styles.text_2}>Monthly 70 call minutes to other operators just for 90 Afs. To activate send "A OM" and to deactivate send "D OM" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A OM"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D OM"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Unlimited On_Net calls</Text>
              <Text style={styles.text_2}>Monthly unlimited call minutes for 30 days just for 100 Afs. To activate send "A UM" and to deactivate send "D UM" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A UM"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D UM"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
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