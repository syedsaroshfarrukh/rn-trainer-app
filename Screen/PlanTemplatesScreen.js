import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import NutritionPlanTemplate from "./Components/NutritionPlanTemplate";

const PlanTemplatesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <NutritionPlanTemplate title={"Kate"} description={"1st week plan"} />
        <NutritionPlanTemplate title={"Smghti"} description={"2 week plan"} />
      </View>
      <View style={styles.secondRow}>
        <TouchableOpacity style={styles.button}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../Image/plus-button.png")} />
            <Text style={styles.buttonTextStyle}>Add New Plan</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlanTemplatesScreen;

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