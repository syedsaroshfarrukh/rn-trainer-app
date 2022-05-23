import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";

const { width, height } = Dimensions.get("window");

const LogWorkoutScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.rowOne}>
        <LinearGradient
          style={styles.textCard}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.ChildViewStyle}>
            <TextInput
              placeholder="How did it go ?"
              underlineColorAndroid="transparent"
              multiline={true}
            />
          </View>
        </LinearGradient>
      </View>
      <View style={styles.rowTwo}>
        <LinearGradient
          style={styles.cardTwo}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.containerRowOne}>
            <View style={styles.colOneContainer}>
              <Text style={styles.Text}>Alternating Bird Dog</Text>
            </View>
            <View style={styles.colTwoContainer}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SvgUri
                  source={require("../../Image/dustbin.svg")}
                  style={{
                    height: 20,
                    width: 16.25,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SvgUri
                  source={require("../../Image/pencil.svg")}
                  style={{
                    height: 17.77,
                    width: 20,
                  }}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.cardTwo}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.containerRowOne}>
            <View style={styles.colOneContainer}>
              <Text style={styles.Text}>Alternating Bird Dog</Text>
            </View>
            <View style={styles.colTwoContainer}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SvgUri
                  source={require("../../Image/dustbin.svg")}
                  style={{
                    height: 20,
                    width: 16.25,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SvgUri
                  source={require("../../Image/pencil.svg")}
                  style={{
                    height: 17.77,
                    width: 20,
                  }}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.cardTwo}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.containerRowOne}>
            <View style={styles.colOneContainer}>
              <Text style={styles.Text}>Add Excercise</Text>
            </View>
            <View style={styles.colTwoContainer}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <SvgUri
                  source={require("../../Image/Plus-Card-Icon.svg")}
                  style={{ alignItems: "center", justifyContent: "center" }}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.cardTwo}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.containerRowOne}>
            <View style={styles.colOneContainer}>
              <Text style={styles.Text}>Share On News Feed</Text>
            </View>
            <View style={styles.colTwoContainer}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
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
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default LogWorkoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  rowOne: {
    flex: 2,
    alignItems: "center",
  },
  textCard: {
    top: "13%",
    width: width * 0.85,
    height: width * 0.55,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
  },
  textArea: {
    top: "7%",
    color: "#000000",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    height: width * 0.55,
    width: width * 0.85,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    marginLeft: 5,
    marginRight: 5,
  },
  containerRowOne: {
    flex: 1,

    flexDirection: "row",
  },
  colOneContainer: {
    flex: 4,

    justifyContent: "center",
    left: "15%",
  },
  colTwoContainer: {
    flex: 1,
    flexDirection: "row",
    right: "3%",
  },
  Text: {
    fontSize: 14,
    fontWeight: "400",
  },
  ChildViewStyle: {
    width: "100%",
    padding: 10,
  },
  rowTwo: {
    flex: 4.5,
    alignItems: "center",
  },
  cardTwo: {
    top: "7%",
    width: width * 0.85,
    height: width * 0.18,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
  },
});
