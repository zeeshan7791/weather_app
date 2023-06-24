import React,{useState,useEffect} from 'react'
import * as Location from 'expo-location';
import {TEST_KEY,WEATHER_API_KEY} from '@env'
export const useGetWeather=()=>{
    const [loading,setLoading]=useState(true)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
    const fetchWeatherData=async()=>{
      try{
  
        const res=await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        const data=await res.json()
        setWeather(data)
        setLoading(false)
      }
      catch(error){
        setErrorMsg("Could not fetch weather")
      }
      finally{
        setLoading(false)
      }
    }
  console.log(TEST_KEY)
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        // setLocation(location);
        setLat(location.coords.latitude)
        setLon(location.coords.longitude)
        await fetchWeatherData()
      })();
    }, [lat,lon]);
    return [loading,errorMsg,weather]
}