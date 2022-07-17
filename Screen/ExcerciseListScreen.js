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
import Loader from "./Components/Loader";
import excerciseService from "../services/excerciseService";

const ExcerciseListScreen = () => {
  const isFocused = useIsFocused();

  const [excercise, setExcercise] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      excerciseService
        .getAllExcercises()
        .then((res) => {
          let array = [];
          res.data.exercise.map((item) => {
            array.push(item);
          });
          setExcercise(array);
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
        {excercise.length >= 1 ? (
          excercise.map((item, key) => {
            return (
              <ExcerciseCardList
                key={key}
                title={`${item.name}`}
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
