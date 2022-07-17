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
import workoutService from "../../services/workoutService";
import planTemplateService from "../../services/planTemplateService";

const { width, height } = Dimensions.get("window");

const WorkoutTemplateSupersetCard = ({
  title,
  thumbnail,
  videoLink,
  length,
  pivot,
  workoutTemplateId,
  RefreshList,
  planTemplateId,
  hide,
}) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={styles.card}
      colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
      {...deg(140)}
    >
      <View style={styles.firstColumn}>
        <TouchableOpacity onPress={() => Linking.openURL(videoLink)}>
          <Image
            source={{ uri: thumbnail }}
            style={{ height: 40, width: 60 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.secondColumn}>
        <View style={styles.secondColumnContainer}>
          <View style={styles.rowOne}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#333333",
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "#333333",
              }}
            >
              {pivot
                ? `${pivot.set ? `Sets : ${pivot.set}` : ""} ${
                    pivot.reps ? `, Reps : ${pivot.reps}` : ""
                  } ${pivot.rest ? `, Rest : ${pivot.rest} ` : ""} ${
                    pivot.weight ? `, Weight : ${pivot.weight}` : ""
                  }`
                : "0"}
            </Text>
          </View>
        </View>
      </View>
      {hide === true ? (
        <View></View>
      ) : (
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
                  `Do you want to cancel this ${title} ?`,
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
                        console.log(planTemplateId);
                        if (workoutTemplateId) {
                          workoutService
                            .deleteExcerciseFromSuperSet(
                              pivot.id,
                              pivot.type_id
                            )
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
                        }
                        if (planTemplateId) {
                          console.log("Clicked Here");
                          planTemplateService
                            .deleteExcerciseFromSuperset(
                              pivot.id,
                              pivot.type_id
                            )
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
                        }
                      },
                    },
                  ],
                  { cancelable: false }
                );
              }}
            >
              <SvgUri
                source={require("../../Image/dustbin.svg")}
                style={{
                  height: 20,
                  width: 16.25,
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SetsInfoScreen", {
                  title: title,
                  type_id: pivot.type_id,
                  id: pivot.id,
                  workoutTemplateId: workoutTemplateId,
                  planTemplateId: planTemplateId,
                })
              }
            >
              <SvgUri
                source={require("../../Image/pencil.svg")}
                style={{
                  height: 17.77,
                  width: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </LinearGradient>
  );
};

export default WorkoutTemplateSupersetCard;

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
    height: width * 0.15,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
    backgroundColor: "#FBFBFB",
  },
  firstColumn: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: "4%",
  },
  secondColumn: {
    flex: 3,
    padding: "3%",
  },
  thirdColumn: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginBottom: "3%",
    right: "3%",
  },
  secondColumnContainer: {
    flex: 1,
    left: "5%",
  },
  rowOne: {
    flex: 1,
  },
});
