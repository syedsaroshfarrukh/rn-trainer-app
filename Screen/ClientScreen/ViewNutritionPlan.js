import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import clientService from "../../services/clientService";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import WorkoutTemplateCard from "../Components/WorkoutTemplateCard";
import Loader from "../Components/Loader";

const NutritionPlan = (props) => {
  const [nutritionPlanList, setNutritionPlanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  useEffect(() => {
    setLoading(true);
    clientService
      .getDueNutrition()
      .then((res) => {
        setNutritionPlanList(res.data.Due);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, [isFocused, refrestState]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loader loading={loading} />
      <View style={{ flex: 0.05, marginLeft: "7%", top: "2%" }}>
        <View style={styles.topTextView}>
          <Text style={styles.topTextStyle}>Nutrition Plan</Text>
        </View>
      </View>
      <View
        style={{ justifyContent: "center", flex: 0.9, alignItems: "center" }}
      >
        <ScrollView>
          {nutritionPlanList.length >= 1 ? (
            nutritionPlanList.map((item, key) => {
              return (
                <WorkoutTemplateCard
                  key={key}
                  title={`${item.day}`}
                  nutritionPlanList={nutritionPlanList}
                  day={item.day}
                />
              );
            })
          ) : (
            <Text style={{ marginTop: "10%" }}>No Nutrition Plan Assigned</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NutritionPlan;

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {},
});
