# 🚀 Welcome to the React Native Navigation-Screen Method! 

Hey folks! 👋 My name is Rodrigo, and I'm here to help you with your RN projects. 

In case you didn’t  noticed, React Native doesn't have a straightforward way to navigate to specific screens without deep linking. 

But don't worry, I've got a solution for you! 🌐 

When running your app in a web environment, you often need to include a slash '/' and then the page name after 'localhost:/***' to access the desired screens. 

But I've come up with a method to make navigation a breeze, introducing the "navigation-screen" or what I like to call 'Screens screen'! 

I hope you find it helpful and enjoyable. 

I'll guide you through this method step by step.



Step 1️⃣ - Set up your RN project


Start by creating your RN project using Expo CLI:

`npx create-expo-app NavigationScreen`


Then, install the necessary navigation packages:

`npm install @react-navigation/native`

`npm install @react-navigation/native-stack`



Step 2️⃣ - Create Basic Screens
Within a folder named 'components,' create at least two basic static pages. Here's some simple code for them:



//HelloScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HelloScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: '#000',
    marginTop: 50,
  },
});

export default HelloScreen;



//GoodByeScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoodByeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Goodbye</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: '#000',
    marginTop: 50,
  },
});

export default GoodByeScreen;



Step 3️⃣ - Code Your ScreensScreen
Now, you can start coding your ScreensScreen. Here's an example based on the provided code above. Please note that it will not work until you have App.js working as well.

//ScreensScreen.js
import React from "react";
import { Button, View, Text } from "react-native";

export default function ScreensScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screens Screen</Text>
      <Button
        title="Go to Hello"
        onPress={() => navigation.navigate("Hello")}
      />
      <Button
        title="Go to GoodBye"
        onPress={() => navigation.navigate("GoodBye")}
      />
      {/* 
      //For other page
      <Button
        title="(put the page title here)"
        onPress={() => navigation.navigate("(name of the page you defined and app js wich you´re navigating to)")}
      /> 
      */}
    </View>
  );
}



Step 4️⃣ - Create App.js

Lastly, create the App.js for navigation:

//App.js
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



That's it! After completing these steps, you can run your project using the command:

`npx expo start`


Enjoy using the Navigation-Screen by LFtech6! 

Stay tuned for a YouTube video coming soon. 🎥

