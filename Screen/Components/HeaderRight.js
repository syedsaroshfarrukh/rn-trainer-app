import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SvgUri from "expo-svg-uri";
import { Touchable } from "react-native-web";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderLeft = ({ image, height, width, margin }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginRight: margin,
      }}
    >
      <SvgUri source={image} height={height} width={width} />
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({});
