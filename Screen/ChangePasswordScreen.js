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
import loginService from "../services/loginService";

const { width, height } = Dimensions.get("window");

const ChangePasswordScreen = () => {
  const [loading, setLoading] = useState(false);

  let dropDownAlertRef = useRef();

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        setLoading(true);
        loginService
          .updateTrainerProfile({
            password: values.password,
          })
          .then((res) => {
            console.log("response", res.data);
            dropDownAlertRef.alertWithType("success", "Password Changed");
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            dropDownAlertRef.alertWithType(
              "error",
              "Invalid Email or Password"
            );
            setLoading(false);
          });
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
          <Loader loading={loading} />
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
                  secureTextEntry={true}
                />
                {errors.password && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                      marginLeft: "2%",
                      marginTop: "-2%",
                    }}
                  >
                    {errors.password}
                  </Text>
                )}
                <TextInput
                  style={styles.inputStyle}
                  underlineColorAndroid="#f000"
                  placeholder="Confirm Password"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={true}
                />
                {errors.confirmPassword && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                      marginLeft: "2%",
                      marginTop: "-2%",
                    }}
                  >
                    {errors.confirmPassword}
                  </Text>
                )}

                <View
                  style={{ flex: 1, alignItems: "center", marginTop: "2%" }}
                >
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonTextStyle}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
