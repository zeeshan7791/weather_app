import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { TEST_KEY, WEATHER_API_KEY } from "@env";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItems from "./src/components/ErrorItems";
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const App = () => {
  const [loading, errorMsg, weather] = useGetWeather();
  // console.log(loading,errorMsg,weather)
  // if(weather){
  //   console.log(weather,'value in console')
  // }
  if (weather && weather.list&&!loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <ErrorItems />
        ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
// import React from 'react';
// import { StatusBar } from 'expo-status-bar';

// import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
// import { Feather } from '@expo/vector-icons';

// export default function App() {
//   const message="pakistan is beautiful"
//   return (
//     <SafeAreaView style={styles.wrapper}>
//     <View style={styles.container}>

// <Feather name="sun" size={100} color="black" />
//       {/* <Text>Current Weather</Text> */}
//       <Text style={styles.temp}>8</Text>
//       <Text style={styles.feels}>Feels like 5</Text>
//       <View style={styles.highLowWrapper}>
//       <Text style={styles.highLow}>High:8</Text>
//       <Text style={styles.highLow}> Low:6</Text>
//       </View>
//     </View>
//       <View style={styles.bodyWrapper}>
//       <Text style={styles.description}>Its Sunny</Text>
//       <Text style={styles.message}> Its perfect t-shirt weather</Text>
//       </View>

//     </SafeAreaView>
//     // <View style={{height:100,width:100,backgroundColor:'orange'}}>
//     //   <Text>{message}</Text>

//     // </View>
//     // // <View style={styles.container}>
//     // //   <Text>Open up App.js to start working on your app!</Text>
//     // //   <StatusBar style="auto" />
//     // // </View>
//   );
// }
// const styles=StyleSheet.create({

//   wrapper:{
//   flex:1,
//   backgroundColor:'pink',
//   },
//   container:{
//     flex:1,
//   justifyContent:'center',
//     alignItems:'center'
//   },
//   temp:{
//     color:'black',
//     fontSize:48
//   },
//   highLowWrapper:{
// flexDirection:'row'
//   },
//   feels:{
//     color:'black',
//     fontSize:30
//   },
//   highLow:{
//     color:"black",
//     fontSize:20
//   },
//   bodyWrapper:{
// justifyContent:'flex-end',
// alignItems:'flex-start',
// paddingLeft:25,
// marginBottom:40
//   },
//   description:{
//     fontSize:48
//   },
//   message:{
//     fontSize:30
//   }
// })
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'blue',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
