import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import WeekNutritionPlanCard from "./Components/WeekNutritionPlanCard";
import AddModal from "./Components/AddModal";
import planTemplateService from "../services/planTemplateService";
import Loader from "./Components/Loader";

const WeekSelectGroupScreen = (props) => {
  const [open, setOpen] = useState(false);

  const [weeklyPlanList, setWeeklyPlanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  let groupId =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.groupId &&
    props.route.params.groupId;

  let planTemplateId =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.planTemplateId &&
    props.route.params.planTemplateId;

  let planTemplateName =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.planTemplateName &&
    props.route.params.planTemplateName;

  useEffect(() => {
    setLoading(true);
    planTemplateService
      .getWeeksInPlanTemplate(props.route.params.planTemplateId)
      .then((res) => {
        let array = [];
        res.data.workout_plan.map((item) => {
          array.push(item);
        });
        setWeeklyPlanList(array);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, [refrestState]);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View style={styles.firstRow}>
        <ScrollView>
          {weeklyPlanList.length >= 1 ? (
            weeklyPlanList.map((item, key) => {
              return (
                <WeekNutritionPlanCard
                  key={key}
                  title={`Week ${item.week}`}
                  id={item.week}
                  planTemplateId={planTemplateId}
                  groupId={groupId}
                  planTemplateName={planTemplateName}
                />
              );
            })
          ) : (
            <Text></Text>
          )}
        </ScrollView>
      </View>
      {/* <View style={styles.secondRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setLoading(true);
            planTemplateService
              .addNewWeekPlanInPlanTemplate(props.route.params.planTemplateId)
              .then((res) => {
                RefreshList(res.data);
                setLoading(false);
              })
              .catch((error) => {
                console.log("Error", error);
                setLoading(false);
              });
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../Image/plus-button.png")} />
            <Text style={styles.buttonTextStyle}>Add New Week</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default WeekSelectGroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  firstRow: {
    flex: 0.8,
  },
  secondRow: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
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
    marginLeft: 10,
  },
});
