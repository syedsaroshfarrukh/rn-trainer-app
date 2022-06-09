// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from "react";
import { Image, View, Dimensions } from "react-native";
import SvgUri from "expo-svg-uri";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import HomeScreenClient from "./ClientScreen/HomeScreenClient";
import ViewPlan from "./ClientScreen/ViewPlan";
import ViewNutritionPlan from "./ClientScreen/ViewNutritionPlan";
import GlobalScreen from "../Screen/DrawerScreens/GlobalScreen";

import CustomSidebarMenu from "./Components/CustomSidebarMenuClient";
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";
import NavigationHeaderClientRight from "./Components/NavigationHeaderClient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");

const HomeScreenStack = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        showLabel: false,
        title: "",
        //Set Header Title
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerRight: () => (
          <NavigationHeaderClientRight navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#FFFFFF", //Set Header color
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        tabBarStyle: {
          height: height * 0.1,
          alignContent: "center",
          justifyContent: "center",
          borderTopWidth: 10,
          borderTopColor: "#FFFFFF",
        },
      }}
    >
      <Tab.Screen
        name="Home Screen"
        component={HomeScreenClient}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <View>
                <View
                  style={{
                    alignItems: "center",
                    width: width * 0.12,
                    borderTopWidth: 3,
                    borderTopColor: "#3BAF29",
                    position: "relative",
                    height: "100%",
                    marginBottom: "25%",
                  }}
                >
                  <SvgUri
                    style={{
                      top: "29%",
                      alignContent: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                    }}
                    source={require("../Image/user.svg")}
                  />
                </View>
              </View>
            ) : (
              <View>
                <SvgUri
                  style={{
                    alignContent: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                  source={require("../Image/user.svg")}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Add Client"
        component={ViewPlan}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <View>
                <View
                  style={{
                    alignItems: "center",
                    width: width * 0.12,
                    borderTopWidth: 3,
                    borderTopColor: "#3BAF29",
                    position: "relative",
                    height: "100%",
                    marginBottom: "25%",
                  }}
                >
                  <SvgUri
                    style={{
                      top: "29%",
                      alignContent: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                    }}
                    source={require("../Image/book.svg")}
                    height="28"
                    width="28"
                  />
                </View>
              </View>
            ) : (
              <View>
                <SvgUri
                  style={{
                    alignContent: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                  source={require("../Image/book.svg")}
                  height="28"
                  width="28"
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={ViewNutritionPlan}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <View>
                <View
                  style={{
                    alignItems: "center",
                    width: width * 0.12,
                    borderTopWidth: 3,
                    borderTopColor: "#3BAF29",
                    position: "relative",
                    height: "100%",
                    marginBottom: "25%",
                  }}
                >
                  <SvgUri
                    style={{
                      top: "29%",
                      alignContent: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                    }}
                    source={require("../Image/diet.svg")}
                  />
                </View>
              </View>
            ) : (
              <View>
                <SvgUri
                  style={{
                    alignContent: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                  source={require("../Image/diet.svg")}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Global"
        component={GlobalScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <View>
                <View
                  style={{
                    alignItems: "center",
                    width: width * 0.12,
                    borderTopWidth: 3,
                    borderTopColor: "#3BAF29",
                    position: "relative",
                    height: "100%",
                    marginBottom: "25%",
                  }}
                >
                  <SvgUri
                    style={{
                      top: "29%",
                      alignContent: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                    }}
                    source={require("../Image/global.svg")}
                  />
                </View>
              </View>
            ) : (
              <View>
                <SvgUri
                  style={{
                    alignContent: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                  source={require("../Image/global.svg")}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigationRoutesClient = (props) => {
  return (
    <Drawer.Navigator
      // drawerConscreenOptionstentOptions={{
      //   activeTintColor: "#cee1f2",
      //   color: "#cee1f2",
      //   itemStyle: { marginVertical: 5, color: "white" },
      //   labelStyle: {
      //     color: "#d8d8d8",
      //   },
      // }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: "Home Screen" }}
        component={HomeScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationRoutesClient;
