import React, { Component } from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";


import { ScreenStack } from "react-native-screens";
import MainScreen from "./sceens/MainScreen";
import HomeScreen from "./sceens/HomeScreen";
import LoginScreen from "./sceens/LoginScreen";

const Stack = createStackNavigator();
export default class App extends Component{
  render(){
    return(
      <View style={{ flex:1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Main' component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}