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
import groupService from "../services/groupService";
import workoutService from "../services/workoutService";
import AddExcerciseCardList from "./Components/AddExcerciseCardList";
import { set } from "react-native-reanimated";

const GroupsListScreen = (props) => {
  const isFocused = useIsFocused();

  const [group, setGroup] = useState([]);

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
    setLoading(true);
    groupService
      .getAllGroups()
      .then((res) => {
        let array = [];
        res.data[1].map((item) => {
          array.push(item);
        });
        setGroup(array);

        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loader loading={loading} />
      <ScrollView style={{ flex: 0.9 }}>
        {group.length >= 1 ? (
          group.map((item, key) => {
            return (
              <AddExcerciseCardList
                key={key}
                title={`${item.name}`}
                id={item.id}
                groupId={item.id}
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

export default GroupsListScreen;

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
