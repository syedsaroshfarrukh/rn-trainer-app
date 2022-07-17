import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  Share,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import LogFreeStyleWorkoutCard from "../Components/LogFreeStyleWorkoutCard";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import workoutService from "../../services/workoutService";
import moment from "moment";
import DropdownAlert from "react-native-dropdownalert";
import Loader from "../Components/Loader";

const { width, height } = Dimensions.get("window");

const LogWorkoutScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [excerciseArray, setExcerciseArray] = useState([]);
  const [excerciseArray1, setExcerciseArray1] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState([{}]);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  let date = new Date();
  let dropDownAlertRef = useRef();

  let array = [];
  let array1 = [];

  useEffect(() => {
    if (isFocused) {
      let title =
        props &&
        props.route &&
        props.route.params &&
        props.route.params.title &&
        props.route.params.title;
      let id =
        props &&
        props.route &&
        props.route.params &&
        props.route.params.id &&
        props.route.params.id;

      if (title !== undefined && id !== undefined) {
        array.push(...excerciseArray, title);
        array1.push(...excerciseArray1, id);
        setExcerciseArray(array);
        setExcerciseArray1(array1);
      }
      console.log(array1);
    }
  }, [props]);

  useEffect(() => {
    setLoading(true);
    workoutService
      .getTodayFreeStyleWorkout(moment(date).format("YYYY-MM-DD"))
      .then((res) => {
        console.log("Response", moment(date).format("YYYY-MM-DD"));
        res.data.workout[0].relation.map((item) => {
          array.push(...excerciseArray, item.name);
          array1.push(...excerciseArray1, item.id);
          setExcerciseArray(array);
          setExcerciseArray1(array1);
        });
        setText(res.data.workout[0].description);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View style={styles.rowOne}>
        <LinearGradient
          style={styles.textCard}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.ChildViewStyle}>
            <TextInput
              placeholder="How did it go ?"
              underlineColorAndroid="transparent"
              multiline={true}
              onChangeText={(value) => setText(value)}
              defaultValue={text}
            />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.rowTwo}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {excerciseArray.length >= 1 ? (
            excerciseArray.map((item, key) => {
              return <LogFreeStyleWorkoutCard title={`${item}`} />;
            })
          ) : (
            <Text></Text>
          )}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddExcerciseListScreen", {
                ExcerciseArray: excerciseArray,
              })
            }
          >
            <LinearGradient
              style={styles.cardTwo}
              colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
              {...deg(140)}
            >
              <View style={styles.containerRowOne}>
                <View style={styles.colOneContainer}>
                  <Text style={styles.Text}>Add Excercise</Text>
                </View>
                <View style={styles.colTwoContainer}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <SvgUri
                      source={require("../../Image/Plus-Card-Icon.svg")}
                      style={{ alignItems: "center", justifyContent: "center" }}
                    />
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <LinearGradient
            style={styles.cardTwo}
            colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
            {...deg(140)}
          >
            <View style={styles.containerRowOne}>
              <View style={styles.colOneContainer}>
                <Text style={styles.Text}>Share On News Feed</Text>
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
                    style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                    trackColor="#41B825"
                    thumbColor="#FFFFFF"
                    ios_backgroundColor="gray"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("Obejctgshgs", {
              description: text,
              date: moment(date).format("YYYY-MM-DD"),
              exercise_id: `[${excerciseArray1}]`,
              share: isEnabled === true ? "1" : "0",
            });
            workoutService
              .addTodayFreeStyleWorkout({
                description: text,
                date: moment(date).format("YYYY-MM-DD"),
                exercise_id: `[${excerciseArray1}]`,
                share: isEnabled === true ? 1 : 0,
              })
              .then((res) => {
                navigation.navigate("DrawerNavigationRoutesClient");
                dropDownAlertRef.alertWithType("success", "Logged Workout");
                console.log("Response", res.data);
              })
              .catch((error) => {
                console.log("Error", error);
              });
          }}
        >
          <Text style={styles.buttonTextStyle}>Save</Text>
        </TouchableOpacity>
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
  );
};

export default LogWorkoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  rowOne: {
    flex: 0.22,
    alignItems: "center",
  },
  textCard: {
    top: "13%",
    width: width * 0.85,
    height: width * 0.4,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
  },
  textArea: {
    top: "7%",
    color: "#000000",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#BDBDBD",
    height: width * 0.55,
    width: width * 0.85,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
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
  colTwoContainer: {
    flex: 1,
    flexDirection: "row",
    right: "3%",
  },
  Text: {
    fontSize: 14,
    fontWeight: "400",
  },
  ChildViewStyle: {
    width: "100%",
    padding: 10,
  },
  rowTwo: {
    flex: 0.7,
    alignItems: "center",
    marginTop: "10%",
  },
  cardTwo: {
    marginBottom: "5%",
    width: width * 0.85,
    height: width * 0.18,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
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
  buttonView: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
});
