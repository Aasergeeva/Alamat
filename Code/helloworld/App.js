import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HouseImage from './assets/images/home.png'

//import Ionicons from 'react-native-vector-icons/Ionicons';


/*const App = () => {

  const backgroundStyle = {
    backgroundColor: '#43b02a',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>{'Ndsaklfjaslkdf'}</Text>
    </SafeAreaView>
  );
};*/
const styles = StyleSheet.create({
  container: {
    width: 180,
    backgroundColor: "white"
  },
  price: {
    color: 'black',
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 3,
    marginTop: 5,
  },
  date: {
    color: "#10C44C",
    fontWeight: "500",
    fontSize: 14,
    marginLeft: 3,
    marginTop: 1,
  },
  city: {
    color: 'black',
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 3,
    marginTop: 1,
  },
  hotel: {
    color: 'black',
    fontWeight: "300",
    fontSize: 16,
    marginLeft: 3,
    marginTop: 5,
  },
  day: {
    color: 'black',
    fontWeight: "500",
    fontSize: 16,
    marginLeft: 3,
    marginTop: 5,
  },
  button:{
    width: 141,
    height: 30,
    backgroundColor: "#005BFF",
    borderRadius: 5,
    marginLeft: 3,
    marginTop: 5,
  },
  check:{
    color: 'white',
    fontWeight: "500",
    fontSize: 16,
    alignItems: "center",
    padding: 6,
  }
});

function HomeScreen() {
  return (
    <View style={{ flex: 1}}>
      <Card/>
    </View>
  );
}

function Exit() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Войти</Text>
    </View>
  );
}

function Tours() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Туры</Text>
    </View>
  );
}

function Hotels() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Отели</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Card = () => {
  function onPress () {
    Alert.alert('ПРИВЕТ:)')
  }

  return <View style={styles.container}>

    <Image source={HouseImage} />
    <Text style={styles.price}>7 480 ₽</Text>
    <Text style={styles.date}>6 июня 2022 года</Text>
    <Text style={styles.city}>Архыз</Text>
    <Text style={styles.hotel}>Royal Отель Карачаево-Черкесская республика</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.check}>Забронировать</Text>
    </TouchableOpacity>
    <Text style={styles.day}>За одну ночь</Text>

  </View>

}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Hotels" component={Hotels} />
        <Tab.Screen name="Exit" component={Exit} />
        <Tab.Screen name="Tours" component={Tours} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

