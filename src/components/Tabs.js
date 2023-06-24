import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import CurrentWeather from "../Screens/CurrentWeather";
import UpcomingWeather from "../Screens/UpcomingWeather";
import CIty from "../Screens/CIty";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tabs = ({ weather }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato",
        },
        headerTitleAlign: "center",
      }}
    >
      {/* <View style={styles.container}> */}
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={"Upcoming"}
        
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}>
{()=><UpcomingWeather weatherData={weather.list}/>}
      </Tab.Screen>
      <Tab.Screen
        name={"City"}
        
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {()=><CIty weatherData={weather.city}/>}
</Tab.Screen>
      {/*   
      <CurrentWeather/> */}
      {/* <UpcomingWeather/> */}
      {/* <CIty/> */}
      {/* <OurChild message={"hello"}/>
      <OurChild message={"greetings"}/>
    <OurChild message={"goodbye"}/> */}
      {/* </View> */}
    </Tab.Navigator>
  );
};

export default Tabs;
