import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import mealService from "../services/mealService";
import DropdownAlert from "react-native-dropdownalert";
import Loader from "./Components/Loader";

const { width, height } = Dimensions.get("window");

const CreateNewMeal = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  let dropDownAlertRef = useRef();

  function mealListScreen() {
    navigation.navigate("MealsListScreen");
  }

  // parse string value to int
  const parseAndHandleChange = (value, setFieldValue, id) => {
    const parsed = parseInt(value, 10);
    setFieldValue(id, parsed);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        MealName: "",
        Calories: "",
        MealRecipe: "",
        Notes: "",
      }}
      onSubmit={(values, { resetForm }) => {
        console.log({
          name: values.MealName,
          calories: values.Calories,
          recipe: values.MealRecipe,
          notes: values.Notes,
        });
        setLoading(true);
        mealService
          .addNewMeal({
            name: values.MealName,
            calories: values.Calories,
            recipe: values.MealRecipe,
            notes: values.Notes,
          })
          .then((res) => {
            console.log("response", res.data);
            dropDownAlertRef.alertWithType("success", "Meal Added");
            setLoading(false);
            resetForm();
            setTimeout(mealListScreen, 800);
          })
          .catch((error) => {
            console.log(error);
            dropDownAlertRef.alertWithType("error", error.message);
            setLoading(false);
          });
      }}
      // validationSchema={profileValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        setFieldValue,
      }) => (
        <View style={{ flex: 1, padding: 16, backgroundColor: "#FFFFFF" }}>
          <Loader loading={loading} />
          <View style={styles.container}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Meal Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onChangeText={handleChange("MealName")}
              onBlur={handleBlur("MealName")}
              value={values.MealName}
            />
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Total Calories / Kcal"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              keyboardType="numeric"
              returnKeyType="next"
              onChangeText={(value) =>
                parseAndHandleChange(value, setFieldValue, "Calories")
              }
              onBlur={handleBlur("Calories")}
              value={values.Calories}
            />

            <TextInput
              style={styles.textArea}
              multiline={true}
              underlineColorAndroid="#f000"
              placeholder="Meals Recipe"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onChangeText={handleChange("MealRecipe")}
              onBlur={handleBlur("MealRecipe")}
              value={values.MealRecipe}
            />
            <TextInput
              style={styles.textArea}
              multiline={true}
              underlineColorAndroid="#f000"
              placeholder="Notes"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onChangeText={handleChange("Notes")}
              onBlur={handleBlur("Notes")}
              value={values.Notes}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TouchableOpacity
                style={styles.buttonStyleLogin}
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.buttonTextStyleLogin}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonTextStyle}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
          <DropdownAlert
            updateStatusBar={false}
            defaultContainer={{ padding: 15, paddingTop: 20 }}
            ref={(ref) => {
              if (ref) {
                dropDownAlertRef = ref;
              }
            }}
          />
        </View>
      )}
    </Formik>
  );
};

export default CreateNewMeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    color: "#000000",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    height: 55,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    marginLeft: 5,
    marginRight: 5,
  },
  textArea: {
    color: "#000000",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    height: "15%",
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    marginLeft: 5,
    marginRight: 5,
  },
  buttonStyleLogin: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#41b825",
    width: width * 0.4,
    height: 53,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonTextStyleLogin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  buttonStyle: {
    backgroundColor: "#41b825",
    borderWidth: 1.5,
    borderColor: "#41b825",
    width: width * 0.4,
    height: 53,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
});
