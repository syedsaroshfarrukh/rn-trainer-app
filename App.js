// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import "react-native-gesture-handler";

// Import React and Component
import React from "react";

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import SplashScreen from "./Screen/SplashScreen";
import AuthScreen from "./Screen/AuthScreen";
import SignInScreen from "./Screen/SignInScreen";
import PricingAuth from "./Screen/PricingAuth";
import SignUpScreen from "./Screen/SignUpScreen";
import RegisterScreen from "./Screen/RegisterScreen";
import SettingTrainerScreen from "./Screen/SettingTrainerScreen";
import DrawerNavigationRoutes from "./Screen/DrawerNavigationRoutes";
import DrawerNavigationRoutesClient from "./Screen/DrawerNavigationRoutesClient";
import TabsBottom from "./Screen/Components/TabsBottom";
import EditProfileScreen from "./Screen/EditProfileScreen";
import ChangePasswordScreen from "./Screen/ChangePasswordScreen";
import WorkoutTemplateScreen from "./Screen/WorkoutTemplateScreen";
import NutritionPlanScreen from "./Screen/NutritionPlanScreen";
import PlanTemplatesScreen from "./Screen/PlanTemplatesScreen";
import ExcerciseListScreen from "./Screen/ExcerciseListScreen";
import CreateNewExcercise from "./Screen/CreateNewExcercise";
import NextWorkoutPlanScreens from "./Screen/ClientScreen/NextWorkoutPlanScreens";
import GroupsScreen from "./Screen/GroupsScreen";
import CreateNewMeal from "./Screen/CreateNewMeal";
import MealsListScreen from "./Screen/MealsListScreen";
import SelectGroupScreen from "./Screen/SelectGroupScreen";
import RecordExcerciseScreen from "./Screen/ClientScreen/RecordExcerciseScreen";
import HeaderLeft from "./Screen/Components/HeaderLeft";
import HeaderRight from "./Screen/Components/HeaderRight";
import HeaderIcon from "./Image/leftArrow.svg";
import DotsSvg from "./Image/VerticalDot.svg";
import SearchImage from "./Image/search.svg";
import AddPicture from "./Image/photo.svg";
import WallClock from "./Image/wall-clock.svg";
import AddNewWorkoutScreen from "./Screen/AddNewWorkoutScreen";
import LogTodayWorkout from "./Screen/ClientScreen/LogWorkoutScreen";
import AddNewWorkoutSettngsModalScreen from "./Screen/Components/SettngsModal";
import AssesmentsScreen from "./Screen/ClientScreen/AssesmentsScreen";

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator
      initialRouteName="AuthScreen"
      screenOptions={{ title: false }}
    >
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PricingAuth"
        component={PricingAuth}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="SettingTrainerScreen"
          component={SettingTrainerScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Settings"} image={HeaderIcon} />
            ),
            headerBackTitle: "Setting", //Set Header Title
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Edit Profile"} image={HeaderIcon} />
            ),
            headerBackTitle: "Edit Profile", //Set Header Title
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Change Password"} image={HeaderIcon} />
            ),
            headerBackTitle: "Change Password", //Set Header Title
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="WorkoutTemplateScreen"
          component={WorkoutTemplateScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Workout Template"} image={HeaderIcon} />
            ),
            headerRight: () => (
              <HeaderRight image={DotsSvg} margin={15} height={28} width={28} />
            ),
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="AddNewWorkoutScreen"
          component={AddNewWorkoutScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Create Template"} image={HeaderIcon} />
            ),
            headerRight: () => (
              <HeaderRight image={DotsSvg} margin={15} height={28} width={28} />
            ),
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="NutritionPlanScreen"
          component={NutritionPlanScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Nutrition Template"} image={HeaderIcon} />
            ),
            headerRight: () => (
              <HeaderRight image={DotsSvg} margin={15} height={28} width={28} />
            ),
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="PlanTemplatesScreen"
          component={PlanTemplatesScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Plan Template"} image={HeaderIcon} />
            ),
            headerRight: () => (
              <HeaderRight
                image={SearchImage}
                margin={30}
                height={24}
                width={24}
              />
            ),
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ExcerciseListScreen"
          component={ExcerciseListScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Excercises"} image={HeaderIcon} />
            ),
            headerRight: () => (
              <HeaderRight
                image={SearchImage}
                margin={30}
                height={24}
                width={24}
              />
            ),
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="LogTodayWorkout"
          component={LogTodayWorkout}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Today's Workout"} image={HeaderIcon} />
            ),
            headerRight: () => (
              <HeaderRight
                image={AddPicture}
                margin={30}
                height={24}
                width={24}
              />
            ),
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="MealsListScreen"
          component={MealsListScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Add New Meal"} image={HeaderIcon} />
            ),
            headerRight: () => (
              <HeaderRight
                image={SearchImage}
                margin={30}
                height={24}
                width={24}
              />
            ),
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="NextWorkoutPlanScreen"
          component={NextWorkoutPlanScreens}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Sunday's Workout"} image={HeaderIcon} />
            ),
            headerRight: () => (
              <HeaderRight
                image={WallClock}
                margin={30}
                height={24}
                width={24}
              />
            ),
            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="CreateNewExcercise"
          component={CreateNewExcercise}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Create Excercise"} image={HeaderIcon} />
            ),

            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="CreateNewMeal"
          component={CreateNewMeal}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"New Meal"} image={HeaderIcon} />
            ),

            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="GroupsScreen"
          component={GroupsScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Groups"} image={HeaderIcon} />
            ),

            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SelectGroupScreen"
          component={SelectGroupScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Select Groups"} image={HeaderIcon} />
            ),

            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="RecordExcerciseScreen"
          component={RecordExcerciseScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Alternating Bird"} image={HeaderIcon} />
            ),

            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="AssesmentsScreen"
          component={AssesmentsScreen}
          options={{
            title: "",
            headerLeft: () => (
              <HeaderLeft title={"Assessments"} image={HeaderIcon} />
            ),

            headerStyle: {
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5, //Set Header color
            },
            headerTintColor: "#333333", //Set Header text color
            headerTitleStyle: {
              fontWeight: "500", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigationRoutesClient"
          component={DrawerNavigationRoutesClient}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
