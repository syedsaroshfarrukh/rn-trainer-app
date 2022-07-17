import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import ExcerciseCardList from "./Components/ExcerciseCardList";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import mealService from "../services/mealService";
import Loader from "./Components/Loader";

const MealsListScreen = () => {
  const isFocused = useIsFocused();

  const [meals, setMeals] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      mealService
        .getAllMeals()
        .then((res) => {
          let array = [];
          res.data.meal.map((item) => {
            array.push(item);
          });
          setMeals(array);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error", error);
          setLoading(false);
        });
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loader loading={loading} />
      <ScrollView style={{ flex: 0.9 }}>
        {meals.length >= 1 ? (
          meals.map((item, key) => {
            return (
              <ExcerciseCardList
                key={key}
                title={`${item.meal_name}`}
                id={item.id}
              />
            );
          })
        ) : (
          <Text></Text>
        )}
      </ScrollView>
      <View
        style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CreateNewMeal")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.buttonTextStyle}>Add New Meal</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MealsListScreen;

const styles = StyleSheet.create({
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
