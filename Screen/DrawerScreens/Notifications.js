import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";

const { width, height } = Dimensions.get("window");

const Notifications = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.topTextView}>
          <Text style={styles.topTextStyle}>Notifications</Text>
        </View>
        <View style={styles.cardView}>
          <ScrollView style={{ height: "100%" }}>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 30, width: 30 }}
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
                      }}
                    >
                      Kate Sends A Message
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Here's notification text
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    color: "#5E5E5E",
                  }}
                >
                  34min ago
                </Text>
              </View>
            </LinearGradient>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {
    flex: 0.1,
  },
  cardView: {
    flex: 1.9,
    marginTop: "5%",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    width: width * 0.91,
    height: width * 0.15,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
  },
  firstColumn: {
    flex: 1,

    left: "15%",
    top: "3%",
  },
  secondColumn: {
    flex: 3,
    padding: "0.5%",
    right: "20%",
  },
  thirdColumn: {
    flex: 1,
    top: "2%",
  },
  secondColumnContainer: {
    flex: 1,
    left: "5%",
  },
  rowOne: {
    flex: 1,
    top: "10%",
  },
  rowTwo: {
    flex: 1,
    top: "5%",
  },
  rowThree: {
    flex: 1,
  },
  rowFour: {
    flex: 1,
    flexDirection: "row",
  },
});
