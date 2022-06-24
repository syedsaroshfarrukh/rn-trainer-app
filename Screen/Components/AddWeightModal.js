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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import clientService from "../../services/clientService";

const { width, height } = Dimensions.get("window");

const AddWeightModal = ({
  title,
  open,
  onClose,
  clientId,
  RefreshList,
  typeId,
}) => {
  const [loading, setLoading] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  let dropDownAlertRef = useRef();

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(values, { resetForm }) => {
        setLoading(true);
        clientService
          .addNewAssessment({
            type_id: typeId,
            assessment: values.weight,
            id: clientId,
            date: moment(date).format("YYYY-MM-DD"),
          })
          .then((res) => {
            // setIsLoading(false);
            // dropDownAlertRef.alertWithType(
            //   "success",
            //   "User Registered Successfully"
            // );
            dropDownAlertRef.alertWithType("success", "Assessment Added");
            setLoading(false);
            setTimeout(onClose, 800);
            RefreshList(values.weight);
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
                    <View
                      style={{
                        borderColor: "#FFFFFF",
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                        width: "80%",
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "500",
                          marginBottom: "2%",
                          marginLeft: "3%",
                        }}
                      >
                        Date
                      </Text>
                      <TouchableOpacity onPress={showDatePicker}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "500",
                            marginBottom: "2%",
                            marginLeft: "37%",
                          }}
                        >
                          {date
                            ? ` ${moment(date).format("ll")}`
                            : "Select Date"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />

                    <View
                      style={{
                        borderColor: "#FFFFFF",
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                        width: "80%",
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "500",
                          marginBottom: "2%",
                          marginLeft: "3%",
                        }}
                      >
                        Weight
                      </Text>
                      <TextInput
                        style={styles.textInput}
                        placeholder={`Set Weight`}
                        keyboardType="numeric"
                        onChangeText={handleChange("weight")}
                        onBlur={handleBlur("weight")}
                        value={values.weight}
                      />
                    </View>
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

export default AddWeightModal;

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
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 16,
    marginBottom: "2%",
    marginLeft: "22%",
    width: "50%",
  },
  modalTextSwitch: {
    fontSize: 11,
    fontWeight: "400",
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
    width: width * 0.75,
    height: width * 0.3,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    flexDirection: "column",
    paddingBottom: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
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
