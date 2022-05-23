import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import WorkoutTemplateCard from "./Components/WorkoutTemplateCard";
import { TouchableOpacity } from "react-native-gesture-handler";

const WorkoutTemplateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowOne}>
        <ScrollView>
          <WorkoutTemplateCard
            title={"Workout new"}
            description={"Alternating Bird Dog"}
          />

          <WorkoutTemplateCard
            title={"Workout for Kate"}
            description={"Abdominal Vacuum"}
          />
          <WorkoutTemplateCard
            title={"Workout 2nd Client"}
            description={"No Workout"}
          />
          <WorkoutTemplateCard
            title={"Workout Thursday"}
            description={"No Workout"}
          />
          <WorkoutTemplateCard
            title={"Workout Friday"}
            description={"No Workout"}
          />
          <WorkoutTemplateCard
            title={"Workout Saturday"}
            description={"No Workout"}
          />
        </ScrollView>
      </View>
      <View style={styles.rowTwo}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../Image/add-workout-button.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutTemplateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  rowOne: {
    flex: 3,
  },
  rowTwo: {
    flex: 0.5,
  },
  image: {
    height: 74,
    width: 74,
  },
  button: {
    alignItems: "flex-end",
    right: "5%",
  },
});
