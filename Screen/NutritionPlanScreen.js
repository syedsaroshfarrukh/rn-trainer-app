import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import NutritionPlanTemplate from "./Components/NutritionPlanTemplate";
import AddModal from "./Components/AddModal";
import nutritionPlanService from "../services/nutritionPlanService";
import Loader from "./Components/Loader";

const NutritionPlan = () => {
  const [open, setOpen] = useState(false);

  const [nutrtionList, setNutritionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  useEffect(() => {
    setLoading(true);
    nutritionPlanService
      .getAllNutritions()
      .then((res) => {
        let array = [];
        res.data.nutrition_plan.map((item) => {
          array.push(item);
        });
        setNutritionList(array);
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
          {nutrtionList.length > 1 ? (
            nutrtionList.map((item, key) => {
              return (
                <NutritionPlanTemplate
                  key={key}
                  title={item.name}
                  description={"1st week plan"}
                  id={item.id}
                />
              );
            })
          ) : (
            <Text></Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.secondRow}>
        <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../Image/plus-button.png")} />
            <Text style={styles.buttonTextStyle}>Add New Nutrition</Text>
          </View>
        </TouchableOpacity>
      </View>
      <AddModal
        title="Add New Nutrition"
        placeholder="Name"
        open={open}
        onClose={() => setOpen(false)}
        RefreshList={RefreshList}
      />
    </View>
  );
};

export default NutritionPlan;

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
