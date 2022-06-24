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
import React, { useEffect, useState, useRef } from "react";
import SvgUri from "expo-svg-uri";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import { Formik } from "formik";
import Loader from "../Components/Loader";
import DropdownAlert from "react-native-dropdownalert";
import clientValidation from "../../validations/clientValidation";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import groupUserInfo from "../../configurations/groupUserInfo";
import clientService from "../../services/clientService";

const { width, height } = Dimensions.get("window");

const AddClient = (props) => {
  const [loading, setLoading] = useState(false);
  const [group, setGroup] = useState(false);

  let dropDownAlertRef = useRef();
  const navigation = useNavigation();

  const focused = useIsFocused();

  const _retrieveData = async () => {
    try {
      const value = await groupUserInfo.loadInfo();
      if (value !== null) {
        // We have data!!
        setGroup(value);
        console.log("---value---", value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    _retrieveData();
  }, [focused]);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={(values, { resetForm }) => {
        setLoading(true);

        clientService
          .addNewClient({
            email: values.email,
            first_name: values.firstName,
            last_name: values.lastName,
            group_id: [group.id],
          })
          .then((res) => {
            console.log(values);
            // setIsLoading(false);
            // dropDownAlertRef.alertWithType(
            //   "success",
            //   "User Registered Successfully"
            // );
            // let userObject = {
            //   id: res.data.success.user.id,
            //   role: res.data.success.role[0],
            //   firstName: res.data.success.user.first_name,
            //   lastName: res.data.success.user.last_name,
            //   email: res.data.success.user.email,
            //   token: res.data.success.token,
            // };
            dropDownAlertRef.alertWithType(
              "success",
              "Client Added Successfull"
            );
            resetForm();

            setLoading(false);
          })
          .catch((error) => {
            // setIsLoading(false); // For hiding loader
            // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
            console.log(error);
            console.log(values);
            dropDownAlertRef.alertWithType("error", "Error");
            setLoading(false);
          });
      }}
      validationSchema={clientValidation}
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
            <View style={styles.topTextView}>
              <Text style={styles.topTextStyle}>Add Client</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.firstRow}>
                <Image
                  source={require("../../Image/logo-small.png")}
                  style={{ height: 150, width: 150, top: 10 }}
                />
              </View>
              <View style={styles.secondRow}>
                <TextInput
                  style={styles.inputStyle}
                  underlineColorAndroid="#f000"
                  placeholder="First Name"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="sentences"
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
                      marginBottom: "2%",
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
                      marginBottom: "2%",
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
                      marginBottom: "2%",
                    }}
                  >
                    {errors.email}
                  </Text>
                )}

                <TouchableOpacity
                  onPress={() => navigation.navigate("GroupsListScreen")}
                >
                  {group ? (
                    <LinearGradient
                      colors={[
                        "rgba(220, 220, 220, 0.29)",
                        "rgba(255, 255, 255, 0)",
                      ]}
                      {...deg(140)}
                      style={styles.inputStyle}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontSize: 16, fontWeight: "400" }}>
                            Group
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 5,
                            alignItems: "flex-end",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: "400",
                              color: "#989898",
                              left: "5%",
                            }}
                          >
                            {group.title}
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 0.5,
                            alignItems: "flex-end",
                          }}
                        >
                          <SvgUri source={require("../../Image/arrow.svg")} />
                        </View>
                      </View>
                    </LinearGradient>
                  ) : (
                    <LinearGradient
                      colors={[
                        "rgba(220, 220, 220, 0.29)",
                        "rgba(255, 255, 255, 0)",
                      ]}
                      {...deg(140)}
                      style={styles.inputStyle}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View style={{ flex: 2 }}>
                          <Text style={{ fontSize: 16, fontWeight: "400" }}>
                            Group
                          </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "flex-end" }}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: "400",
                              color: "#989898",
                              left: "15%",
                            }}
                          >
                            Select Group
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 0.5,
                            left: "30%",
                          }}
                        >
                          <SvgUri source={require("../../Image/arrow.svg")} />
                        </View>
                      </View>
                    </LinearGradient>
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.thirdRow}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image source={require("../../Image/plus-button.png")} />
                    <Text style={styles.buttonTextStyle}>Add Client</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <DropdownAlert
            updateStatusBar={false}
            defaultContainer={{ padding: 15, paddingTop: 15 }}
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

export default AddClient;

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {
    flex: 0.1,
  },
  container: {
    flex: 1.9,
  },
  firstRow: {
    flex: 1,

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
    marginLeft: 10,
  },
});
