import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import DropdownAlert from "react-native-dropdownalert";
import Loader from "./Components/Loader";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import moment from "moment";
import nutritionPlanService from "../services/nutritionPlanService";

const { width, height } = Dimensions.get("window");

const CreateNewMeal = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");
  console.log(props);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  let dropDownAlertRef = useRef();

  function mealListScreen() {
    navigation.navigate("TopBarScreenNutrition", { id: props.route.params.id });
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
      }}
      onSubmit={(values, { resetForm }) => {
        console.log({
          name: values.MealName,
          time: moment(date).format("HH:mm:00"),
          weekly_plan_id: props.route.params.id,
        });
        setLoading(false);
        nutritionPlanService
          .addNutritionMeal({
            name: values.MealName,
            time: moment(date).format("HH:mm:00"),
            weekly_plan_id: props.route.params.id,
          })
          .then((res) => {
            console.log("response", res.data);
            dropDownAlertRef.alertWithType("success", "Meal Added In Days");
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

            <TouchableOpacity onPress={showDatePicker}>
              <LinearGradient
                colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
                {...deg(140)}
                style={stylesSidebar.drawerContainerCard}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignContent: "center",
                      flex: 5,
                      left: "25%",
                    }}
                  >
                    <Text style={stylesSidebar.drawerTitle}>
                      {date
                        ? `Selected Time : ${moment(date).format("h:mm a")}`
                        : "Select Time"}
                    </Text>
                  </View>
                  <View style={stylesSidebar.drawerContainerCardIcon}>
                    <SvgUri
                      source={require("../Image/arrow.svg")}
                      style={{
                        height: 11.5,
                        width: 7.5,
                      }}
                    />
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
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

const stylesSidebar = StyleSheet.create({
  drawerContainerCardIcon: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
  },

  linearGradient: {
    borderRadius: 5,
  },
  drawerContainerCard: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: "5%",
  },
  drawerTitle: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },
  drawerTitleDescription: {
    marginTop: "2%",
    fontSize: 12,
    color: "#5E5E5E",
    fontWeight: "400",
  },
});
