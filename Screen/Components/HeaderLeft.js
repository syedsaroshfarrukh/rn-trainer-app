import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import SvgUri from "expo-svg-uri";
import { useNavigation } from "@react-navigation/native";

const HeaderLeft = ({ title, image }) => {
  const navigation = useNavigation();

  console.log("-----------Title", title);

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View
        style={{
          marginLeft: 10,
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <SvgUri
          source={image}
          height="18"
          width="18"
          style={{ marginLeft: 15 }}
        />
        <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 5 }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({});
