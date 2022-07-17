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
import planTemplateService from "../../services/planTemplateService";
import Loader from "./Loader";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
const { width, height } = Dimensions.get("window");
import AddModal from "./AddModal";
import MealListCard from "./MealListCard";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import moment from "moment";
import SvgUri from "expo-svg-uri";
import WorkoutTemplateExcerciseCard from "./WorkoutTemplateExcerciseCard";
import WorkoutTemplateSupersetCard from "./WorkoutTemplateSupersetCard";

const DayPlanWorkoutTabsComponent = ({ id, Refresh }) => {
  const [open, setOpen] = useState(false);

  const [weeklyPlanList, setWeeklyPlanList] = useState([]);
  const [templateId, setTemplateId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [superSetId, setSuperSetId] = useState(false);
  const [circuitSetId, setCircuitSetId] = useState(false);
  const isFocused = useIsFocused();

  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  const navigation = useNavigation();

  useEffect(() => {
    planTemplateService
      .getDailyWorkoutPlanTemplate(id)
      .then((res) => {
        let array = [];
        let days = [];

        setTemplateId(res.data.workout[0].id);

        setWeeklyPlanList(res.data.workout[0]);

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: 0.05,
          top: "3%",
        }}
      >
        <View>
          <TouchableOpacity
            style={{
              height: width * 0.08,
              width: width * 0.3,
              backgroundColor: "#42B825",
              borderRadius: 4,
              borderColor: "#CBCBCB",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setLoading(true);
              planTemplateService
                .addEmptySuperSet({ week_id: templateId })
                .then((res) => {
                  setLoading(false);
                  //   navigation.navigate("TopBarScreenWeeklyPlanTemplate", {
                  //     id: templateId,
                  //   });
                  RefreshList(templateId);
                  RefreshList("");
                })
                .catch((error) => {
                  console.log("Error", error);
                  setLoading(false);
                });
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              Add Superset
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              height: width * 0.08,
              width: width * 0.3,
              backgroundColor: "#42B825",
              borderRadius: 4,
              borderColor: "#CBCBCB",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setLoading(true);
              planTemplateService
                .addEmptyCircuit({ week_id: templateId })
                .then((res) => {
                  setLoading(false);
                  //   navigation.navigate("TopBarScreenWeeklyPlanTemplate", {
                  //     id: templateId,
                  //   });
                  RefreshList(templateId);
                  RefreshList("");
                })
                .catch((error) => {
                  console.log("Error", error);
                  setLoading(false);
                });
            }}
          >
            <Text style={{ color: "white", fontSize: 14, fontWeight: "500" }}>
              Add Circuit
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              height: width * 0.08,
              width: width * 0.3,
              backgroundColor: "#42B825",
              borderRadius: 4,
              borderColor: "#CBCBCB",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() =>
              navigation.navigate("CopyWorkoutTemplateList", {
                arraySize:
                  weeklyPlanList &&
                  weeklyPlanList.workout_plan_type &&
                  weeklyPlanList.workout_plan_type,
                weekId: weeklyPlanList.id,
              })
            }
          >
            <Text style={{ color: "white", fontSize: 14, fontWeight: "500" }}>
              Copy Template
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.82, marginTop: "5%", alignItems: "center" }}>
        <ScrollView>
          {weeklyPlanList &&
            weeklyPlanList.workout_plan_type &&
            weeklyPlanList.workout_plan_type.map((item) => {
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
                        </TouchableOpacity>
                      </View>
                    </View>
                    <AddModal
                      title="Add Superset Sets"
                      placeholder="Enter Sets"
                      open={open}
                      onClose={() => setOpen(false)}
                      RefreshList={RefreshList}
                      superSetId={superSetId}
                      AddNumberOfSet={true}
                    />
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
                                navigation.navigate("AddExcerciseListScreen", {
                                  planTemplateSuperSetWorkoutId: item.id,
                                })
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
                        </TouchableOpacity>
                      </View>
                    </View>
                    <AddModal
                      title="Add Circuit Sets"
                      placeholder="Enter Sets"
                      open={open1}
                      onClose={() => setOpen1(false)}
                      RefreshList={RefreshList}
                      superSetId={superSetId}
                      AddNumberOfSet={true}
                    />
                  </LinearGradient>
                );
              }
            })}
        </ScrollView>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("AddExcerciseListScreen", {
              addExcerciseToPlanTemplate: templateId,
            })
          }
        >
          <Text style={styles.buttonTextStyle}>Add Excercise</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DayPlanWorkoutTabsComponent;

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
