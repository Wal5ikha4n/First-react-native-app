import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';


export default function Salaam({ navigation }) {
  return (
        <View style={styles.container}>
            <ScrollView style={styles.container2} horizontal>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SalaamService")}><Text style={styles.text}>Services </Text><View style={styles.in_btn}></View><View style={styles.in_btn1}></View></TouchableOpacity>
            <TouchableOpacity style={styles.button_n} onPress={() => navigation.navigate("DailySalaam")}><Text style={styles.text}>Daily internet</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button_n} onPress={() => navigation.navigate("WeeklySalaam")}><Text style={styles.text}>Weekly internet</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button_n} onPress={() => navigation.navigate("MonthlySalaam")}><Text style={styles.text}>Monthly internet</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button_n} onPress={() => navigation.navigate("NightlySalaam")}><Text style={styles.text}>Nightly internet</Text></TouchableOpacity>
            </ScrollView>
            
            <ScrollView style={styles.container3} horizontal>
            <TouchableOpacity style={styles.button_v} onPress={() => navigation.navigate("Daily_vSalaam")}><Text style={styles.text}>Daily voice</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button_v} onPress={() => navigation.navigate("Weekly_vSalaam")}><Text style={styles.text}>Weekly voice</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button_v} onPress={() => navigation.navigate("Monthly_vSalaam")}><Text style={styles.text}>Monthly voice</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button_v} onPress={() => navigation.navigate("MixedSalaam")}><Text style={styles.text}>Nightly voice</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button_s} onPress={() => navigation.navigate("Monthly_mSalaam")}><Text style={styles.text}>Unlimited messages</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button_s} onPress={() => navigation.navigate("Weekly_m")} disabled><Text style={styles.text}>Empty</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button_s} onPress={() => navigation.navigate("Monthly_m")} disabled><Text style={styles.text}>Empty</Text></TouchableOpacity>
            </ScrollView>
            
            
        
        
        
          </View>


  );
  }
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#fff",
      alignContent:"center",
      alignItems:"center",
    },
    container2:{
      width:'90%',
      height:0,
      
    },
    container3:{
      width:'90%',
      height:0,
      
    },
    button:{
      width:100,
      height:200,
      backgroundColor:"#65B564",
      marginTop:20,
      marginLeft:10,
      paddingTop:12,
      
      borderRadius:10,
      shadowRadius:8,
      shadowOpacity:0.2,
      shadowOffset:{width:0,height:5},
    },
    button_s:{
      width:100,
      height:200,
      backgroundColor:"#E3A500",
      marginTop:20,
      marginLeft:10,
      borderRadius:10,
      alignItems:"center",
      paddingTop:12,
      
      shadowRadius:8,
      shadowOpacity:0.2,
      shadowOffset:{width:0,height:5},
    },
    button_n:{
      width:100,
      height:200,
      backgroundColor:"#7185E3",
      marginTop:20,
      marginLeft:10,
      borderRadius:10,
      alignItems:"center",
      paddingTop:12,
      
      shadowRadius:8,
      shadowOpacity:0.2,
      shadowOffset:{width:0,height:5},
    },
    button_v:{
      width:100,
      height:200,
      backgroundColor:"#E36060",
      marginTop:20,
      marginLeft:10,
      borderRadius:10,
      alignItems:"center",
      paddingTop:12,
      
      shadowRadius:8,
      shadowOpacity:0.2,
      shadowOffset:{width:0,height:5},
    },
    button_v_n:{
      width:'100%',
      height:'100%',
      marginTop:-260,
      marginLeft:0,
    },
    text:{
      fontSize:18,
      fontFamily:'Times New Roman',
      marginLeft:'0%',
      textAlign:'center',
      width:'100%',
      fontWeight:'bold'

    },
    Image:{
      height:'25%',
      width:'90%',
      borderRadius:10,
      shadowRadius:8,
      shadowOpacity:0.2,
      shadowOffset:{width:0,height:5},
    },
    /*in_btn:{
      width:'100%',
      height:30,
      backgroundColor:'#fff',
      marginTop:120,
      
      
    },
    in_btn1:{
      width:30,
      height:30,
      backgroundColor:'#fff',
      marginTop:-30,
      marginLeft:55,
      borderRadius:'50%',
    },*/
});