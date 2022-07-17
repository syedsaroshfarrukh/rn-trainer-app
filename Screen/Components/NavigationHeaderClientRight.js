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
import AsyncStorage from "@react-native-async-storage/async-storage";

const NavigationHeaderClientRight = (props) => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    async function AsyncStorageDataLoad() {
      let user = await AsyncStorage.getItem("user");
      let parsed = JSON.parse(user);
      setUserInfo(parsed);
      console.log(parsed);
    }

    AsyncStorageDataLoad();
  }, []);

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
      {/* <TouchableOpacity onPress={toggleDrawer}>
        <SvgUri
          source={require("../../Image/search.svg")}
          style={{ width: 25, height: 26, marginTop: 8 }}
        />
      </TouchableOpacity> */}
      {/* <TouchableOpacity> */}
      <Image
        source={{
          uri: `http://trainer.asds.com.pk/public/${userInfo.profileImage}`,
        }}
        style={{
          width: 40,
          height: 40,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 60 / 2,
        }}
      />
      {/* </TouchableOpacity> */}
    </View>
  );
};
export default NavigationHeaderClientRight;

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
