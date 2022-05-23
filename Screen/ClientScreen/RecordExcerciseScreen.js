import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import CheckBox from "react-native-check-box";

import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const RecordExcerciseScreen = () => {
  const [isChecked1, setIsChecked1] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
              <TextInput placeholder={"3"} style={styles.textInput} />
            </View>
          </View>

          <View style={styles.rowTwoContainer}>
            <View style={styles.colOne}>
              <Text style={styles.TextHead}>Weight:</Text>
            </View>
            <View style={styles.colTwo}>
              <TextInput placeholder={"40, 50 lbs"} style={styles.textInput} />
            </View>
          </View>
          <View style={styles.rowThreeContainer}>
            <View style={styles.colOne}>
              <Text style={styles.TextHead}>Reps:</Text>
            </View>
            <View style={styles.colTwo}>
              <TextInput placeholder={"10,12,12"} style={styles.textInput} />
            </View>
          </View>
          <View style={styles.rowFourContainer}>
            <View style={styles.colOne}>
              <Text style={styles.TextHead}>Rest:</Text>
            </View>
            <View style={styles.colTwo}>
              <TextInput placeholder={"30, 40 sec"} style={styles.textInput} />
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.rowTwo}>
        <TouchableOpacity style={styles.buttonStyleLogin} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyleLogin}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowThree}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>History</Text>
      </View>
      <View style={styles.rowFour}>
        <LinearGradient
          style={styles.secondCard}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={{ left: "5%" }}>
            <Text style={{ fontSize: 18, fontWeight: "300", marginBottom: 8 }}>
              Today
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "300", marginBottom: 8 }}>
              Did Not Track
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default RecordExcerciseScreen;

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
