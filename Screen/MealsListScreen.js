import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import ExcerciseCardList from "./Components/ExcerciseCardList";
import { useNavigation } from "@react-navigation/native";

const MealsListScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 0.9 }}>
        <ExcerciseCardList title={"Brown Bread"} />
        <ExcerciseCardList title={"Butter"} />
        <ExcerciseCardList title={"Alternating Bird Dog"} />
        <ExcerciseCardList title={"Fried Egg"} />
        <ExcerciseCardList title={"White Bread"} />
        <ExcerciseCardList title={"Steam Chicken"} />
        <ExcerciseCardList title={"Raat Chicken"} />
        <ExcerciseCardList title={"Abdominal Vacuum"} />
        <ExcerciseCardList title={"Apple"} />
        <ExcerciseCardList title={"Honey"} />
        <ExcerciseCardList title={"Avacados"} />
        <ExcerciseCardList title={"Anchor Butter"} />
        <ExcerciseCardList title={"Asda Red Seedless Grapes"} />
        <ExcerciseCardList title={"Green Peas"} />
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
