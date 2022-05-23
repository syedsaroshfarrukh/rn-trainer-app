import React from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

function ClientHomeScreenButton({ imageUrl, title, description, route }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginBottom: 10 }}
      onPress={() => navigation.navigate(`${route}`)}
    >
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
          <View style={stylesSidebar.drawerContainerCardIcon}>
            <SvgUri
              source={imageUrl}
              style={{
                height: 20,
                width: 20,
                left: "15%",
              }}
            />
          </View>

          <View
            style={{
              justifyContent: "space-evenly",
              alignContent: "center",
              flex: 5,
              left: "25%",
            }}
          >
            <Text style={stylesSidebar.drawerTitle}>{title}</Text>
            <Text style={stylesSidebar.drawerTitleDescription}>
              {description}
            </Text>
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

export default ClientHomeScreenButton;

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
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.9,
    height: width * 0.17,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
  },
  drawerTitle: {
    fontSize: 14,
    color: "#333333",
    fontWeight: "400",
    marginBottom: "2%",
  },
  drawerTitleDescription: {
    fontSize: 10,
    color: "#5E5E5E",
    fontWeight: "400",
  },
});
