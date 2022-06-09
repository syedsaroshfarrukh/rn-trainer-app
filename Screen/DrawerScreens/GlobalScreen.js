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
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <View style={styles.topTextView}>
            <Text style={styles.topTextStyle}>News</Text>
          </View>
        </View>
        <LinearGradient
          style={styles.statusBarView}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.statusBarViewColOne}>
            <Image
              source={require("../../Image/profile.png")}
              style={{ width: 40, height: 40 }}
            />
          </View>
          <View style={styles.statusBarViewColTwo}>
            <TextInput
              style={styles.input}
              placeholder="What's on your mind?"
            />
          </View>
          <View style={styles.statusBarViewColThree}>
            <SvgUri source={require("../../Image/photo-staus.svg")} />
            <SvgUri source={require("../../Image/file-status.svg")} />
          </View>
        </LinearGradient>
        <View style={styles.cardView}>
          <ScrollView>
            <LinearGradient
              style={styles.statusCard}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={{ flex: 1 }}>
                <View style={styles.statusCardRowOne}>
                  <View style={styles.statusCardRowOneColOne}>
                    <Image
                      source={require("../../Image/BoyProfile.png")}
                      style={{ height: 40, width: 40 }}
                    />
                  </View>
                  <View style={styles.statusCardRowOneColTwo}>
                    <Text style={styles.postText}>Kate added a post</Text>
                    <Text style={styles.postDate}>May 7, 2022</Text>
                  </View>
                  <View style={styles.statusCardRowOneColThree}>
                    <SvgUri
                      source={require("../../Image/dots-button.svg")}
                      style={{
                        top: "0.7%",
                        left: "30%",
                        top: "8%",
                      }}
                    />
                  </View>
                </View>
                <View style={styles.statusCardRowTwo}>
                  <Text
                    style={{ fontSize: 14, fontWeight: "400", padding: 16 }}
                  >
                    Giving is not donation.
                  </Text>
                </View>
                <View style={styles.statusCardRowThree}>
                  <View style={styles.statusCardRowThreeColOne}>
                    <SvgUri source={require("../../Image/like.svg")} />
                    <Text style={styles.likeComment}>Like</Text>
                  </View>
                  <View style={styles.statusCardRowThreeColTwo}>
                    <SvgUri source={require("../../Image/comment.svg")} />
                    <Text style={styles.likeComment}>Comment</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.statusCard}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={{ flex: 1 }}>
                <View style={styles.statusCardRowOne}>
                  <View style={styles.statusCardRowOneColOne}>
                    <Image
                      source={require("../../Image/BoyProfile.png")}
                      style={{ height: 40, width: 40 }}
                    />
                  </View>
                  <View style={styles.statusCardRowOneColTwo}>
                    <Text style={styles.postText}>Kate added a post</Text>
                    <Text style={styles.postDate}>May 7, 2022</Text>
                  </View>
                  <View style={styles.statusCardRowOneColThree}>
                    <SvgUri
                      source={require("../../Image/dots-button.svg")}
                      style={{
                        top: "0.7%",
                        left: "30%",
                        top: "8%",
                      }}
                    />
                  </View>
                </View>
                <View style={styles.statusCardRowTwo}>
                  <Image
                    source={require("../../Image/postbanner.png")}
                    style={{ height: "100%" }}
                  />
                </View>
                <View style={styles.statusCardRowThree}>
                  <View style={styles.statusCardRowThreeColOne}>
                    <SvgUri source={require("../../Image/like.svg")} />
                    <Text style={styles.likeComment}>Like</Text>
                  </View>
                  <View style={styles.statusCardRowThreeColTwo}>
                    <SvgUri source={require("../../Image/comment.svg")} />
                    <Text style={styles.likeComment}>Comment</Text>
                  </View>
                </View>
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
    padding: 16,
  },
  statusBarView: {
    flex: 0.1,
    borderColor: "#CBCBCB",
    borderWidth: 0.5,
    flexDirection: "row",
  },

  statusCard: {
    marginTop: "5%",
    height: width * 0.6,
    width: "100%",
  },
  statusCardRowOne: {
    flex: 1,

    flexDirection: "row",
  },
  statusCardRowTwo: {
    flex: 2,
  },
  statusCardRowThree: {
    flex: 1,
    borderColor: "#CBCBCB",
    borderWidth: 0.5,
    flexDirection: "row",
  },
  statusCardRowThreeColOne: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusCardRowThreeColTwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusCardRowOneColOne: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  statusCardRowOneColTwo: {
    flex: 3,
    justifyContent: "center",
    left: "25%",
  },
  statusCardRowOneColThree: {
    flex: 1,
  },
  cardView: {
    flex: 0.8,
  },
  titleContainer: {
    flex: 0.08,
  },
  statusBarViewColOne: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  statusBarViewColTwo: {
    flex: 3,
    justifyContent: "center",
    left: "20%",
  },
  input: {
    fontSize: 14,
    fontWeight: "400",
    color: "#777777",
  },
  statusBarViewColThree: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  postText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#333333",
  },
  postDate: {
    fontSize: 12,
    fontWeight: "400",
    color: "#777777",
  },
  likeComment: {
    left: "10%",
  },
});
