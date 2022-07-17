import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import { useNavigation } from "@react-navigation/native";
import GroupAddCard from "./GroupAddCard";
import groupService from "../../services/groupService";
import DropdownAlert from "react-native-dropdownalert";

const { width, height } = Dimensions.get("window");

const GroupCardComponent = ({ title, id, RefreshList }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  let dropDownAlertRef = useRef();

  return (
    <>
      <LinearGradient
        style={styles.card}
        colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
        {...deg(140)}
      >
        <View style={styles.cardContainer}>
          <View style={styles.cardRowOne}>
            <Text style={{ fontSize: 18, fontWeight: "400", top: "10%" }}>
              {title}
            </Text>
          </View>
          <View style={styles.cardRowTwo}>
            <TouchableOpacity
              style={styles.buttonOne}
              onPress={() =>
                navigation.navigate("SelectGroupScreen", { groupId: id })
              }
            >
              <Text style={{ fontSize: 12, fontWeight: "400" }}>Members</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonTwo}>
              <Text style={{ fontSize: 12, fontWeight: "400" }}>
                Send Message
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardRowThree}>
            <TouchableOpacity style={styles.buttonThree}>
              <Text style={{ fontSize: 12, fontWeight: "400" }}>
                Groups News Feed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonFour}
              onPress={() =>
                navigation.navigate("AssignWorkoutScreen", { groupId: id })
              }
            >
              <Text style={{ fontSize: 12, fontWeight: "400" }}>
                Assign Workout Plan
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardRowFour}>
            <TouchableOpacity
              style={styles.buttonFive}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ fontSize: 12, fontWeight: "400" }}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSix}
              onPress={() => {
                Alert.alert(
                  "Delete",
                  "Do you want to cancel this group?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => {
                        return null;
                      },
                    },
                    {
                      text: "Delete",
                      onPress: () => {
                        groupService
                          .deleteGroup(id)
                          .then((res) => {
                            // setIsLoading(false);
                            // dropDownAlertRef.alertWithType(
                            //   "success",
                            //   "User Registered Successfully"
                            // );
                            dropDownAlertRef.alertWithType(
                              "success",
                              "Group Deleted"
                            );
                            RefreshList(id);
                            RefreshList("");
                          })
                          .catch((error) => {
                            // setIsLoading(false); // For hiding loader
                            // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
                            console.log(error);
                            dropDownAlertRef.alertWithType("error", "Error");
                          });
                      },
                    },
                  ],
                  { cancelable: false }
                );
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "400" }}>
                Delete Group
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <GroupAddCard
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        groupId={id}
        groupName={title}
        RefreshList={RefreshList}
      />
      <DropdownAlert
        updateStatusBar={false}
        defaultContainer={{ padding: 15, paddingTop: 20 }}
        ref={(ref) => {
          if (ref) {
            dropDownAlertRef = ref;
          }
        }}
      />
    </>
  );
};

export default GroupCardComponent;

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
    height: width * 0.75,
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
    width: width * 0.35,

    backgroundColor: "#41B825",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
