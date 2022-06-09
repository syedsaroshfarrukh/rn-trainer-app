import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";

const { width, height } = Dimensions.get("window");

const AddModal = ({ title, placeholder, open, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <View style={styles.modalRowOne}>
              <Text style={styles.modalText}>{title}</Text>
            </View>
            <View style={styles.modalRowTwo}>
              <LinearGradient
                style={styles.cardmodal}
                colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
                {...deg(140)}
              >
                <TextInput
                  style={styles.textInput}
                  placeholder={`${placeholder}`}
                />
              </LinearGradient>
            </View>
            <View style={styles.modalRowFour}>
              <TouchableOpacity style={styles.saveButton} onPress={onClose}>
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
    top: "5%",
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
    width: width * 0.4,
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
});
