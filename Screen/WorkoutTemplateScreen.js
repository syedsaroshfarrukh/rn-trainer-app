import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";

import WorkoutTemplateCard from "./Components/WorkoutTemplateCard";
import AddModal from "./Components/AddModal";

const WorkoutTemplateScreen = () => {
  const [open, setOpen] = useState(false);
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
        <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
          <Image
            source={require("../Image/add-workout-button.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <AddModal
        title="New Workout Template"
        placeholder="Name"
        open={open}
        onClose={() => setOpen(false)}
      />
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
