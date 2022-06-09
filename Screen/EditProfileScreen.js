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
import loginService from "../services/loginService";
import profileValidationSchema from "../validations/profileValidationSchema";

const { width, height } = Dimensions.get("window");

const EditProfileScreen = () => {
  const [loading, setLoading] = useState(false);
  const [user, seUser] = useState(false);

  let dropDownAlertRef = useRef();

  useEffect(() => {
    setLoading(true);
    loginService
      .getTrainerProfile()
      .then((res) => {
        seUser(res.data.user);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        firstName: user && user.first_name ? user.first_name : "",
        lastName: user && user.last_name ? user.last_name : "",
        email: user && user.email ? user.email : "",
        phoneNo: user && user.phone ? user.phone.toString() : "",
      }}
      onSubmit={(values) => {
        console.log("user", user);
        console.log(values);
        setLoading(true);
        loginService
          .updateTrainerProfile({
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            phone: values.phoneNo,
          })
          .then((res) => {
            console.log("response", res.data);
            dropDownAlertRef.alertWithType("success", "Profile Updated");
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
      validationSchema={profileValidationSchema}
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
                  placeholder="First Name"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                />
                {errors.firstName && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                      marginLeft: "2%",
                      marginTop: "-2%",
                    }}
                  >
                    {errors.firstName}
                  </Text>
                )}
                <TextInput
                  style={styles.inputStyle}
                  underlineColorAndroid="#f000"
                  placeholder="Last Name"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="sentences"
                  returnKeyType="next"
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                />
                {errors.lastName && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                      marginLeft: "2%",
                      marginTop: "-2%",
                    }}
                  >
                    {errors.lastName}
                  </Text>
                )}
                <TextInput
                  style={styles.inputStyle}
                  underlineColorAndroid="#f000"
                  placeholder="Email"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {errors.email && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                      marginLeft: "2%",
                      marginTop: "-2%",
                    }}
                  >
                    {errors.email}
                  </Text>
                )}
                <TextInput
                  style={styles.inputStyle}
                  underlineColorAndroid="#f000"
                  placeholder="Phone Number"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onChangeText={handleChange("phoneNo")}
                  onBlur={handleBlur("phoneNo")}
                  value={values.phoneNo}
                />
                {errors.phoneNo && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                      marginLeft: "2%",
                      marginTop: "-2%",
                    }}
                  >
                    {errors.phoneNo}
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

export default EditProfileScreen;

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
