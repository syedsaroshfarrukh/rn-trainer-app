// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef, useEffect, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loginervices from "../services/loginService";
import Loader from "./Components/Loader";
import DropdownAlert from "react-native-dropdownalert";
import loginValidationSchema from "../validations/loginValidationsSchema";
import { auth, db } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();
  let dropDownAlertRef = useRef();

  function trainerNavigationFunction() {
    navigation.replace("DrawerNavigationRoutes");
  }
  function clientNavigationFunction() {
    navigation.replace("DrawerNavigationRoutesClient");
  }
  const userSignup = async (email, password) => {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      console.log(result);
      db.collection("users").doc(result.user.uid).set({
        name: "Trainer",
        email: result.user.email,
        uid: result.user.uid,
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU",

        status: "online",
      });

      alert("Success");
    } catch (err) {
      alert(err);
    }
  };

  const userLogin = async (email, password) => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log(result);
    } catch (err) {
      alert("Email Pr Password Not Correct");
    }
  };
  return (
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
          style={{ height: "45%", width: "45%", top: 10 }}
        />
      </View>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          setLoading(true);
          console.log(toggle1);
          toggle1 === true
            ? loginervices
                .loginTrainer({
                  email: values.email,
                  password: values.password,
                })
                .then((res) => {
                  // setIsLoading(false);
                  // dropDownAlertRef.alertWithType(
                  //   "success",
                  //   "User Registered Successfully"
                  // );
                  let userObject = {
                    id: res.data.success.user.id,
                    role: res.data.success.role[0],
                    firstName: res.data.success.user.first_name,
                    lastName: res.data.success.user.last_name,
                    email: res.data.success.user.email,
                    token: res.data.success.token,
                    profileImage: res.data.success.user.profile_image,
                  };
                  dropDownAlertRef.alertWithType(
                    "success",
                    "Login Successfull"
                  );
                  AsyncStorage.setItem("user", JSON.stringify(userObject));
                  if (res.data.success.role[0] === "trainer") {
                    setTimeout(trainerNavigationFunction, 1000);
                  }

                  setLoading(false);
                  userLogin(values.email, "zaqxswcde1");
                })
                .catch((error) => {
                  // setIsLoading(false); // For hiding loader
                  // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
                  console.log(error);
                  dropDownAlertRef.alertWithType(
                    "error",
                    "Invalid Credentials Or Trainer Doesn't Exsist"
                  );
                  setLoading(false);
                })
            : loginervices
                .loginClient({
                  email: values.email,
                  password: values.password,
                })
                .then(async (res) => {
                  console.log(res.data);

                  let userObject = {
                    id: res.data.success.user.id,
                    role: res.data.success.role[0],
                    firstName: res.data.success.user.first_name,
                    lastName: res.data.success.user.last_name,
                    email: res.data.success.user.email,
                    token: res.data.success.token,
                    profileImage: res.data.success.user.profile_image,
                  };
                  dropDownAlertRef.alertWithType(
                    "success",
                    "Login Successfull"
                  );

                  setLoading(false);
                  const querySanp = await db
                    .collection("users")
                    .where("email", "==", values.email)
                    .get();
                  const allusers = querySanp.docs.map((docSnap) =>
                    docSnap.data()
                  );

                  console.log("sjashjajshjahsjahsj", allusers);
                  if (
                    allusers.length === 1 &&
                    allusers[0].email === values.email
                  ) {
                    userLogin(values.email, "zaqxswcde1");
                    console.log("CLient Logged In");
                    AsyncStorage.setItem("user", JSON.stringify(userObject));
                    if (
                      res.data.success.role[0] === "client" &&
                      res.data.success.user.active === 1
                    ) {
                      clientNavigationFunction();
                    } else {
                      navigation.replace("PricingAuth", {
                        id: res.data.success.user.id,
                      });
                    }
                  } else {
                    try {
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
                      // navigation.replace("HomeScreen");
                      // alert("Success");
                      AsyncStorage.setItem("user", JSON.stringify(userObject));
                      if (
                        res.data.success.role[0] === "client" &&
                        res.data.success.user.active === 1
                      ) {
                        clientNavigationFunction();
                      } else {
                        navigation.replace("PricingAuth", {
                          id: res.data.success.user.id,
                        });
                      }
                    } catch (err) {
                      alert(err);
                    }
                  }
                })
                .catch((error) => {
                  // setIsLoading(false); // For hiding loader
                  // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
                  console.log(error);
                  console.log(values);
                  dropDownAlertRef.alertWithType(
                    "error",
                    "Invalid Credentials Or Client Doesn't Exsist"
                  );
                  setLoading(false);
                });
        }}
        validationSchema={loginValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View style={styles.cardBody}>
            <View
              style={{
                flex: 0.22,
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setToggle(true);
                  setToggle1(false);
                }}
                style={{
                  flexDirection: "column",
                  backgroundColor: toggle ? "#42B825" : "transparent",
                  height: "100%",
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: 50,
                }}
              >
                <View>
                  <Text
                    style={{
                      ...styles.SignInButtons,
                      color: toggle ? "#FFFFFF" : "#000000",
                    }}
                  >
                    Login As Client
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setToggle(false);
                  setToggle1(true);
                }}
                style={{
                  flexDirection: "column",
                  backgroundColor: toggle1 ? "#42B825" : "transparent",
                  height: "100%",
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: 50,
                }}
              >
                <View>
                  <Text
                    style={{
                      ...styles.SignInButtons,
                      color: toggle1 ? "#FFFFFF" : "#000000",
                    }}
                  >
                    Login As Trainer
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.textCardBodyHeader}>Welcome Back</Text>
            <View style={{ flex: 1 }}>
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
                autoCapitalize="none"
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
                    marginBottom: "2%",
                  }}
                >
                  {errors.password}
                </Text>
              )}

              <TouchableOpacity style={styles.touchableOpacity}>
                <Text style={{ color: "#053CFF" }}>Forgot Password ?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonTextStyle}>{`${
                  toggle ? "Sign In As Client" : "Sign In As Trainer"
                }`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <View style={styles.belowCardArea}>
        <View style={styles.belowCardAreaView}>
          <Text style={styles.belowCardText}> Don't have an account? </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: "400",
                color: "#053CFF",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Click Here To Sign Up
            </Text>
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
  );
};
export default LoginScreen;

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
    flex: 3,
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
  belowCardAreaView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: "30%",
  },
  textCardBodyHeader: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 40,
    marginBottom: "5%",
  },
  SignInButtons: {
    fontSize: 18,
    fontWeight: "500",
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
    justifyContent: "center",
    borderRadius: 8,
    marginLeft: 39,
    marginRight: 39,
    marginBottom: 25,
    marginTop: "3%",
  },
  touchableOpacity: {
    marginLeft: 39,
    marginRight: 39,
    marginBottom: 15,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    alignItems: "center",
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
});
