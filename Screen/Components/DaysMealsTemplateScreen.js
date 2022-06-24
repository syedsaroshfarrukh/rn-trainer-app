import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import nutritionPlanService from "../../services/nutritionPlanService";
import Loader from "./Loader";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
const { width, height } = Dimensions.get("window");
import AddModal from "./AddModal";
import MealListCard from "./MealListCard";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import moment from "moment";
import SvgUri from "expo-svg-uri";

const DaysMealsTemplateScreen = ({ id, Refresh }) => {
  const [open, setOpen] = useState(false);

  const [weeklyPlanList, setWeeklyPlanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  const navigation = useNavigation();

  useEffect(() => {
    console.log(id);

    nutritionPlanService
      .getDailyNutrition(id)
      .then((res) => {
        let array = [];
        let days = [];
        res.data.nutrition_plan[0].nutriton_plan_type.map((item) => {
          array.push(item);
        });

        setWeeklyPlanList(array);

        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, [isFocused, refrestState]);
  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View style={{ flex: 0.85, marginTop: "5%", alignItems: "center" }}>
        <ScrollView>
          {weeklyPlanList &&
            weeklyPlanList.map((item) => {
              return (
                <LinearGradient
                  style={styles.cardMain}
                  colors={[
                    "rgba(220, 220, 220, 0.29)",
                    "rgba(255, 255, 255, 0)",
                  ]}
                  {...deg(140)}
                >
                  <View
                    style={{
                      flex: 0.3,
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        marginLeft: "5%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "500",
                          marginBottom: "5%",
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text style={{ fontSize: 16, fontWeight: "400" }}>
                        Time : {item.time}
                      </Text>
                    </View>

                    <View
                      style={{
                        flex: 2,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1,
                          justifyContent: "flex-end",
                          marginRight: "5%",
                          alignItems: "center",
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            padding: "4%",
                            backgroundColor: "#0084FF",
                            borderRadius: 4,
                            marginRight: "2%",
                            borderColor: "#CBCBCB",
                            borderWidth: 1,
                          }}
                          onPress={() => {
                            navigation.navigate("AddMealListToCardList", {
                              id: item.id,
                            });
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                            }}
                          >
                            Add Food
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      flex: 0.6,
                      marginTop: "5%",
                    }}
                  >
                    {item.meal.map((item, key) => {
                      return (
                        <MealListCard
                          key={key}
                          title={item.meal_name}
                          calories={item.calories}
                          recipie={item.meal_recipe}
                          note={item.notes}
                          pivot={item.pivot}
                          RefreshList={RefreshList}
                          //   thumbnail={item.thumbnail}
                          //   videoLink={item.video}
                          //   pivot={item.pivot ? item.pivot : null}
                          //   workoutTemplateId={excerciseList.id}
                        />
                      );
                    })}
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "flex-start",
                        marginLeft: "5%",
                        marginBottom: "1%",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          Alert.alert(
                            "Delete",
                            `Do you want to delete ${item.name} ?`,
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
                                  setLoading(true);
                                  nutritionPlanService
                                    .deleteMealCard(item.id)
                                    .then((res) => {
                                      // setIsLoading(false);
                                      // dropDownAlertRef.alertWithType(
                                      //   "success",
                                      //   "User Registered Successfully"
                                      // );
                                      setLoading(false);
                                      RefreshList(item.id);
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
                          source={require("../../Image/dustbin.svg")}
                          height={20}
                          width={30}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </LinearGradient>
              );
            })}
        </ScrollView>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("AddNewMealMainCard", {
              id: id,
            })
          }
        >
          <Text style={styles.buttonTextStyle}>Add Meal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DaysMealsTemplateScreen;

const styles = StyleSheet.create({
  cardMain: {
    flexDirection: "column",
    width: width * 0.91,
    paddingTop: "5%",
    paddingBottom: "2%",
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
    backgroundColor: "#FBFBFB",
    alignSelf: "stretch",
  },
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {
    flex: 0.1,
  },
  cardView: {},
  buttonView: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: "#42B825",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "75%",
    borderRadius: 4,
  },
  buttonTextStyle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
