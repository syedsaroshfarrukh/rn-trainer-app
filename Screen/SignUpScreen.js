// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef } from "react";
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

import Loader from "./Components/Loader";

const SignUpScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    setLoading(true);
    let dataToSend = { email: userEmail, password: userPassword };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      body: formBody,
      headers: {
        //Header Defination
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === "success") {
          AsyncStorage.setItem("user_id", responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace("DrawerNavigationRoutes");
        } else {
          setErrortext(responseJson.msg);
          console.log("Please check your email id or password");
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
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
          style={{ height: "45%", width: "45%", top: 15 }}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.textCardBodyHeader}>Create Your Account</Text>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="#f000"
            placeholder="Full Name"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="sentences"
            returnKeyType="next"
            // // onSubmitEditing={() =>
            // //   emailInputRef.current && emailInputRef.current.focus()
            // // }
            // blurOnSubmit={false}
          />
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="#f000"
            placeholder="Email"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="sentences"
            returnKeyType="next"
            // // onSubmitEditing={() =>
            // //   emailInputRef.current && emailInputRef.current.focus()
            // // }
            // blurOnSubmit={false}
          />
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="#f000"
            placeholder="Password"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="sentences"
            returnKeyType="next"
            secureTextEntry={true}
            // // onSubmitEditing={() =>
            // //   emailInputRef.current && emailInputRef.current.focus()
            // // }
            // blurOnSubmit={false}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.belowCardArea}>
        <Text style={styles.belowCardText}> Already have an account ? </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "400", paddingTop: "3.5%" }}>
            Click Here To Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginTop: 15,
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
});