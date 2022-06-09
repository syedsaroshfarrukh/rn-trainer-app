import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import SvgUri from "expo-svg-uri";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";

const { width, height } = Dimensions.get("window");

const AddClient = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.topTextView}>
          <Text style={styles.topTextStyle}>Add Client</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.firstRow}>
            <Image
              source={require("../../Image/logo-small.png")}
              style={{ height: 150, width: 150, top: 10 }}
            />
          </View>
          <View style={styles.secondRow}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="First Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onChangeText={(text) => console.log(text)}
            />
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Last Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
            />
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Email"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
            />

            <TouchableOpacity>
              <LinearGradient
                colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
                {...deg(140)}
                style={styles.inputStyle}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>
                      Groups
                    </Text>
                  </View>
                  <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: "#989898",
                        left: "15%",
                      }}
                    >
                      Group 1
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      left: "20%",
                    }}
                  >
                    <SvgUri source={require("../../Image/arrow.svg")} />
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.thirdRow}>
            <TouchableOpacity style={styles.button}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={require("../../Image/plus-button.png")} />
                <Text style={styles.buttonTextStyle}>Add Client</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddClient;

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {
    flex: 0.1,
  },
  container: {
    flex: 1.9,
  },
  firstRow: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  secondRow: {
    flex: 3,
    marginTop: 30,
  },
  thirdRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginLeft: 10,
  },
});
