import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, navigate, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Roshan from './Screens/RoshanScreen';
import Salaam from './Screens/SalaamScreen';
import Etisalat from './Screens/EtisalatScreen';
import MTN from './Screens/MtnScreen';
import AWCC from './Screens/AwccScreen';
import RoshanService from './Screens/extra';
import Daily from './Screens/Daily bundles';
import Weekly from './Screens/Weekly';
import Monthly from './Screens/Monthly';
import Nightly from './Screens/Nightly';
import Daily_v from './Screens/Daily_v';
import Weekly_v from './Screens/Weekly_v';
import Monthly_v from './Screens/Monthly_v';
import Nighlty_v from './Screens/Nightly_v';
import Nightly_v from './Screens/Nightly_v';
import Daily_m from './Screens/Daily_m';
import Weekly_m from './Screens/Weekly_m';
import Monthly_m from './Screens/Monthly_m';
import SalaamService from './Screens/SalaamServices';
import DailySalaam from './Screens/SalaamScreens/Daily';
import WeeklySalaam from './Screens/SalaamScreens/WeeklySalaam';
import MonthlySalaam from './Screens/SalaamScreens/MonthlySalaam';
import NightlySalaam from './Screens/SalaamScreens/NightlySalaam';
import Daily_vSalaam from './Screens/SalaamScreens/Daily_vSalaam';
import Weekly_vSalaam from './Screens/SalaamScreens/Weekly_vSalaam';
import Monthly_vSalaam from './Screens/SalaamScreens/Monthly_vSalaam';
import MixedSalaam from './Screens/SalaamScreens/MixedSalaam';
import Monthly_mSalaam from './Screens/SalaamScreens/Monthly_mSalaam';



const Stack = createStackNavigator();
function HomeScreen({navigation}) {
  
  return (
    
      
    <ScrollView style={styles.container}>
      
      
      
      
      <StatusBar style="auto" />
      <Image style={styles.Image} source={require("./assets/Wali.jpg")}></Image>
      <View style={styles.over_img}></View>
      <Text style={styles.text_img}>
      Afghan{"\n"}
      SIM
      </Text>
      
      <TouchableOpacity style={styles.view2} onPress={() => navigation.navigate("Roshan")}>
        <View style={styles.view_tap}></View>
        <Image source={require("./assets/Roshan_logo.jpeg")} style={styles.view_tap_img}></Image>
        <Text style={styles.brand}>Roshan</Text>


      </TouchableOpacity>
      <TouchableOpacity style={styles.view3} onPress={() => navigation.navigate("Salaam")}>
      <View style={styles.view_tap1}></View>
      <Image source={require("./assets/Salaam_logo.png")} style={styles.view_tap_img1}></Image>
      <Text style={styles.brand}>Salaam</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.view4} onPress={() => navigation.navigate("Etisalat")}>
      <View style={styles.view_tap2}></View>
      <Image source={require("./assets/Etisalat_logo.webp")} style={styles.view_tap_img2}></Image>
      <Text style={styles.brand}>Etisalat</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.view5} onPress={() => navigation.navigate("MTN")}>
      <View style={styles.view_tap3}></View>
      <Image source={require("./assets/MTN_logo.png")} style={styles.view_tap_img3}></Image>
      <Text style={styles.brand}>Atoma</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.view6} onPress={() => navigation.navigate("AWCC")}>
      <View style={styles.view_tap4}></View>
      <Image source={require("./assets/Awcc_logo.png")} style={styles.view_tap_img4}></Image>
      <Text style={styles.brand}>AWCC</Text>

      </TouchableOpacity>
     <Text style={styles.text2}>Please register yourself</Text>
    </ScrollView>
    
  
  );
}





export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name="Roshan" component={Roshan} />
        <Stack.Screen name="Salaam" component={Salaam} />
        <Stack.Screen name="Etisalat" component={Etisalat} />
        <Stack.Screen name="MTN" component={MTN} />
        <Stack.Screen name="AWCC" component={AWCC} />
        <Stack.Screen name="RoshanService" component={RoshanService} />
        <Stack.Screen name="SalaamService" component={SalaamService} />
        <Stack.Screen name="Daily" component={Daily} />
        <Stack.Screen name="DailySalaam" component={DailySalaam} />
        <Stack.Screen name="Weekly" component={Weekly} />
        <Stack.Screen name="WeeklySalaam" component={WeeklySalaam} />
        <Stack.Screen name="Monthly" component={Monthly} />
        <Stack.Screen name="MonthlySalaam" component={MonthlySalaam} />
        <Stack.Screen name="Nightly" component={Nightly} />
        <Stack.Screen name="NightlySalaam" component={NightlySalaam} />
        <Stack.Screen name="Daily_v" component={Daily_v} />
        <Stack.Screen name="Daily_vSalaam" component={Daily_vSalaam} />
        <Stack.Screen name="Weekly_v" component={Weekly_v} />
        <Stack.Screen name="Weekly_vSalaam" component={Weekly_vSalaam} />
        <Stack.Screen name="Monthly_v" component={Monthly_v} />
        <Stack.Screen name="Monthly_vSalaam" component={Monthly_vSalaam} />
        <Stack.Screen name="Nightly_v" component={Nightly_v} />
        <Stack.Screen name="MixedSalaam" component={MixedSalaam} />
        <Stack.Screen name="Daily_m" component={Daily_m} />
        <Stack.Screen name="Weekly_m" component={Weekly_m} />
        <Stack.Screen name="Monthly_m" component={Monthly_m} />
        <Stack.Screen name="Monthly_mSalaam" component={Monthly_mSalaam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flex:1,
    
    
  },
  brand:{
    fontSize:22,
    marginLeft:'25%',
    marginTop:'-11%',
    fontFamily:"Times New Roman",
    color:'#fff',
    fontWeight:'bold',
    shadowOpacity:10.8,
    shadowColor:'#fff',
    shadowOffset:{width:0,height:0},
    shadowRadius:2
  },
  text2: {
    marginTop:80,
    marginLeft:120,
    paddingBottom:40,
  },
  text_img: {
    position:"absolute",
    marginTop:50,
    marginLeft:50,
    fontSize:28,
    fontFamily: 'Verdana-Bold',
    color:"#ff9",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    
  },
  over_img:{
    position:"absolute",
    width:"50%",
    height:180,
    backgroundColor:"#9f9",
    marginTop:20,
    marginLeft:"5%",
    borderBottomLeftRadius:0,
    borderBottomRightRadius:1000,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderTopRightRadius:10,
    opacity:0.4,
    borderBottomWidth:10,
    borderRightWidth:1,

  },

  
  Image: {
    width:"90%",
    height:300,
    borderRadius:10,
    marginTop:20,
    marginLeft:"5%",
    shadowOpacity:0.4,
    shadowOffset:{width:1,height:0},
  },



  view2: {
    width:"90%",
    height:150,
    backgroundColor:"#FF0000",
    marginTop:30,
    marginLeft:"5%",
    borderRadius:10,
    elevation: 10,
    shadowOpacity:0.4,
    shadowOffset:{width:1,height:0},
  },
  view_tap: {
    width:10,
    height:"100%",
    backgroundColor:"#fff",
    marginLeft:"9%",
    marginTop:-40,
    transform:[{rotate: '45deg'}],
  },
  view_tap_img: {
    width:55,
    height:55,
    marginTop:-100,
    marginLeft:10,
    borderRadius:50,
  },
  view3: {
    width:"90%",
    height:150,
    backgroundColor:"#00AAFF",
    marginTop:30,
    marginLeft:"5%",
    borderRadius:10,
    elevation: 10,
    shadowOpacity:0.4,
    shadowOffset:{width:1,height:0},
  },
  view_tap1: {
    width:10,
    height:"100%",
    backgroundColor:"#fff",
    marginLeft:"9%",
    marginTop:-40,
    transform:[{rotate: '45deg'}],
  },
  view_tap_img1: {
    width:55,
    height:55,
    marginTop:-100,
    marginLeft:10,
    borderRadius:50,
  },
  view4: {
    width:"90%",
    height:150,
    backgroundColor:"#82CF00",
    marginTop:30,
    marginLeft:"5%",
    borderRadius:10,
    elevation: 10,
    shadowOpacity:0.4,
    shadowOffset:{width:1,height:0},
  },
  view_tap2: {
    width:10,
    height:"100%",
    backgroundColor:"#fff",
    marginLeft:"9%",
    marginTop:-40,
    transform:[{rotate: '45deg'}],
  },
  view_tap_img2: {
    width:55,
    height:55,
    marginTop:-100,
    marginLeft:10,
    borderRadius:50,
  },
  view5: {
    width:"90%",
    height:150,
    backgroundColor:"#FFCD00",
    marginTop:30,
    marginLeft:"5%",
    borderRadius:10,
    elevation: 10,
    shadowOpacity:0.4,
    shadowOffset:{width:1,height:0},
  },
  view_tap3: {
    width:10,
    height:"100%",
    backgroundColor:"#fff",
    marginLeft:"9%",
    marginTop:-40,
    transform:[{rotate: '45deg'}],
  },
  view_tap_img3: {
    width:55,
    height:55,
    marginTop:-100,
    marginLeft:10,
    borderRadius:50,
  },
  view6: {
    width:"90%",
    height:150,
    backgroundColor:"#0084FF",
    marginTop:30,
    marginLeft:"5%",
    borderRadius:10,
    elevation: 10,
    shadowOpacity:0.4,
    shadowOffset:{width:1,height:0},
  },
  view_tap4: {
    width:10,
    height:"100%",
    backgroundColor:"#fff",
    marginLeft:"9%",
    marginTop:-40,
    transform:[{rotate: '45deg'}],
  },
  view_tap_img4: {
    width:55,
    height:55,
    marginTop:-100,
    marginLeft:10,
    borderRadius:50,
  },
  
});

