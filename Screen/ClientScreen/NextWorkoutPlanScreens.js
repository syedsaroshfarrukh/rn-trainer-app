// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import WorkoutCardLayoutCard from "../Components/workoutCardLayoutCard";

const NextWorkoutPlanScreens = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",

        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.cardView}>
          <ScrollView style={{ height: "100%" }}>
            <WorkoutCardLayoutCard />
            <WorkoutCardLayoutCard />
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text style={styles.buttonTextStyle}>Mark All Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyleLogin}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <Text style={styles.buttonTextStyleLogin}>Cancel Workout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NextWorkoutPlanScreens;

const styles = StyleSheet.create({
  cardView: {
    flex: 0.8,
    marginTop: "5%",
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: "center",
  },
  buttonStyleLogin: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#41B825",
    height: 53,
    alignItems: "center",
    borderRadius: 4,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyleLogin: {
    color: "#000000",

    fontSize: 20,
    fontWeight: "500",
  },
  buttonStyle: {
    backgroundColor: "#41B825",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 53,
    alignItems: "center",
    borderRadius: 4,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
  },
});
