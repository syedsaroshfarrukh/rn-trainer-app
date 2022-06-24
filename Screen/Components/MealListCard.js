import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import nutritionPlanService from "../../services/nutritionPlanService";

const { width, height } = Dimensions.get("window");

const MealListCard = ({
  title,
  thumbnail,
  note,
  recipie,
  calories,
  RefreshList,
  pivot,
}) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={styles.card}
      colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
      {...deg(140)}
    >
      <View style={styles.firstColumn}>
        {/* <TouchableOpacity>
          <Image
            source={{ uri: thumbnail }}
            style={{ height: 40, width: 60 }}
          />
        </TouchableOpacity> */}
        <View style={styles.secondColumnContainer}>
          <View style={styles.rowOne}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                color: "#333333",
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "#333333",
              }}
            >
              Calories : {calories} Kcal
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "#333333",
              }}
            >
              Recipie : {recipie.substring(0, 20)}
              {recipie.length > 20 ? "....." : ""}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.secondColumn}></View>
      <View style={styles.thirdColumn}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Delete",
                `Do you want to delete ${title} ?`,
                [
                  {
                    text: "Cancel",
                    onPress: () => {
                      return null;
                    },
                  },
                  {
                    text: "Delete",
                    onPress: () => {
                      console.log(pivot.id);
                      console.log(pivot.type_id);
                      nutritionPlanService
                        .deleteFoodFromMeal(pivot.type_id, pivot.id)
                        .then((res) => {
                          // setIsLoading(false);
                          // dropDownAlertRef.alertWithType(
                          //   "success",
                          //   "User Registered Successfully"
                          // );
                          RefreshList(pivot.id);
                          RefreshList("");
                        })
                        .catch((error) => {
                          // setIsLoading(false); // For hiding loader
                          // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
                          console.log(error);
                        });
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
          >
            <SvgUri
              source={require("../../Image/delete-new.svg")}
              height={20}
              width={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default MealListCard;

const styles = StyleSheet.create({
  cardMain: {
    flexDirection: "column",
    width: width * 0.91,
    height: width * 0.7,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
    backgroundColor: "#FBFBFB",
  },
  card: {
    flexDirection: "row",
    width: width * 0.82,
    height: width * 0.25,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
    backgroundColor: "#FBFBFB",
  },
  firstColumn: {
    flex: 3,
    justifyContent: "center",
    padding: "3%",
  },
  secondColumn: {
    flex: 1,
    padding: "3%",
  },
  thirdColumn: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginBottom: "3%",
  },
  secondColumnContainer: {
    flex: 1,
    left: "5%",
  },
  rowOne: {
    flex: 1,
    justifyContent: "center",
  },
});
