import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import ExcerciseCardList from "./Components/ExcerciseCardList";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import Loader from "./Components/Loader";
import excerciseService from "../services/excerciseService";
import workoutService from "../services/workoutService";
import AddExcerciseCardList from "./Components/AddExcerciseCardList";
import { set } from "react-native-reanimated";

const AddExcerciseListScreen = (props) => {
  const isFocused = useIsFocused();

  const [excercise, setExcercise] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  console.log(props);

  let id =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.id &&
    props.route.params.id;

  let addExcerciseToPlanTemplate =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.addExcerciseToPlanTemplate &&
    props.route.params.addExcerciseToPlanTemplate;

  let planTemplateSuperSetId =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.planTemplateSuperSetId &&
    props.route.params.planTemplateSuperSetId;

  let planTemplateSuperSetWorkoutId =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.planTemplateSuperSetWorkoutId &&
    props.route.params.planTemplateSuperSetWorkoutId;

  let superSetId =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.superSetId &&
    props.route.params.superSetId;

  let circuitId =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.circuitId &&
    props.route.params.circuitId;

  let superSetWorkoutId =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.superSetWorkoutId &&
    props.route.params.superSetWorkoutId;

  let circuitWorkoutId =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.circuitWorkoutId &&
    props.route.params.circuitWorkoutId;

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      excerciseService
        .getAllExcercises()
        .then((res) => {
          let array = [];
          res.data.exercise.map((item) => {
            array.push(item);
          });
          setExcercise(array);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error", error);
          setLoadinxg(false);
        });
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loader loading={loading} />
      <ScrollView style={{ flex: 0.9 }}>
        {excercise.length > 1 ? (
          excercise.map((item, key) => {
            return (
              <AddExcerciseCardList
                key={key}
                title={`${item.name}`}
                id={item.id}
                workoutTemplateId={id}
                superSetId={superSetId}
                superSetWorkoutId={superSetWorkoutId}
                circuitId={circuitId}
                circuitWorkoutId={circuitWorkoutId}
                addExcerciseToPlanTemplate={addExcerciseToPlanTemplate}
                planTemplateSuperSetWorkoutId={planTemplateSuperSetWorkoutId}
              />
            );
          })
        ) : (
          <Text></Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddExcerciseListScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#42B825",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "75%",
    borderRadius: 4,
  },
  buttonTextStyle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "600",
    marginLeft: 10,
  },
});
