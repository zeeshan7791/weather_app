import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList,StatusBar, ImageBackground } from 'react-native';
import ListItems from '../components/ListItems';

// const DATA = [
//   {
//     dt_txt: '18-1-2023',
//     main: {
//       temp_max: 8.5,
//       temp_min: 7.5
//     },
//     weather: [
//       {
//         main: "Clear"
//       }
//     ]
//   },
//   {
//     dt_txt: '18-2-2023',
//     main: {
//       temp_max: 8.5,
//       temp_min: 7.5
//     },
//     weather: [
//       {
//         main: "Cloud"
//       }
//     ]
//   },
//   {
//     dt_txt: '18-3-2023',
//     main: {
//       temp_max: 8.5,
//       temp_min: 7.5
//     },
//     weather: [
//       {
//         main: "Rain"
//       }
//     ]
//   }
// ];



const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => {
    return (
      <ListItems
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    );
  };
const {container,image}=styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/clouds.jpg')} style={image}>
      {/* <Text>Upcoming Weather</Text> */}
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight||0,
    backgroundColor:'royalblue'
  },
  image:{
    flex:1
  }
});

export default UpcomingWeather;
