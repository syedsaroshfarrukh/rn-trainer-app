import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import { Formik } from "formik";
import Loader from "./Loader";
import DropdownAlert from "react-native-dropdownalert";
import nutritionPlanService from "../../services/nutritionPlanService";
import workoutService from "../../services/workoutService";
import planTemplateService from "../../services/planTemplateService";
import { number } from "yup";

const { width, height } = Dimensions.get("window");

const AddModal = ({
  title,
  placeholder,
  open,
  onClose,
  workoutRequest,
  RefreshList,
  superSetId,
  circuitSetId,
  AddNumberOfSet,
}) => {
  const [loading, setLoading] = useState(false);

  let dropDownAlertRef = useRef();

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(values, { resetForm }) => {
        setLoading(true);
        if (title === "New Workout Template") {
          workoutRequest
            .addWorkoutTemplate({
              name: values.name,
            })
            .then((res) => {
              // setIsLoading(false);
              // dropDownAlertRef.alertWithType(
              //   "success",
              //   "User Registered Successfully"
              // );
              dropDownAlertRef.alertWithType(
                "success",
                "Workout Template Added"
              );
              setLoading(false);
              setTimeout(onClose, 800);
              RefreshList(values.name);
              resetForm();
              RefreshList("");
            })
            .catch((error) => {
              // setIsLoading(false); // For hiding loader
              // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
              console.log(error);
              dropDownAlertRef.alertWithType("error", "Error");
              setLoading(false);
            });
        }
        if (title === "Add New Nutrition") {
          nutritionPlanService
            .addNewNutritionPlan({
              name: values.name,
            })
            .then((res) => {
              // setIsLoading(false);
              // dropDownAlertRef.alertWithType(
              //   "success",
              //   "User Registered Successfully"
              // );
              dropDownAlertRef.alertWithType(
                "success",
                "Nutrition Template Added"
              );
              setLoading(false);
              setTimeout(onClose, 800);
              RefreshList(values.name);
              resetForm();
              RefreshList("");
            })
            .catch((error) => {
              // setIsLoading(false); // For hiding loader
              // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
              console.log(error);
              dropDownAlertRef.alertWithType("error", "Error");
              setLoading(false);
            });
        }
        if (title === "Add Superset Sets") {
          workoutService
            .addSupersetSets({
              sets: values.name,
              id: superSetId,
              note: "These are the notes for super set",
            })
            .then((res) => {
              // setIsLoading(false);
              // dropDownAlertRef.alertWithType(
              //   "success",
              //   "User Registered Successfully"
              // );
              dropDownAlertRef.alertWithType("success", "Superset Sets Added");
              setLoading(false);
              setTimeout(onClose, 800);
              RefreshList(superSetId);
              resetForm();
              RefreshList("");
            })
            .catch((error) => {
              // setIsLoading(false); // For hiding loader
              // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
              console.log(error);
              dropDownAlertRef.alertWithType("error", "Error");
              setLoading(false);
            });
        }
        if (title === "Add Circuit Sets") {
          workoutService
            .addCircuitSets({
              sets: values.name,
              id: circuitSetId,
              note: "These are the notes for super set",
            })
            .then((res) => {
              // setIsLoading(false);
              // dropDownAlertRef.alertWithType(
              //   "success",
              //   "User Registered Successfully"
              // );
              dropDownAlertRef.alertWithType("success", "Superset Sets Added");
              setLoading(false);
              setTimeout(onClose, 800);
              RefreshList(circuitSetId);
              resetForm();
              RefreshList("");
            })
            .catch((error) => {
              // setIsLoading(false); // For hiding loader
              // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
              console.log(error);
              dropDownAlertRef.alertWithType("error", "Error");
              setLoading(false);
            });
        }
        if (title === "Create New Week Plan !") {
          planTemplateService
            .addPlanTemplate({
              name: values.name,
            })
            .then((res) => {
              // setIsLoading(false);
              // dropDownAlertRef.alertWithType(
              //   "success",
              //   "User Registered Successfully"
              // );
              dropDownAlertRef.alertWithType("success", "Plan Template Added");
              setLoading(false);
              setTimeout(onClose, 800);
              RefreshList(circuitSetId);
              resetForm();
              RefreshList("");
            })
            .catch((error) => {
              // setIsLoading(false); // For hiding loader
              // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
              console.log(error);
              dropDownAlertRef.alertWithType("error", "Error");
              setLoading(false);
            });
        }
        if (AddNumberOfSet === true) {
          planTemplateService
            .addSetsToCircuitSuperset({
              sets: values.name,
              id: superSetId,
              note: "These are the notes for super set",
            })
            .then((res) => {
              // setIsLoading(false);
              // dropDownAlertRef.alertWithType(
              //   "success",
              //   "User Registered Successfully"
              // );
              dropDownAlertRef.alertWithType("success", "Sets Added");
              setLoading(false);
              setTimeout(onClose, 800);
              RefreshList(circuitSetId);
              resetForm();
              RefreshList("");
            })
            .catch((error) => {
              // setIsLoading(false); // For hiding loader
              // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
              console.log(error);
              dropDownAlertRef.alertWithType("error", "Error");
              setLoading(false);
            });
        }
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <Modal
          animationType="slide"
          transparent={true}
          visible={open}
          onRequestClose={onClose}
        >
          <Loader loading={loading} />
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalContainer}>
                <View style={styles.modalRowOne}>
                  <Text style={styles.modalText}>{title}</Text>
                </View>
                <View style={styles.modalRowTwo}>
                  <LinearGradient
                    style={styles.cardmodal}
                    colors={[
                      "rgba(220, 220, 220, 0.29)",
                      "rgba(255, 255, 255, 0)",
                    ]}
                    {...deg(140)}
                  >
                    <TextInput
                      style={styles.textInput}
                      placeholder={`${placeholder}`}
                      // keyboardType="numeric"
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                    />
                  </LinearGradient>
                </View>
                <View style={styles.modalRowFour}>
                  <TouchableOpacity
                    style={styles.buttonStyleLogin}
                    activeOpacity={0.5}
                    onPress={onClose}
                  >
                    <Text style={styles.buttonTextStyleLogin}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                      handleSubmit();
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontWeight: "600",
                        fontSize: 16,
                      }}
                    >
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <DropdownAlert
            updateStatusBar={false}
            defaultContainer={{ padding: 15, paddingTop: 45 }}
            ref={(ref) => {
              if (ref) {
                dropDownAlertRef = ref;
              }
            }}
          />
        </Modal>
      )}
    </Formik>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    height: width * 0.75,
    width: width * 0.9,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    flexDirection: "row",
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "500",
  },
  modalContainer: {
    flex: 1,
    flexDirection: "column",
  },
  modalRowOne: {
    flex: 0.5,
    justifyContent: "center",
    top: "5%",
    left: "5%",
  },
  modalRowTwo: {
    flex: 1,
  },
  modalRowThree: {
    flex: 1,
  },
  modalRowFour: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textInput: {
    top: "4%",
    justifyContent: "center",
    width: "80%",
    borderColor: "#FFFFFF",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 16,
  },
  modalTextSwitch: {
    fontSize: 11,
    fontWeight: "400",
    left: "2%",
  },
  saveButton: {
    height: width * 0.12,
    width: width * 0.3,
    backgroundColor: "#41B825",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  swithContainer: {
    marginTop: "10%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: width * 0.65,
    height: width * 0.12,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    flexDirection: "row",
    flex: 1,
  },
  cardmodal: {
    marginTop: "5%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: width * 0.75,
    height: width * 0.22,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    flexDirection: "row",
    paddingBottom: 8,
  },
  buttonStyleLogin: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#41b825",
    width: width * 0.3,
    height: 53,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonTextStyleLogin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
});
