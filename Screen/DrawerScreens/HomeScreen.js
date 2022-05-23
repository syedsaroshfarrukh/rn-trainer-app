// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabsBottom from "../Components/TabsBottom";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.topTextView}>
          <Text style={styles.topTextStyle}>Clients</Text>
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
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.card}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.firstColumn}>
                <Image
                  source={require("../../Image/client-boy.png")}
                  style={{ height: 45, width: 45 }}
                />
              </View>
              <View style={styles.secondColumn}>
                <View style={styles.secondColumnContainer}>
                  <View style={styles.rowOne}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#333333",
                      }}
                    >
                      Kate Smith
                    </Text>
                  </View>
                  <View style={styles.rowTwo}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                        top: "15%",
                      }}
                    >
                      No Upcoming Plan
                    </Text>
                  </View>
                  <View style={styles.rowThree}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        color: "#5E5E5E",
                      }}
                    >
                      Last workout: yesterday
                    </Text>
                  </View>
                  <View style={styles.rowFour}>
                    <SvgUri
                      source={require("../../Image/order-new.svg")}
                      style={{ height: 20, width: 20 }}
                    />
                    <SvgUri
                      source={require("../../Image/chat.svg")}
                      style={{
                        height: 16,
                        width: 15.16,
                        top: "0.7%",
                        left: "50%",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.thirdColumn}>
                <SvgUri
                  source={require("../../Image/dots-button.svg")}
                  style={{
                    height: 16,
                    width: 15.16,
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                />
              </View>
            </LinearGradient>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    height: width * 0.3,
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
    padding: "3%",
  },
  thirdColumn: {
    flex: 1,
  },
  secondColumnContainer: {
    flex: 1,
    left: "5%",
  },
  rowOne: {
    flex: 1,
  },
  rowTwo: {
    flex: 1,
  },
  rowThree: {
    flex: 1,
  },
  rowFour: {
    flex: 1,
    flexDirection: "row",
  },
});
