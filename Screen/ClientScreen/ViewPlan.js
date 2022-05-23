// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

import WorkoutTemplateCard from "../Components/WorkoutTemplateCard";

const NutritionPlan = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 0.05, marginLeft: "7%", top: "2%" }}>
        <View style={styles.topTextView}>
          <Text style={styles.topTextStyle}>Plan</Text>
        </View>
      </View>
      <View style={{ flex: 0.9 }}>
        <ScrollView>
          <WorkoutTemplateCard
            title="Sunday"
            description="Alternating Bird Dog, Alternating Step-down "
          />
          <WorkoutTemplateCard
            title="Monday"
            description="Alternating Bird Dog, Alternating Step-down "
          />
          <WorkoutTemplateCard title="Tuesday" description="No Workout" />
          <WorkoutTemplateCard title="Wednesday" description="No Workout" />
          <WorkoutTemplateCard title="Thursday" description="No Workout" />
          <WorkoutTemplateCard title="Friday" description="No Workout" />
          <WorkoutTemplateCard title="Saturday" description="No Workout" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NutritionPlan;

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {
    flex: 1,
  },
});
