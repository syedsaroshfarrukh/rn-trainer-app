import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import SelectVideoButton from "./Components/SelectVideoButton";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import excerciseService from "../services/excerciseService";
import DropdownAlert from "react-native-dropdownalert";
import Loader from "./Components/Loader";
import SelectVideoButtonUpdated from "./Components/SelectVideoButtonUpdated";

const { width, height } = Dimensions.get("window");

const CreateNewExcercise = (props) => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  let dropDownAlertRef = useRef();

  function excerciseListScreen() {
    navigation.navigate("ExcerciseListScreen");
  }

  console.log("props--------------------", props);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        ExcerciseName: "",
        ExcerciseType: "Strength",
        Notes: "",
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        setLoading(true);
        excerciseService
          .addNewExcercie({
            name: values.ExcerciseName,
            video:
              props &&
              props.route &&
              props.route.params &&
              props.route.params.youtubeLink
                ? props.route.params.youtubeLink
                : "",
            type: values.ExcerciseType,
            notes: values.Notes,
            thumbnail:
              props &&
              props.route &&
              props.route.params &&
              props.route.params.thumbnails
                ? props.route.params.thumbnails
                : "",
          })
          .then((res) => {
            console.log("response", res.data);
            dropDownAlertRef.alertWithType("success", "Excercise Added");
            setLoading(false);
            resetForm();
            setTimeout(excerciseListScreen, 800);
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
      }) => (
        <View style={{ flex: 1, padding: 16, backgroundColor: "#FFFFFF" }}>
          <Loader loading={loading} />
          <View style={styles.container}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Excercise Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onChangeText={handleChange("ExcerciseName")}
              onBlur={handleBlur("ExcerciseName")}
              value={values.ExcerciseName}
            />

            <RadioButtonGroup
              containerStyle={{
                flexDirection: "row",
                width: "50%",
                justifyContent: "space-between",
                left: "1%",
              }}
              selected={values.ExcerciseType}
              onSelected={handleChange("ExcerciseType")}
              radioBackground="#41B825"
            >
              <RadioButtonItem
                value="Strength"
                label={
                  <Text
                    style={{
                      color: "#333333",
                      fontSize: 16,
                      fontWeight: "400",
                    }}
                  >
                    Strength
                  </Text>
                }
              />
              <RadioButtonItem
                value="Cardio"
                label={
                  <Text
                    style={{
                      color: "#333333",
                      fontSize: 16,
                      fontWeight: "400",
                    }}
                  >
                    Cardio
                  </Text>
                }
              />
            </RadioButtonGroup>

            {props &&
            props.route &&
            props.route.params &&
            props.route.params.thumbnails ? (
              <SelectVideoButtonUpdated
                title={props.route.params.videoTitle}
                thumbnail={props.route.params.thumbnails}
              />
            ) : (
              <SelectVideoButton />
            )}

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

export default CreateNewExcercise;

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
