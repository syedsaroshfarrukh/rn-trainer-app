import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

import React, { useState, useEffect } from "react";

import WorkoutTemplateCard from "./Components/WorkoutTemplateCard";
import AddModal from "./Components/AddModal";
import workoutService from "../services/workoutService";
import Loader from "./Components/Loader";

const WorkoutTemplateScreen = () => {
  const [open, setOpen] = useState(false);
  const [workout, setWorkout] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  useEffect(() => {
    setLoading(true);
    workoutService
      .getAllWorkoutTemplate()
      .then((res) => {
        let array = [];
        res.data.workoutTemplate.map((item) => {
          array.push(item);
        });
        setWorkout(array);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, [refrestState]);

  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={loading} />
      <View style={styles.rowOne}>
        <ScrollView>
          {workout.length >= 1 ? (
            workout.map((item, key) => {
              return (
                <WorkoutTemplateCard
                  key={key}
                  title={`${item.name}`}
                  description={"Alternating Bird Dog"}
                  id={`${item.id}`}
                />
              );
            })
          ) : (
            <Text></Text>
          )}
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
        workoutRequest={workoutService}
        RefreshList={RefreshList}
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
