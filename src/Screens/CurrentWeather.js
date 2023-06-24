import React from "react";

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/waetherType";
const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  console.log(weatherData, "weatherData------");
  const{main:{temp,feels_like,temp_max,temp_min},weather}=weatherData
  const weatherCondition=weather[0]?.main
  return (
    <SafeAreaView style={[wrapper,{backgroundColor:weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        {/* <Text>Current Weather</Text> */}
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max} `}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
        {/* <View style={styles.highLowWrapper}>
        <Text style={styles.highLow}>High:8</Text>
        <Text style={styles.highLow}> Low:6</Text>
        </View> */}
        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          // messageTwo={'its perfect t shirt weather'}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </View>
    </SafeAreaView>
    // <View style={{height:100,width:100,backgroundColor:'orange'}}>
    //   <Text>{message}</Text>

    // </View>
    // // <View style={styles.container}>
    // //   <Text>Open up App.js to start working on your app!</Text>
    // //   <StatusBar style="auto" />
    // // </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: "pink",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default CurrentWeather;
