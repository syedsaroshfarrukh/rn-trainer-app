import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");

const CreateNewMeal = () => {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#FFFFFF" }}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          underlineColorAndroid="#f000"
          placeholder="Excercise Name"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="sentences"
          returnKeyType="next"
        />
        <TextInput
          style={styles.inputStyle}
          underlineColorAndroid="#f000"
          placeholder="Total Calories / Kcal"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="sentences"
          returnKeyType="next"
        />

        <TextInput
          style={styles.textArea}
          multiline={true}
          underlineColorAndroid="#f000"
          placeholder="Meals Recipe"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="sentences"
          returnKeyType="next"
        />
        <TextInput
          style={styles.textArea}
          multiline={true}
          underlineColorAndroid="#f000"
          placeholder="Notes"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="sentences"
          returnKeyType="next"
        />

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity style={styles.buttonStyleLogin} activeOpacity={0.5}>
            <Text style={styles.buttonTextStyleLogin}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
            <Text style={styles.buttonTextStyle}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateNewMeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    color: "#000000",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    height: 55,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    marginLeft: 5,
    marginRight: 5,
  },
  textArea: {
    color: "#000000",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    height: "15%",
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    marginLeft: 5,
    marginRight: 5,
  },
  buttonStyleLogin: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#41b825",
    width: width * 0.4,
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
    borderRadius: 8,
    justifyContent: "center",
  },
});
