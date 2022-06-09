import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Formik } from "formik";
import Loader from "./Components/Loader";
import DropdownAlert from "react-native-dropdownalert";
import changePasswordValidation from "../validations/changePasswordValidations";

const { width, height } = Dimensions.get("window");

const ChangePasswordScreen = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        console.log("user", user);
        // console.log(values);
        // setLoading(true);
        // loginService
        //   .updateTrainerProfile({
        //     first_name: values.firstName,
        //     last_name: values.lastName,
        //     email: values.email,
        //     phone: values.phoneNo,
        //   })
        //   .then((res) => {
        //     console.log("response", res.data);
        //     dropDownAlertRef.alertWithType("success", "Profile Updated");
        //     setLoading(false);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     dropDownAlertRef.alertWithType(
        //       "error",
        //       "Invalid Email or Password"
        //     );
        //     setLoading(false);
        //   });
      }}
      validationSchema={changePasswordValidation}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
          }}
        >
          <View style={{ flex: 1, padding: 16 }}>
            <View style={styles.container}>
              <View style={styles.firstRow}>
                <Image
                  source={require("../Image/logo-small.png")}
                  style={{ height: 188, width: 188, top: 10 }}
                />
              </View>
              <View style={styles.secondRow}>
                <TextInput
                  style={styles.inputStyle}
                  underlineColorAndroid="#f000"
                  placeholder="Enter Password"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <TextInput
                  style={styles.inputStyle}
                  underlineColorAndroid="#f000"
                  placeholder="Confirm Password"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onChangeText={handleChange("confirm password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />

                <View
                  style={{ flex: 1, alignItems: "center", marginTop: "2%" }}
                >
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTextStyle} onPress={handleSubmit}>
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {
    flex: 0.1,
  },
  container: {
    flex: 1,
  },
  firstRow: {
    flex: 1,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  secondRow: {
    flex: 3,
    marginTop: 30,
  },
  thirdRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  },
});
