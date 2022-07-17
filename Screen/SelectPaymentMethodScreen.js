// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef, useEffect } from "react";
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
import { useNavigation, useIsFocused } from "@react-navigation/native";

import Loader from "./Components/Loader";

const SelectPaymentMethodScreen = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const [title, setTitle] = useState("");

  const navigation = useNavigation();

  //   useEffect(() => {
  //     async function AsyncStorageDataLoad() {
  //       let user = await AsyncStorage.getItem("user_id");
  //       setTitle(user);
  //       console.log(user);
  //     }

  //     AsyncStorageDataLoad();
  //   }, []);

  return (
    <View style={styles.mainBody}>
      <View style={{ alignItems: "center", flex: 2, marginTop: 50 }}>
        <Image
          source={require("../Image/logo-small.png")}
          style={{ height: "70%", width: "70%", top: 10 }}
        />
      </View>
      <View style={styles.cardBody}>
        <View style={styles.lineStyle}></View>
        <Text style={styles.textCardBodyHeader}>Select Payment Method</Text>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.buttonStyleLogin}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("PaypalPayment", {
                dealDetails: props?.route?.params?.dealDetails,
              })
            }
          >
            <Text style={styles.buttonTextStyleLogin}>Paypal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("StripePayment", {
                dealDetails: props?.route?.params?.dealDetails,
              })
            }
          >
            <Text style={styles.buttonTextStyle}>Credit / Debit Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SelectPaymentMethodScreen;

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
    flex: 1.35,
    backgroundColor: "#DEE3E5",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  belowCardText: {
    fontSize: 12,
    textAlign: "center",
    color: "#787878",
    marginTop: 15,
  },
  belowCardArea: {
    flex: 0.2,
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
    marginTop: 20,
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
    marginTop: 40,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyleLogin: {
    color: "#000000",
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
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    color: "#FFFFFF",

    fontSize: 20,
    fontWeight: "500",
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
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
