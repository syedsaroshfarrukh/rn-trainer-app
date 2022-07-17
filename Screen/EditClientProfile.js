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
  Switch,
  Platform,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Formik } from "formik";
import Loader from "./Components/Loader";
import DropdownAlert from "react-native-dropdownalert";
import loginService from "../services/loginService";
import clientService from "../services/clientService";
import profileValidationSchema from "../validations/profileValidationSchema";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import { setEnabled } from "react-native/Libraries/Performance/Systrace";

const { width, height } = Dimensions.get("window");

const EditProfileScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [user, seUser] = useState(false);
  const [userDetails, setUserDetails] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const focused = useIsFocused();

  const clientId = props?.route?.params?.clientId;

  let dropDownAlertRef = useRef();
  useEffect(() => {
    // async function AsyncStorageDataLoad() {
    //   let userDetail = await AsyncStorage.getItem("user");
    //   let parsed = JSON.parse(userDetail);
    //   setUserDetails(parsed);
    //   console.log("client details", parsed);
    // }
    // AsyncStorageDataLoad();
  }, []);

  useEffect(() => {
    if (clientId) {
      clientService
        .getSingleClient(clientId)
        .then((res) => {
          console.log(res.data.user[0]);
          seUser(res.data.user[0]);
          if (res.data.user[0].active === 1) {
            setIsEnabled(true);
          } else {
            setIsEnabled(false);
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log("Error", error);
        });
    }
  }, [focused, userDetails]);

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
        setLoading(true);
        clientService
          .clientUpdateSetting({
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            phone: values.phoneNo,
            id: clientId,
            active: isEnabled === true ? 1 : 0,
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
      //   validationSchema={profileValidationSchema}
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
                {/* <TextInput
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
                )} */}
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
                <LinearGradient
                  style={styles.cardTwo}
                  colors={[
                    "rgba(220, 220, 220, 0.29)",
                    "rgba(255, 255, 255, 0)",
                  ]}
                  {...deg(140)}
                >
                  <View style={styles.containerRowOne}>
                    <View style={styles.colOneContainer}>
                      <Text style={styles.Text}>Active</Text>
                    </View>
                    <View style={styles.colTwoContainer}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Switch
                          style={{
                            transform: [
                              { scaleX: Platform.OS === "android" ? 1.1 : 0.7 },
                              { scaleY: Platform.OS === "android" ? 1.1 : 0.7 },
                            ],
                          }}
                          trackColor={{ true: "#41B825" }}
                          thumbColor="#FFFFFF"
                          ios_backgroundColor="gray"
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                        />
                      </View>
                    </View>
                  </View>
                </LinearGradient>
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
  cardTwo: {
    marginBottom: "5%",
    height: 60,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  containerRowOne: {
    flex: 1,

    flexDirection: "row",
  },
  colOneContainer: {
    flex: 4,

    justifyContent: "center",
    left: "15%",
  },
  Text: {
    fontSize: 14,
    fontWeight: "400",
    left: "5%",
  },
  colTwoContainer: {
    flex: 1,
    flexDirection: "row",
    right: "3%",
  },
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
