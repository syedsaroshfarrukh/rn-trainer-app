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

import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

function SelectVideoButtonUpdated({ title, thumbnail }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("YoutubeScreen")}>
      <LinearGradient
        colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
        {...deg(140)}
        style={stylesSidebar.drawerContainerCard}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              flex: 1,
            }}
          >
            <Image
              source={{ uri: thumbnail }}
              style={{ height: 40, width: 60, marginLeft: "15%" }}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              flex: 3,
            }}
          >
            <Text style={stylesSidebar.drawerTitle}>{title}</Text>
          </View>

          <View style={stylesSidebar.drawerContainerCardIcon}>
            <SvgUri
              source={require("../../Image/arrow.svg")}
              style={{
                height: 11.5,
                width: 7.5,
              }}
            />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default SelectVideoButtonUpdated;

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
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: "2%",
  },
  drawerTitle: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
    marginLeft: "5%",
  },
  drawerTitleDescription: {
    marginTop: "2%",
    fontSize: 12,
    color: "#5E5E5E",
    fontWeight: "400",
  },
});
