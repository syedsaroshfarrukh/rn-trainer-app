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
import nutritionPlanService from "../../services/nutritionPlanService";

const { width, height } = Dimensions.get("window");

function AddFoodCard({ title, foodId, id }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("----------foodId", foodId);

        if (foodId) {
          nutritionPlanService
            .addFoodToMeal({
              type_id: foodId,
              meals: id,
            })
            .then((res) => {
              navigation.navigate("TopBarScreenNutrition");
            })
            .catch((error) => {
              console.log("Error", error);
            });
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              left: "40%",
            }}
          >
            {title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default AddFoodCard;

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
