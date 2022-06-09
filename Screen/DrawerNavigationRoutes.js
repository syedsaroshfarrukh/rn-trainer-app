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
import HomeScreen from "./DrawerScreens/HomeScreen";
import SettingsScreen from "./DrawerScreens/SettingsScreen";
import NotificationScreen from "./DrawerScreens/Notifications";
import GlobalScreen from "./DrawerScreens/GlobalScreen";
import CustomSidebarMenu from "./Components/CustomSidebarMenu";
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";
import NavigationHeaderClientRight from "./Components/NavigationHeaderClientRight";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddClient from "./DrawerScreens/AddClient";

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
        component={HomeScreen}
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
        component={AddClient}
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
                    source={require("../Image/plus.svg")}
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
                  source={require("../Image/plus.svg")}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
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
                    source={require("../Image/notification.svg")}
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
                  source={require("../Image/notification.svg")}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="GlobalScreen"
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

const SettingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerRight: () => (
          <NavigationHeaderClientRight navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Settings", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContent={CustomSidebarMenu}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#c6cbef",
          width: width * 0.7,
        },
      }}
    >
      <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: "Home Screen" }}
        component={HomeScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
