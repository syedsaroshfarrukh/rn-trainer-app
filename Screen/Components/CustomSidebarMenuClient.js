// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SideBarMenuButton from "./SideBarMenuButton";
import WorkoutImage from "../../Image/workout.svg";
import NutitionImage from "../../Image/nutrition.svg";
import PlanImage from "../../Image/plan.svg";
import ExcerciseImage from "../../Image/excercise.svg";
import MealsImage from "../../Image/meal.svg";
import GroupsImage from "../../Image/group.svg";
import SettingsImage from "../../Image/setting.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const { width, height } = Dimensions.get("window");

import { Settings } from "react-native-web";
import SvgUri from "expo-svg-uri";

const CustomSidebarMenu = (props) => {
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    async function AsyncStorageDataLoad() {
      let user = await AsyncStorage.getItem("user");
      let parsed = JSON.parse(user);
      setUserDetails(parsed);
      console.log(parsed);
    }

    AsyncStorageDataLoad();
  }, []);
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={{ flexDirection: "row" }}>
          <View style={stylesSidebar.profileHeaderPicCircle}>
            <Text style={{ fontSize: 25, color: "#307ecc" }}>
              {"About React".charAt(0)}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              justifyContent: "flex-start",
              alignContent: "flex-start",
              textAlign: "flex-start",
            }}
          >
            <View>
              <Text style={stylesSidebar.profileHeaderText}>
                {userDetails.firstName} {userDetails.lastName}
              </Text>
              <Text style={stylesSidebar.profileHeaderEmailText}>
                {userDetails.email}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <SideBarMenuButton
          imageUrl={SettingsImage}
          title={"Settings"}
          description={"Change your name,password, etc"}
          route={"SettingTrainerScreen"}
          navigation={props}
        />

        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Logout",
              "Are you sure? You want to logout?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: "Confirm",
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace("Auth");
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        >
          <LinearGradient
            colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
            {...deg(140)}
            style={stylesSidebar.drawerContainerCard}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={stylesSidebar.drawerContainerCardIcon}>
                <SvgUri
                  source={require("../../Image/logout.svg")}
                  style={{
                    height: 20,
                    width: 20,
                    left: "15%",
                  }}
                />
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  flex: 5,
                  left: "25%",
                }}
              >
                <Text style={stylesSidebar.drawerTitle}>Logout</Text>
                <Text style={stylesSidebar.drawerTitleDescription}>
                  Logout from this app
                </Text>
              </View>
              <View style={stylesSidebar.drawerContainerCardIcon}>
                <SvgUri
                  source={require("../../Image/arrow.svg")}
                  style={{
                    height: 11.5,
                    width: 7.5,
                  }}
                />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FCFCFC",
    paddingTop: 40,
    color: "#FCFCFC",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#FCFCFC",
    padding: 15,
  },

  profileHeaderPicCircle: {
    width: 56,
    height: 56,
    borderRadius: 60 / 2,
    color: "black",
    backgroundColor: "grey",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  drawerContainerCardIcon: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
  },
  profileHeaderText: {
    color: "#333333",
    paddingHorizontal: 10,
    fontWeight: "400",
    fontSize: 16,
  },
  profileHeaderEmailText: {
    color: "#333333",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "400",
    fontSize: 14,
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 15,
    backgroundColor: "#ABABAB",
    marginTop: 15,
  },
  linearGradient: {
    borderRadius: 5,
  },
  drawerContainerCard: {
    top: "-8%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.65,
    height: width * 0.15,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
  },
  drawerTitle: {
    fontSize: 14,
    color: "#333333",
    fontWeight: "400",
  },
  drawerTitleDescription: {
    fontSize: 10,
    color: "#5E5E5E",
    fontWeight: "400",
  },
});
