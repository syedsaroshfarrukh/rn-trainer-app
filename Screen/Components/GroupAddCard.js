import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import { useNavigation } from "@react-navigation/native";
import Loader from "../Components/Loader";
import DropdownAlert from "react-native-dropdownalert";
import { Formik } from "formik";
import groupService from "../../services/groupService";

const { width, height } = Dimensions.get("window");

const GroupAddCard = ({
  modalVisible,
  onClose,
  RefreshList,
  groupId,
  groupName,
}) => {
  const [loading, setLoading] = useState(false);

  console.log(groupName);

  let dropDownAlertRef = useRef();
  return (
    <Formik
      initialValues={{
        name: groupName ? `${groupName}` : "",
      }}
      onSubmit={(values, { resetForm }) => {
        setLoading(true);
        if (groupName) {
          groupService
            .updateGroup({
              id: groupId,
              name: values.name,
            })
            .then((res) => {
              // setIsLoading(false);
              // dropDownAlertRef.alertWithType(
              //   "success",
              //   "User Registered Successfully"
              // );
              dropDownAlertRef.alertWithType("success", "Group Added");
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
        } else {
          groupService
            .addGroup({
              name: values.name,
            })
            .then((res) => {
              // setIsLoading(false);
              // dropDownAlertRef.alertWithType(
              //   "success",
              //   "User Registered Successfully"
              // );
              dropDownAlertRef.alertWithType("success", "Group Added");
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
          visible={modalVisible}
          onRequestClose={onClose}
        >
          <Loader loading={loading} />
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalContainer}>
                <View style={styles.modalRowOne}>
                  <Text style={styles.modalText}>Setting</Text>
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
                      placeholder={"Group Name"}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                    />
                  </LinearGradient>
                </View>
                {/* <View style={styles.modalRowThree}>
                <LinearGradient
                  style={styles.swithContainer}
                  colors={[
                    "rgba(220, 220, 220, 0.29)",
                    "rgba(255, 255, 255, 0)",
                  ]}
                  {...deg(140)}
                >
                  <View
                    style={{
                      flex: 3,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={styles.modalTextSwitch}>
                      Allow to see update on news feed
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Switch
                      style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                      trackColor="#41B825"
                      thumbColor="#FFFFFF"
                      ios_backgroundColor="gray"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </LinearGradient>
              </View> */}
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
                    onPress={handleSubmit}
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

export default GroupAddCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  card: {
    marginTop: "5%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: width * 0.85,
    height: width * 0.4,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    flexDirection: "row",
    paddingBottom: 8,
  },
  cardmodal: {
    marginTop: "5%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: width * 0.65,
    height: width * 0.22,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    flexDirection: "row",
    paddingBottom: 8,
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
  cardContainer: {},
  cardHeaderText: {
    fontSize: 18,
    fontWeight: "400",
  },
  cardRowOne: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardRowTwo: {
    flex: 1,
    flexDirection: "row",

    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardRowThree: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardRowFour: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardContainer: {
    flex: 1,
  },
  buttonOne: {
    width: width * 0.37,
    height: width * 0.065,
    backgroundColor: "#FFEABC",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTwo: {
    width: width * 0.37,
    height: width * 0.065,
    backgroundColor: "#AED7FC",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonThree: {
    width: width * 0.37,
    height: width * 0.065,
    backgroundColor: "#D1FFD6",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFour: {
    width: width * 0.37,
    height: width * 0.065,
    backgroundColor: "#CFD7FF",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFive: {
    width: width * 0.37,
    height: width * 0.065,
    backgroundColor: "#DDEEF6",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSix: {
    width: width * 0.37,
    height: width * 0.065,
    backgroundColor: "#F7DEF9",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
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
    height: width * 0.6,
    width: width * 0.75,
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
    fontSize: 16,
    fontWeight: "500",
    padding: "8%",
  },
  modalContainer: {
    flex: 1,
    flexDirection: "column",
  },
  modalRowOne: {
    flex: 0.5,
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
    justifyContent: "center",
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
  },
  modalTextSwitch: {
    fontSize: 11,
    fontWeight: "400",
    left: "2%",
  },
  saveButton: {
    height: width * 0.1,
    width: width * 0.3,

    backgroundColor: "#41B825",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonStyleLogin: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#41b825",
    height: width * 0.1,
    width: width * 0.3,
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
