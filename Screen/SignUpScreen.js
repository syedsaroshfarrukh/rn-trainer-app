// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import Loader from "./Components/Loader";
import signupValidationsSchema from "../validations/signupValidationsSchema";
import clientService from "../services/clientService";
import DropdownAlert from "react-native-dropdownalert";
import { auth, db } from "../firebase";

const SignUpScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  let dropDownAlertRef = useRef();

  function clientNavigationFunction() {
    navigation.replace("PricingAuth");
  }

  return (
    <Formik
      initialValues={{
        fName: "",
        lName: "",
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        setLoading(true);
        clientService
          .registerClient({
            first_name: values.fName,
            last_name: values.lName,
            email: values.email,
            password: values.password,
            confirm_password: values.password,
          })
          .then(async (res) => {
            console.log("Response", res.data);
            let userObject = {
              id: res.data.success.user.id,
              role: res.data.success.role[0],
              firstName: res.data.success.user.first_name,
              lastName: res.data.success.user.last_name,
              email: res.data.success.user.email,
              token: res.data.success.token,
            };
            dropDownAlertRef.alertWithType("success", "Client Created");
            AsyncStorage.setItem("user", JSON.stringify(userObject));

            const querySanp = await db
              .collection("users")
              .where("email", "==", values.email)
              .get();
            const allusers = querySanp.docs.map((docSnap) => docSnap.data());
            if (allusers.length === 0) {
              const result = await auth.createUserWithEmailAndPassword(
                values.email,
                "zaqxswcde1"
              );
              console.log("jsjsjsjsjsjsjsjsj", result);
              console.log("Firesbase Account Created");
              db.collection("users")
                .doc(result.user.uid)
                .set({
                  name: `${res.data.success.user.first_name} ${res.data.success.user.last_name}`,
                  email: result.user.email,
                  uid: result.user.uid,
                  pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU",
                  status: "online",
                });
            }
            if (res.data.success.role[0] === "client") {
              navigation.replace("PricingAuth", {
                id: res.data.success.user.id,
              });
            }

            setLoading(false);
          })
          .catch((err) => {
            console.log("Error", err);
            dropDownAlertRef.alertWithType("error", "Email Already Exsists");
            setLoading(false);
          });
      }}
      validationSchema={signupValidationsSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <KeyboardAwareScrollView
          contentContainerStyle={styles.mainBody}
          resetScrollToCoords={{ x: 0, y: 0 }}
        >
          <Loader loading={loading} />
          <View
            style={{
              alignItems: "center",
              flex: 2,
              marginTop: 50,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../Image/logo-small.png")}
              style={{ height: "70%", width: "45%", top: 15 }}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.textCardBodyHeader}>Create Your Account</Text>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#f000"
                placeholder="First Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onChangeText={handleChange("fName")}
                onBlur={handleBlur("fName")}
                value={values.fName}
              />
              {errors.fName && (
                <Text
                  style={{
                    fontSize: 10,
                    color: "red",
                    marginLeft: "8%",
                    marginTop: "-2%",
                  }}
                >
                  {errors.fName}
                </Text>
              )}
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#f000"
                placeholder="Last Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onChangeText={handleChange("lName")}
                onBlur={handleBlur("lName")}
                value={values.lName}
              />
              {errors.lName && (
                <Text
                  style={{
                    fontSize: 10,
                    color: "red",
                    marginLeft: "8%",
                    marginTop: "-2%",
                  }}
                >
                  {errors.lName}
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
                    marginLeft: "8%",
                    marginTop: "-2%",
                  }}
                >
                  {errors.email}
                </Text>
              )}
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#f000"
                placeholder="Password"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && (
                <Text
                  style={{
                    fontSize: 10,
                    color: "red",
                    marginLeft: "8%",
                    marginTop: "-2%",
                  }}
                >
                  {errors.password}
                </Text>
              )}
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonTextStyle}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.belowCardArea}>
            <View style={styles.belowCardAreaView}>
              <Text style={styles.belowCardText}>
                {" "}
                Already have an account ?{" "}
              </Text>
              <TouchableOpacity>
                <Text style={{ fontWeight: "400" }}>Click Here To Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <DropdownAlert
            updateStatusBar={false}
            defaultContainer={{ padding: 15, paddingTop: 45 }}
            ref={(ref) => {
              if (ref) {
                dropDownAlertRef = ref;
              }
            }}
          />
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#6D8591",
    alignContent: "center",
  },
  lineStyle: {
    borderWidth: 3,
    borderRadius: 50,
    borderColor: "black",
    marginLeft: 150,
    marginRight: 150,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: {
    flex: 4.5,
    backgroundColor: "#DEE3E5",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: "20%",
  },
  belowCardText: {
    fontSize: 14,
    textAlign: "center",
    color: "#787878",
  },
  belowCardArea: {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "#C1CCD1",
    bottom: 0,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textCardBodyHeader: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyleLogin: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    color: "green",
    borderColor: "black",
    height: 53,
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 39,
    marginRight: 39,
    marginTop: 20,
  },
  buttonTextStyleLogin: {
    color: "#000000",
    paddingVertical: 12,
    fontSize: 20,
    fontWeight: "500",
  },
  buttonStyle: {
    backgroundColor: "#41B825",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 53,
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 39,
    marginRight: 39,
    marginBottom: 25,
    marginTop: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 12,
    fontSize: 20,
    fontWeight: "500",
  },
  inputStyle: {
    color: "#000000",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    height: 55,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  registerTextStyle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },

  belowCardAreaView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: "30%",
  },
});
