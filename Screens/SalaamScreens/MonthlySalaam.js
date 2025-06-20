import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { Linking } from 'react-native';


 


export default function  MonthlySalaam({ navigation }) {
    return (
      
          
          <ScrollView contentContainerstyle={styles.container}>
            
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 1GB bundle</Text>
              <Text style={styles.text_2}>Monthly 1GB internet for 92 Afs. To activate send "A 1GB" and to deactivate send "D 1GB" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 1GB"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 1GB"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 3GB bundle</Text>
              <Text style={styles.text_2}>Monthy 3GB internet for 30 days just for 184 Afs. To activate send "A 3GB" and to deactivate send "D 3GB" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 3GB"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 3GB"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 4GB bundle</Text>
              <Text style={styles.text_2}>Monthy 4GB internet for 30 days just for 230 Afs. To activate send "A 4GB" and to deactivate send "D 4GB" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 4GB"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 4GB"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 5GB bundle</Text>
              <Text style={styles.text_2}>Monthy 5GB internet for 30 days just for 276 Afs. To activate send "A 5GB" and to deactivate send "D 5GB" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 5GB"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 5GB"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 10GB bundle</Text>
              <Text style={styles.text_2}>Monthy 10GB internet for 30 days just for 415 Afs. To activate send "A 10GB" and to deactivate send "D 10GB" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 10GB"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 10GB"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Monthly 30GB bundle</Text>
              <Text style={styles.text_2}>Monthy 30GB internet for 30 days just for 1200 Afs. To activate send "A 30GB" and to deactivate send "D 30GB" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 30GB"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 30GB"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>50GB bundle</Text>
              <Text style={styles.text_2}>50GB internet for 60 days just for 1499 Afs. To activate send "A 50GB" and to deactivate send "D 50GB" to 740. </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"A 50GB"}`)} style={styles.button}><Text> Activate </Text></TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${740}&body=${"D 50GB"}`)} style={styles.button_2}><Text> Deactivate </Text></TouchableOpacity>
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