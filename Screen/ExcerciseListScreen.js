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

const ExcerciseListScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 0.9 }}>
        <ExcerciseCardList title={"Angle Side Bridge"} />
        <ExcerciseCardList title={"Abdominal Vacuum"} />
        <ExcerciseCardList title={"Alternating Bird Dog"} />
        <ExcerciseCardList title={"Abdominal Vacuum"} />
        <ExcerciseCardList title={"Angle Side Bridge"} />
        <ExcerciseCardList title={"Alternating Step-down"} />
        <ExcerciseCardList title={"Angle Side Bridge"} />
        <ExcerciseCardList title={"Abdominal Vacuum"} />
        <ExcerciseCardList title={"Alternating Bird Dog"} />
        <ExcerciseCardList title={"Abdominal Vacuum"} />
        <ExcerciseCardList title={"Angle Side Bridge"} />
        <ExcerciseCardList title={"Alternating Step-down"} />
      </ScrollView>
      <View
        style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CreateNewExcercise")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.buttonTextStyle}>Create New Excercise</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ExcerciseListScreen;

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
