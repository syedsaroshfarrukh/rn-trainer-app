import React from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

function AddNewWorkoutScreen({ title, description }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <LinearGradient
          style={styles.card}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.firstColumn}>
            <Image
              source={require("../Image/youtubeIcon.png")}
              style={{ height: 50, width: 50 }}
            />
          </View>
          <View style={styles.secondColumn}>
            <View style={styles.secondColumnContainer}>
              <View style={styles.rowOne}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#333333",
                    marginTop: 8,
                  }}
                >
                  Alternating Bird Dog
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.thirdColumn}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SvgUri
                source={require("../Image/dustbin.svg")}
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
                source={require("../Image/pencil.svg")}
                style={{
                  height: 17.77,
                  width: 20,
                }}
              />
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.card}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.firstColumn}>
            <Image
              source={require("../Image/youtubeIcon.png")}
              style={{ height: 50, width: 50 }}
            />
          </View>
          <View style={styles.secondColumn}>
            <View style={styles.secondColumnContainer}>
              <View style={styles.rowOne}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#333333",
                    marginTop: 8,
                  }}
                >
                  Alternating Bird Dog
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.thirdColumn}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SvgUri
                source={require("../Image/dustbin.svg")}
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
                source={require("../Image/pencil.svg")}
                style={{
                  height: 17.77,
                  width: 20,
                }}
              />
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.card}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.firstColumn}>
            <Image
              source={require("../Image/youtubeIcon.png")}
              style={{ height: 50, width: 50 }}
            />
          </View>
          <View style={styles.secondColumn}>
            <View style={styles.secondColumnContainer}>
              <View style={styles.rowOne}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#333333",
                    marginTop: 8,
                  }}
                >
                  Alternating Bird Dog
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.thirdColumn}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SvgUri
                source={require("../Image/dustbin.svg")}
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
                source={require("../Image/pencil.svg")}
                style={{
                  height: 17.77,
                  width: 20,
                }}
              />
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.card}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.firstColumn}>
            <Image
              source={require("../Image/youtubeIcon.png")}
              style={{ height: 50, width: 50 }}
            />
          </View>
          <View style={styles.secondColumn}>
            <View style={styles.secondColumnContainer}>
              <View style={styles.rowOne}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#333333",
                    marginTop: 8,
                  }}
                >
                  Alternating Bird Dog
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.thirdColumn}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SvgUri
                source={require("../Image/dustbin.svg")}
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
                source={require("../Image/pencil.svg")}
                style={{
                  height: 17.77,
                  width: 20,
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTextStyle}>Add Excercise</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddNewWorkoutScreen;

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {
    flex: 0.1,
  },
  cardView: {
    flex: 0.85,
    marginTop: "5%",
    alignItems: "center",
  },
  buttonView: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    width: width * 0.91,
    height: width * 0.2,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
    backgroundColor: "#FBFBFB",
  },
  firstColumn: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    top: "1.5%",
    left: "10%",
  },
  secondColumn: {
    flex: 3,
    padding: "3%",
  },
  thirdColumn: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginBottom: "3%",
    right: "3%",
  },
  secondColumnContainer: {
    flex: 1,
    left: "5%",
  },
  rowOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  },
});
