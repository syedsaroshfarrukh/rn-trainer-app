import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const AssesmentsScreen = ({ imageUrl, title, stats, route }) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
      {...deg(140)}
      style={styles.card}
    >
      <View style={styles.colOne}>
        <Text style={{ fontWeight: "400" }}>{title}</Text>
      </View>
      <View style={styles.colTwo}>
        <Text style={{ color: "#989898" }}>{stats}</Text>
      </View>
    </LinearGradient>
  );
};

export default AssesmentsScreen;

const styles = StyleSheet.create({
  card: {
    marginTop: "3%",
    justifyContent: "center",
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
  colOne: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "7%",
  },
  colTwo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "7%",
  },
});
