import React from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import workoutService from "../../services/workoutService";
import planTemplateService from "../../services/planTemplateService";

const { width, height } = Dimensions.get("window");

function AddExcerciseCardList({
  title,
  id,
  workoutTemplateId,
  superSetId,
  superSetWorkoutId,
  circuitId,
  circuitWorkoutId,
  addExcerciseToPlanTemplate,
  planTemplateSuperSetWorkoutId,
  groupId,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("----------workoutTemplateId", circuitWorkoutId);
        console.log("----------id", id);
        if (workoutTemplateId) {
          workoutService
            .addExcerciseToWorkout({
              workout_id: workoutTemplateId,
              exercise_id: id,
            })
            .then((res) => {
              navigation.navigate("AddNewWorkoutScreen", {
                id: workoutTemplateId,
              });
            })
            .catch((error) => {
              console.log("Error", error);
            });
        }
        if (superSetWorkoutId) {
          console.log("------superset", superSetId);
          console.log("------superset", superSetWorkoutId);
          workoutService
            .addExcerciseToSuperset({
              id: superSetId,
              exercise_id: id,
            })
            .then((res) => {
              navigation.navigate("AddNewWorkoutScreen", {
                id: superSetWorkoutId,
              });
            })
            .catch((error) => {
              console.log("Error", error);
            });
        }
        if (circuitWorkoutId) {
          console.log("------circuit", circuitId);
          console.log("------circuitWorkout", circuitWorkoutId);
          workoutService
            .addExcerciseToCircuit({
              id: circuitId,
              exercise_id: id,
            })
            .then((res) => {
              navigation.navigate("AddNewWorkoutScreen", {
                id: circuitWorkoutId,
              });
            })
            .catch((error) => {
              console.log("Error", error);
            });
        }
        if (addExcerciseToPlanTemplate) {
          console.log("------circuit", id);
          console.log("------circuitWorkout", addExcerciseToPlanTemplate);
          planTemplateService
            .addExcerciseToPlanTemplate({
              week_id: addExcerciseToPlanTemplate,
              exercise_id: id,
            })
            .then((res) => {
              navigation.navigate("TopBarScreenWeeklyPlanTemplate", {
                id: addExcerciseToPlanTemplate,
              });
            })
            .catch((error) => {
              console.log("Error", error);
            });
        }
        if (planTemplateSuperSetWorkoutId) {
          planTemplateService
            .addExcerciseToCircuitSuperset({
              id: planTemplateSuperSetWorkoutId,
              exercise_id: id,
            })
            .then((res) => {
              navigation.navigate("TopBarScreenWeeklyPlanTemplate", {
                id: planTemplateSuperSetWorkoutId,
              });
            })
            .catch((error) => {
              console.log("Error", error);
            });
        }
        if (groupId) {
          console.log(title);
          navigation.navigate("DrawerNavigationRoutes", {
            id: groupId,
            title: title,
          });
        }
      }}
    >
      <LinearGradient
        colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
        {...deg(140)}
        style={stylesSidebar.drawerContainerCard}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              left: "40%",
            }}
          >
            {title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default AddExcerciseCardList;

const stylesSidebar = StyleSheet.create({
  drawerContainerCardIcon: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
  },

  linearGradient: {
    borderRadius: 5,
  },
  drawerContainerCard: {
    marginTop: "5%",
    justifyContent: "flex-start",
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.85,
    height: width * 0.12,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
  },
  drawerTitle: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },
  drawerTitleDescription: {
    marginTop: "2%",
    fontSize: 12,
    color: "#5E5E5E",
    fontWeight: "400",
  },
});
