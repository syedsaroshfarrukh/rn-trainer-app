import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import DropdownAlert from "react-native-dropdownalert";
import Loader from "./Components/Loader";
import workoutService from "../services/workoutService";
import planTemplateService from "../services/planTemplateService";

const { width, height } = Dimensions.get("window");

const SetsInfoScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  let dropDownAlertRef = useRef();

  function addNewWorkoutScreen() {
    if (props.route.params.workoutTemplateId) {
      navigation.navigate("AddNewWorkoutScreen", {
        id: props.route.params.workoutTemplateId,
      });
    }
    if (props.route.params.planTemplateId) {
      navigation.navigate("TopBarScreenWeeklyPlanTemplate", {
        id: props.route.params.planTemplateId,
      });
    }
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        set: "",
        weight: "",
        reps: "",
        rest: "",
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        console.log(props.route.params.type_id);
        console.log(props.route.params.id);
        setLoading(true);
        if (props.route.params.workoutTemplateId) {
          workoutService
            .updateExcercise({
              type_id: props.route.params.type_id,
              id: props.route.params.id,
              set: values.set,
              Weight: values.weight,
              rest: values.rest,
              reps: values.reps,
            })
            .then((res) => {
              console.log("response", res.data);
              dropDownAlertRef.alertWithType("success", "Info Saved");
              setLoading(false);
              resetForm();
              setTimeout(addNewWorkoutScreen, 800);
            })
            .catch((error) => {
              console.log(error);
              dropDownAlertRef.alertWithType("error", error.message);
              setLoading(false);
            });
        }
        if (props.route.params.planTemplateId) {
          planTemplateService
            .setInfo({
              type_id: props.route.params.type_id,
              id: props.route.params.id,
              set: values.set,
              Weight: values.weight,
              rest: values.rest,
              reps: values.reps,
            })
            .then((res) => {
              console.log("response", res.data);
              dropDownAlertRef.alertWithType("success", "Info Saved");
              setLoading(false);
              resetForm();
              setTimeout(addNewWorkoutScreen, 800);
            })
            .catch((error) => {
              console.log(error);
              dropDownAlertRef.alertWithType("error", error.message);
              setLoading(false);
            });
        }
      }}
      // validationSchema={profileValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        setFieldValue,
      }) => (
        <View style={styles.container}>
          <Loader loading={loading} />
          <View style={styles.rowOne}>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.rowOneContainer}>
                <View style={styles.colOne}>
                  <Text style={styles.TextHead}>Sets:</Text>
                </View>
                <View style={styles.colTwo}>
                  <TextInput
                    placeholder={"3"}
                    style={styles.textInput}
                    onChangeText={handleChange("set")}
                    onBlur={handleBlur("set")}
                    value={values.set}
                  />
                </View>
              </View>

              <View style={styles.rowTwoContainer}>
                <View style={styles.colOne}>
                  <Text style={styles.TextHead}>Weight:</Text>
                </View>
                <View style={styles.colTwo}>
                  <TextInput
                    placeholder={"40, 50 lbs"}
                    style={styles.textInput}
                    onChangeText={handleChange("weight")}
                    onBlur={handleBlur("weight")}
                    value={values.weight}
                  />
                </View>
              </View>
              <View style={styles.rowThreeContainer}>
                <View style={styles.colOne}>
                  <Text style={styles.TextHead}>Reps:</Text>
                </View>
                <View style={styles.colTwo}>
                  <TextInput
                    placeholder={"10,12,12"}
                    style={styles.textInput}
                    onChangeText={handleChange("reps")}
                    onBlur={handleBlur("reps")}
                    value={values.reps}
                  />
                </View>
              </View>
              <View style={styles.rowFourContainer}>
                <View style={styles.colOne}>
                  <Text style={styles.TextHead}>Rest:</Text>
                </View>
                <View style={styles.colTwo}>
                  <TextInput
                    placeholder={"30, 40 sec"}
                    style={styles.textInput}
                    onChangeText={handleChange("rest")}
                    onBlur={handleBlur("rest")}
                    value={values.rest}
                  />
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.rowTwo}>
            <TouchableOpacity
              style={styles.buttonStyleLogin}
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonTextStyleLogin}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonTextStyle}>Save</Text>
            </TouchableOpacity>
          </View>
          <DropdownAlert
            updateStatusBar={false}
            defaultContainer={{ padding: 15, paddingTop: 20 }}
            ref={(ref) => {
              if (ref) {
                dropDownAlertRef = ref;
              }
            }}
          />
        </View>
      )}
    </Formik>
  );
};

export default SetsInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: width * 0.87,
    height: width * 0.5,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
    top: "8%",
    paddingBottom: 15,
    paddingTop: 10,
  },
  secondCard: {
    width: width * 0.87,
    height: width * 0.2,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
    top: "8%",
    paddingBottom: 15,
    paddingTop: 10,
  },
  rowOne: {
    flex: 0.33,

    alignItems: "center",
    marginTop: "5%",
  },
  rowTwo: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rowThree: {
    flex: 0.033,
    left: "7%",
  },
  rowFour: {
    flex: 0.5,
    alignItems: "center",
  },
  rowOneContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "8%",
    marginRight: "8%",
    borderColor: "#696969",
    borderBottomWidth: 0.5,
  },
  rowTwoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "8%",
    marginRight: "8%",
    borderColor: "#696969",
    borderBottomWidth: 0.5,
  },

  rowThreeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "8%",
    marginRight: "8%",
    borderColor: "#696969",
    borderBottomWidth: 0.5,
  },
  rowFourContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "8%",
    marginRight: "8%",
    borderColor: "#696969",
    borderBottomWidth: 0.5,
  },
  TextHead: {
    fontSize: 16,
    fontWeight: "400",
  },
  textInput: {
    fontSize: 16,
  },
  colOne: {
    flex: 1,
  },
  colTwo: {
    flex: 1,
  },

  buttonStyleLogin: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#41b825",
    width: width * 0.4,
    height: 53,
    alignItems: "center",
    borderRadius: 4,
    justifyContent: "center",
  },
  buttonTextStyleLogin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  buttonStyle: {
    backgroundColor: "#41b825",
    borderWidth: 1.5,
    borderColor: "#41b825",
    width: width * 0.4,
    height: 53,
    alignItems: "center",
    borderRadius: 4,
    justifyContent: "center",
  },
});
