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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

function WeekNutritionPlanCard({
  title,
  description,
  route,
  id,
  screen,
  planTemplateId,
  groupId,
  planTemplateName,
  weekNumber,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        if (screen === "WeekNutritionPlanCard") {
          navigation.navigate("TopBarScreenNutrition", {
            id: id,
            planTemplateId: planTemplateId,
            weekNumber: weekNumber,
          });
        }
        if (planTemplateId && groupId && planTemplateName) {
          navigation.navigate("AssignWorkoutScreen", {
            planTemplateId: planTemplateId,
            groupId: groupId,
            planTemplateName: planTemplateName,
            weekId: id,
            weekName: title,
          });
        }
        if (screen === "WeeklyPlanTemplateScreen") {
          navigation.navigate("TopBarScreenWeeklyPlanTemplate", { id: id });
        }
      }}
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
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              flex: 5,
              left: "25%",
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

export default WeekNutritionPlanCard;

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
    width: width * 0.85,
    height: width * 0.17,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
  },
  drawerTitle: {
    fontSize: 18,
    color: "#333333",
    fontWeight: "600",
  },
  drawerTitleDescription: {
    marginTop: "2%",
    fontSize: 12,
    color: "#5E5E5E",
    fontWeight: "400",
  },
});
