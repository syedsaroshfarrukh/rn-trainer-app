import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import SelectVideoButton from "./Components/SelectVideoButton";

const { width, height } = Dimensions.get("window");

const CreateNewExcercise = () => {
  const [current, setCurrent] = useState("Strength");

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

        <RadioButtonGroup
          containerStyle={{
            flexDirection: "row",
            width: "50%",
            justifyContent: "space-between",
            left: "1%",
          }}
          selected={current}
          onSelected={(value) => setCurrent(value)}
          radioBackground="#41B825"
        >
          <RadioButtonItem
            value="Strength"
            label={
              <Text
                style={{ color: "#333333", fontSize: 16, fontWeight: "400" }}
              >
                Strength
              </Text>
            }
          />
          <RadioButtonItem
            value="Cardio"
            label={
              <Text
                style={{ color: "#333333", fontSize: 16, fontWeight: "400" }}
              >
                Cardio
              </Text>
            }
          />
        </RadioButtonGroup>

        <SelectVideoButton />

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

export default CreateNewExcercise;

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
