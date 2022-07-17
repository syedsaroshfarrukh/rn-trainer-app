// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import WorkoutCardLayoutCard from "../Components/workoutCardLayoutCard";
import WorkoutTemplateExcerciseCard from "../Components/WorkoutTemplateExcerciseCard";
import WorkoutTemplateSupersetCard from "../Components/WorkoutTemplateSupersetCard";
import clientService from "../../services/clientService";
import Loader from "../Components/Loader";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";

const { width, height } = Dimensions.get("window");

const NextWorkoutPlanScreens = (props) => {
  const [weeklyPlanList, setWeeklyPlanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  let day =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.title &&
    props.route.params.title;
  let weeklyPlan =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.weeklyPlanList &&
    props.route.params.weeklyPlanList;

  useEffect(() => {
    setLoading(true);
    if (day && weeklyPlan) {
      weeklyPlan.map((item) => {
        if (item.day === day) {
          setWeeklyPlanList(item.workout_plan_type);
        }
      });
      setLoading(false);
    } else {
      clientService
        .getNextDueWorkout()
        .then((res) => {
          setWeeklyPlanList(res.data.Due[0].workout_plan_type);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error", error);
          setLoading(false);
        });
    }
  }, [isFocused, refrestState]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",

        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, padding: 16 }}>
        <Loader loading={loading} />
        <View style={{ flex: day && weeklyPlan ? 1 : 0.8, marginTop: "5%" }}>
          <ScrollView
            style={{ height: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            {weeklyPlanList &&
              weeklyPlanList.map((item) => {
                if (item.name === "Exercise") {
                  return item.exercise.map((item, key) => {
                    return (
                      <WorkoutTemplateExcerciseCard
                        key={key}
                        title={item.name}
                        thumbnail={item.thumbnail}
                        videoLink={item.video}
                        sets={item.sets}
                        pivot={item.pivot ? item.pivot : null}
                        planTemplateId={weeklyPlanList.id}
                        RefreshList={RefreshList}
                        planTemplate="planTemplate"
                        hide={true}
                      />
                    );
                  });
                }
                if (item.name === "Superset") {
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
                            Superset
                          </Text>
                          <Text style={{ fontSize: 16, fontWeight: "400" }}>
                            {item.sets ? `Sets : ${item.sets}` : ``}
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
                            {/* <TouchableOpacity
                              style={{
                                padding: "4%",
                                backgroundColor: "#0084FF",
                                borderRadius: 4,
                                marginRight: "2%",
                                borderColor: "#CBCBCB",
                                borderWidth: 1,
                              }}
                              onPress={() => {
                                setOpen(true);
                                setSuperSetId(item.id);
                              }}
                            >
                              <Text
                                style={{
                                  color: "white",
                                }}
                              >
                                Edit Set
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                padding: "4%",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 4,
                                borderColor: "#CBCBCB",
                                borderWidth: 1,
                              }}
                              onPress={() =>
                                navigation.navigate("AddExcerciseListScreen", {
                                  planTemplateSuperSetWorkoutId: item.id,
                                })
                              }
                            >
                              <Text
                                style={{
                                  color: "#0084FF",
                                }}
                              >
                                Add Excercise
                              </Text>
                            </TouchableOpacity> */}
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
                        {item.exercise.map((item, key) => {
                          return (
                            <WorkoutTemplateSupersetCard
                              key={key}
                              title={item.name}
                              thumbnail={item.thumbnail}
                              videoLink={item.video}
                              pivot={item.pivot ? item.pivot : null}
                              planTemplateId={weeklyPlanList.id}
                              RefreshList={RefreshList}
                              hide={true}
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
                          {/* <TouchableOpacity
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
                                      planTemplateService
                                        .deleteMainExcerciseCard(item.id)
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
                              source={require("../../Image/delete-new.svg")}
                              height={20}
                              width={30}
                            />
                          </TouchableOpacity> */}
                        </View>
                      </View>
                    </LinearGradient>
                  );
                }
                if (item.name === "Circuit") {
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
                            Circuit
                          </Text>
                          <Text style={{ fontSize: 16, fontWeight: "400" }}>
                            {item.sets ? `Sets : ${item.sets}` : ``}
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
                            {/* <TouchableOpacity
                              style={{
                                padding: "4%",
                                backgroundColor: "#0084FF",
                                borderRadius: 4,
                                marginRight: "2%",
                                borderColor: "#CBCBCB",
                                borderWidth: 1,
                              }}
                              onPress={() => {
                                setOpen1(true);
                                setSuperSetId(item.id);
                              }}
                            >
                              <Text
                                style={{
                                  color: "white",
                                }}
                              >
                                Edit Set
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                padding: "4%",
                                backgroundColor: "#FFFFFF",
                                borderRadius: 4,
                                borderColor: "#CBCBCB",
                                borderWidth: 1,
                              }}
                              onPress={
                                () =>
                                  navigation.navigate(
                                    "AddExcerciseListScreen",
                                    {
                                      planTemplateSuperSetWorkoutId: item.id,
                                    }
                                  )
                                // {
                                //   console.log("circuit Id ------", item.id);
                                //   console.log(
                                //     "circuitWorkoutId Id ------",
                                //     excerciseList.id
                                //   );
                                // }
                              }
                            >
                              <Text
                                style={{
                                  color: "#0084FF",
                                }}
                              >
                                Add Excercise
                              </Text>
                            </TouchableOpacity> */}
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
                        {item.exercise.map((item, key) => {
                          return (
                            <WorkoutTemplateSupersetCard
                              key={key}
                              title={item.name}
                              thumbnail={item.thumbnail}
                              videoLink={item.video}
                              pivot={item.pivot ? item.pivot : null}
                              planTemplateId={weeklyPlanList.id}
                              RefreshList={RefreshList}
                              hide={true}
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
                          {/* <TouchableOpacity
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
                                      planTemplateService
                                        .deleteMainExcerciseCard(item.id)
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
                              source={require("../../Image/delete-new.svg")}
                              height={20}
                              width={30}
                            />
                          </TouchableOpacity> */}
                        </View>
                      </View>
                    </LinearGradient>
                  );
                }
              })}
          </ScrollView>
        </View>
        {day && weeklyPlan ? (
          <View></View>
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("MarkAllCompleted")}
            >
              <Text style={styles.buttonTextStyle}>Mark All Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyleLogin}
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonTextStyleLogin}>Cancel Workout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NextWorkoutPlanScreens;

const styles = StyleSheet.create({
  cardView: {},
  buttonContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyleLogin: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#41B825",
    height: width * 0.12,
    width: width * 0.75,
    alignItems: "center",
    borderRadius: 4,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyleLogin: {
    color: "#000000",

    fontSize: 20,
    fontWeight: "500",
  },
  buttonStyle: {
    backgroundColor: "#41B825",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: width * 0.12,
    width: width * 0.75,
    alignItems: "center",
    borderRadius: 4,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
  },
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
