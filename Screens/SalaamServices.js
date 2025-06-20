import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking, Alert } from 'react-native';



export default function SalaamService({ navigation }) {
    return (
        
          <View style={styles.container}>
            
              
              <Image style={styles.image} source={require("../assets/Salaam.jpg")}></Image>
              <TouchableOpacity onPress={()=>{Linking.openURL('tel:*888#');}} style={styles.icons}>
                <Icon name="bank" size={33} color="#DE9803" />
                <Text style={styles.icones1}>My Balance</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>{Linking.openURL('tel:*777#');}} style={styles.icons1}>
                <Icon name="plus-circle" size={33} color="#0092FF" />
                <Text style={styles.icones2}>Add Credit</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>{Linking.openURL('tel:*742#');}} style={styles.icons2}>
                <Icon name="money" size={33} color="#FF6600" />
                <Text style={styles.icones3}>Loan</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=> {Linking.openURL('tel:*741#')}} style={styles.icons3}>
                <Icon name="send-o" size={33} color="#0E9100" />
                <Text style={styles.icones4}>Send Credit</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=> {Linking.openURL(`sms:${740}&body=${"DATA"}`)}} style={styles.icons4}>
                <Icon name="signal" size={33} color="#408F00" />
                <Text style={styles.icones5}>3G Activate</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=> {Linking.openURL('tel:*500#')}} style={styles.icons5} disabled>
                <Icon name="send" size={33} color="#FF6C00" />
                <Text style={styles.icones6}>Internet Transfer</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=> {Linking.openURL('tel:*200#')}} style={styles.icons6} disabled>
                <Icon name="database" size={33} color="#D10000" />
                <Text style={styles.icones7}>Data Loan</Text>
              </TouchableOpacity>
              
              

          </View>
  
  
    );
    }
    
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        flex:1,
        alignContent:"center",
        alignItems:"center",
        
      },
      View:{
  
      },
      Text:{
  
      },
      icons:{
        marginRight:240,
        marginTop:60,
        height:90,
        width:90,
        backgroundColor:"#E6E4FF",
        borderRadius:50,
        alignItems:"center",
        paddingTop: 10,
        shadowOpacity:0.5,
        shadowOffset:{height:0,width:0},
        shadowRadius:5,
      },
      icons1:{
        marginRight:0,
        marginTop:-90,
        height:90,
        width:90,
        backgroundColor:"#E6E4FF",
        borderRadius:50,
        alignItems:"center",
        paddingTop: 10,
        shadowOpacity:0.5,
        shadowOffset:{height:0,width:0},
        shadowRadius:5,
        
      },
      icons2:{
        marginLeft:240,
        marginTop:-90,
        height:90,
        width:90,
        backgroundColor:"#E6E4FF",
        borderRadius:50,
        alignItems:"center",
        paddingTop: 10,
        shadowOpacity:0.5,
        shadowOffset:{height:0,width:0},
        shadowRadius:5,
      },
      icons3:{
        marginRight:240,
        marginTop:50,
        height:90,
        width:90,
        backgroundColor:"#E6E4FF",
        borderRadius:50,
        alignItems:"center",
        paddingTop: 10,
        shadowOpacity:0.5,
        shadowOffset:{height:0,width:0},
        shadowRadius:5,
      },
      icons4:{
        marginRight:0,
        marginTop:-90,
        height:90,
        width:90,
        backgroundColor:"#E6E4FF",
        borderRadius:50,
        alignItems:"center",
        paddingTop: 10,
        shadowOpacity:0.5,
        shadowOffset:{height:0,width:0},
        shadowRadius:5,
      },
      icons5:{
        marginLeft:240,
        marginTop:-90,
        height:90,
        width:90,
        backgroundColor:"#E6E4FF",
        borderRadius:50,
        alignItems:"center",
        paddingTop: 10,
        shadowOpacity:0.5,
        shadowOffset:{height:0,width:0},
        shadowRadius:5,
      },
      icons6:{
        marginLeft:0,
        marginTop:50,
        height:90,
        width:90,
        backgroundColor:"#E6E4FF",
        borderRadius:50,
        alignItems:"center",
        paddingTop: 10,
        shadowOpacity:0.5,
        shadowOffset:{height:0,width:0},
        shadowRadius:5,
      },
      icones1:{
        marginTop:10,

      },
      icones2:{
        marginTop:10,

      },
      icones3:{
        marginTop:10,

      },
      icones4:{
        marginTop:10,

      },
      icones5:{
        marginTop:10,

      },
      icones6:{
        marginTop:5,
        marginLeft:15,

      },
      icones7:{
        marginTop:10,
        

      },
      image:{
        width:'100%',
        height:'30%',
        marginTop:20,
      },
  });