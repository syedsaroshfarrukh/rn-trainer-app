// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";
import SvgUri from "expo-svg-uri";

const NavigationDrawerHeader = (props) => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  useEffect(() => {
    //Get device Height
    setHeight(Dimensions.get("window").height);
    //Get device Width
    setWidth(Dimensions.get("window").width);
  }, []);

  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <TouchableOpacity onPress={toggleDrawer}>
          <SvgUri
            source={require("../../Image/menu.svg")}
            style={{ width: 22, height: 15, marginLeft: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default NavigationDrawerHeader;
