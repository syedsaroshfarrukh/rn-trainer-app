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
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import { useNavigation } from "@react-navigation/native";
import GroupCardComponent from "./Components/GroupCardComponent";
import groupService from "../services/groupService";
import Loader from "./Components/Loader";
import GroupAddCard from "./Components/GroupAddCard";

const { width, height } = Dimensions.get("window");

const GroupsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [group, setGroup] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  const navigation = useNavigation();

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
  }, [refrestState]);

  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={loading} />
      <ScrollView style={{ flex: 0.9 }}>
        {group.length >= 1 ? (
          group.map((item, key) => {
            return (
              <GroupCardComponent
                key={key}
                title={item.name}
                id={item.id}
                modalVisible={modalVisible}
                onClose={() => setModalVisible(false)}
                RefreshList={RefreshList}
              />
            );
          })
        ) : (
          <Text></Text>
        )}
      </ScrollView>
      <View
        style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.buttonTextStyle}>Add Groups</Text>
          </View>
        </TouchableOpacity>
      </View>
      <GroupAddCard
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onOpen={() => setModalVisible(true)}
        RefreshList={RefreshList}
      />
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
