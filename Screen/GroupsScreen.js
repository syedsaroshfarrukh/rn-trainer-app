import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
  Switch,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import { useNavigation } from "@react-navigation/native";
import SettngsModal from "./Components/SettngsModal";

const { width, height } = Dimensions.get("window");

const GroupsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 0.9 }}>
        <LinearGradient
          style={styles.card}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.cardContainer}>
            <View style={styles.cardRowOne}>
              <Text style={{ fontSize: 18, fontWeight: "400", top: "10%" }}>
                Default
              </Text>
            </View>
            <View style={styles.cardRowTwo}>
              <TouchableOpacity
                style={styles.buttonOne}
                onPress={() => navigation.navigate("SelectGroupScreen")}
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
              <TouchableOpacity style={styles.buttonFour}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Assign Workout Plan
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardRowFour}>
              <TouchableOpacity style={styles.buttonFive}>
                <Text
                  style={{ fontSize: 12, fontWeight: "400" }}
                  onPress={() => setModalVisible(true)}
                >
                  Settings
                </Text>
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
                          return null;
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
        <LinearGradient
          style={styles.card}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.cardContainer}>
            <View style={styles.cardRowOne}>
              <Text style={{ fontSize: 18, fontWeight: "400", top: "10%" }}>
                Default
              </Text>
            </View>
            <View style={styles.cardRowTwo}>
              <TouchableOpacity style={styles.buttonOne}>
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
              <TouchableOpacity style={styles.buttonFour}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Assign Workout Plan
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardRowFour}>
              <TouchableOpacity style={styles.buttonFive}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSix}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Delete Group
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.card}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.cardContainer}>
            <View style={styles.cardRowOne}>
              <Text style={{ fontSize: 18, fontWeight: "400", top: "10%" }}>
                Default
              </Text>
            </View>
            <View style={styles.cardRowTwo}>
              <TouchableOpacity style={styles.buttonOne}>
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
              <TouchableOpacity style={styles.buttonFour}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Assign Workout Plan
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardRowFour}>
              <TouchableOpacity style={styles.buttonFive}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSix}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Delete Group
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.card}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.cardContainer}>
            <View style={styles.cardRowOne}>
              <Text style={{ fontSize: 18, fontWeight: "400", top: "10%" }}>
                Default
              </Text>
            </View>
            <View style={styles.cardRowTwo}>
              <TouchableOpacity style={styles.buttonOne}>
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
              <TouchableOpacity style={styles.buttonFour}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Assign Workout Plan
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardRowFour}>
              <TouchableOpacity style={styles.buttonFive}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSix}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Delete Group
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.card}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.cardContainer}>
            <View style={styles.cardRowOne}>
              <Text style={{ fontSize: 18, fontWeight: "400", top: "10%" }}>
                Default
              </Text>
            </View>
            <View style={styles.cardRowTwo}>
              <TouchableOpacity style={styles.buttonOne}>
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
              <TouchableOpacity style={styles.buttonFour}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Assign Workout Plan
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardRowFour}>
              <TouchableOpacity style={styles.buttonFive}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSix}>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>
                  Delete Group
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
      <View
        style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CreateNewMeal")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.buttonTextStyle}>AddGroups</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
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
                    onChangeText={(text) => console.log(text)}
                    placeholder={"Team Name"}
                  />
                </LinearGradient>
              </View>
              <View style={styles.modalRowThree}>
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
              </View>
              <View style={styles.modalRowFour}>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => setModalVisible(false)}
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
      </Modal>
    </SafeAreaView>
  );
};

export default GroupsScreen;

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
