import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";

const { width, height } = Dimensions.get("window");

const SelectGroupScreen = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked1, setIsChecked1] = useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <LinearGradient
        colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
        {...deg(140)}
        style={stylesSidebar.drawerContainerCard}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            View
            style={{
              flex: 1,
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                left: "10%",
              }}
            >
              Kate Smith
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <CheckBox
              style={{ flex: 1, padding: 10 }}
              onClick={() => {
                setIsChecked1(!isChecked1);
              }}
              isChecked={isChecked1}
              checkBoxColor="#41B825"
            />
          </View>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
        {...deg(140)}
        style={stylesSidebar.drawerContainerCard}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            View
            style={{
              flex: 1,
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                left: "10%",
              }}
            >
              Jack Daniel
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <CheckBox
              style={{ flex: 1, padding: 10 }}
              onClick={() => {
                setIsChecked(!isChecked);
              }}
              isChecked={isChecked}
              checkBoxColor="#41B825"
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SelectGroupScreen;

const stylesSidebar = StyleSheet.create({
  drawerContainerCardIcon: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
  },

  linearGradient: {
    borderRadius: 5,
  },
  drawerContainerCard: {
    marginTop: "5%",
    justifyContent: "flex-start",
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.85,
    height: width * 0.12,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
  },
  drawerTitle: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },
  drawerTitleDescription: {
    marginTop: "2%",
    fontSize: 12,
    color: "#5E5E5E",
    fontWeight: "400",
  },
});
