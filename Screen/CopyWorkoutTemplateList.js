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

import CopyWorkoutTemplateCard from "./Components/CopyWorkoutTemplateCard";
import AddModal from "./Components/AddModal";
import workoutService from "../services/workoutService";
import Loader from "./Components/Loader";

const CopyWorkoutTemplateList = (props) => {
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
          {workout.length > 1 ? (
            workout.map((item, key) => {
              return (
                <CopyWorkoutTemplateCard
                  key={key}
                  title={`${item.name}`}
                  description={"Alternating Bird Dog"}
                  id={`${item.id}`}
                  arraySize={props.route.params.arraySize}
                  weekId={props.route.params.weekId}
                />
              );
            })
          ) : (
            <Text></Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CopyWorkoutTemplateList;

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
