//App.js Navigation

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreensScreen from "./components/ScreensScreen";
import HelloScreen from "./components/HelloScreen";
import GoodByeScreen from "./components/GoodByeScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({ headerShown: false })}>
        <Stack.Screen name="Screens" component={ScreensScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
        <Stack.Screen name="GoodBye" component={GoodByeScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
};
