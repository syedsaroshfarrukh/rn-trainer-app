import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import CheckBox from "react-native-check-box";

import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const workoutCardLayoutCard = () => {
  const [isChecked1, setIsChecked1] = useState(true);

  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.card}
      colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
      {...deg(140)}
    >
      <View style={styles.rowOne}>
        <View style={styles.columnOne}>
          <Image
            source={require("../../Image/youtubeIcon.png")}
            style={{
              height: 85,
              width: 85,
            }}
          />
        </View>
        <View style={styles.columnTwo}>
          <Text
            style={{
              color: "#333333",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Alternating Bird Dog
          </Text>
        </View>
        <View style={styles.columnThree}>
          <TouchableOpacity
            onPress={() => navigation.navigate("RecordExcerciseScreen")}
          >
            <SvgUri
              source={require("../../Image/pencil.svg")}
              height="23"
              width="25"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowTwo}>
        <View style={styles.colOne}>
          <CheckBox
            onClick={() => {
              setIsChecked1(!isChecked1);
            }}
            isChecked={isChecked1}
            checkBoxColor="#41B825"
          />
        </View>
        <View style={styles.colTwo}>
          <Text style={styles.Text}>
            Tap check box after you complete an exercise
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default workoutCardLayoutCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,

    width: width * 0.87,
    height: width * 0.4,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
  },
  rowOne: {
    flex: 0.65,

    flexDirection: "row",
  },
  rowTwo: {
    flex: 0.35,

    flexDirection: "row",
  },
  columnOne: {
    flex: 1,
    top: "3%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: "5%",
  },
  columnTwo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    left: "15%",
  },
  columnThree: {
    flex: 0.5,

    justifyContent: "flex-start",
    top: "6%",
    left: "8%",
  },
  colOne: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-start",
    left: "40%",
  },
  colTwo: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  Text: {
    fontSize: 13,
    fontWeight: "400",
  },
});
