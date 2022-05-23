// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";
import SvgUri from "expo-svg-uri";

const NavigationHeaderClient = (props) => {
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
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={require("../../Image/profile.png")}
          style={{ width: 40, height: 40, marginRight: 15 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleDrawer}>
        <SvgUri
          source={require("../../Image/notification.svg")}
          style={{
            width: 25,
            height: 26,
            marginTop: 8,

            marginRight: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationHeaderClient;

const stylesSidebar = StyleSheet.create({
  profileHeader: {
    flexDirection: "row",
    flex: 1,
  },
  profileHeaderPicCircle: {
    width: 40,
    height: 40,
    borderRadius: 60 / 2,
    color: "white",
    backgroundColor: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
