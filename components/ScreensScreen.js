//ScreensScreen.js page
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
