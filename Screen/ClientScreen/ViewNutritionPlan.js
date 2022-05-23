import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import WorkoutTemplateCard from "../Components/WorkoutTemplateCard";

const NutritionPlan = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 0.05, marginLeft: "7%", top: "2%" }}>
        <View style={styles.topTextView}>
          <Text style={styles.topTextStyle}>Nutrition Plan</Text>
        </View>
      </View>
      <View style={{ flex: 0.9 }}>
        <ScrollView>
          <WorkoutTemplateCard
            title="Sunday"
            description="2 boil egg, green tea, vagetable salad"
          />
          <WorkoutTemplateCard
            title="Monday"
            description="2 boil egg, green tea, vagetable salad"
          />
          <WorkoutTemplateCard
            title="Tuesday"
            description="2 boil egg, green tea, vagetable salad "
          />
          <WorkoutTemplateCard
            title="Wednesday"
            description="2 boil egg, green tea, vagetable salad "
          />
          <WorkoutTemplateCard
            title="Thursday"
            description="2 boil egg, green tea, vagetable salad "
          />
          <WorkoutTemplateCard title="Friday" description="No Workout" />
          <WorkoutTemplateCard title="Saturday" description="No Workout" />
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
