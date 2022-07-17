import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import GroupMemberCard from "./Components/GroupMemberCard";
import Loader from "./Components/Loader";
import clientService from "../services/clientService";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import moment from "moment";
import DropdownAlert from "react-native-dropdownalert";

const { width, height } = Dimensions.get("window");

const AssignClientScreen = (props) => {
  const [filterdUser, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  let dropDownAlertRef = useRef();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };
  console.log("wowowoow", props);
  let clientId =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.clientId &&
    props.route.params.clientId;

  let planTemplateId =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.planTemplateId &&
    props.route.params.planTemplateId;

  let weekNumber =
    props &&
    props.route &&
    props.route.params &&
    props.route.params.weekNumber &&
    props.route.params.weekNumber;

  // useEffect(() => {
  //   setLoading(true);
  //   groupService
  //     .getAllGroupMembers(props.route.params.groupId)
  //     .then((res) => {
  //       let array = [];
  //       let array1 = [];
  //       let unique = [];
  //       res.data.user.map((item) => {
  //         array.push(item);
  //       });
  //       res.data.group_user.map((item) => {
  //         array1.push(item);
  //       });
  //       const result = array.filter((col) => {
  //         return array1[0].group_user.find((selected) => selected.id == col.id);
  //       });
  //       console.log("----Group Members----", result);

  //       // for (var i = 0; i < array.length; i++) {
  //       //   var found = false;

  //       //   for (var j = 0; j < result.length; j++) {
  //       //     // j < is missed;
  //       //     if (array[i] == result[j]) {
  //       //       found = true;
  //       //       break;
  //       //     }
  //       //   }
  //       //   if (found == false) {
  //       //     unique.push(array[i]);
  //       //   }
  //       // }
  //       // console.log("---Unique Array---", unique);

  //       setFilteredUsers(result);
  //       // setUniqueMembers(unique);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //       setLoading(false);
  //     });
  // }, [isFocused]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loader loading={loading} />
      <View style={{ flex: 0.85, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ClientListAssignNutritionPlan", {
              planTemplateId: planTemplateId,
              weekNumber: weekNumber,
            })
          }
        >
          <LinearGradient
            colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
            {...deg(140)}
            style={stylesSidebar.drawerContainerCard}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    left: "5%",
                  }}
                >
                  {props &&
                  props.route &&
                  props.route.params &&
                  props.route.params.clientName
                    ? `Selected Client : ${props.route.params.clientName}`
                    : "Select Client"}
                </Text>
              </View>
              {/* <View
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <CheckBox
              style={{ flex: 1, padding: 10 }}
              onClick={() => {
                setIsChecked1(!isChecked1);
                if (state === false) {
                  array.push(...array, id);
                  setState(array);
                  console.log(array);
                }
              }}
              isChecked={isChecked1}
              checkBoxColor="#41B825"
            />
          </View> */}
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={showDatePicker}>
          <LinearGradient
            colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
            {...deg(140)}
            style={stylesSidebar.drawerContainerCard}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    left: "5%",
                  }}
                >
                  {date
                    ? `Selected Date : ${moment(date).format("Do MMM, YYYY")}`
                    : "Select Date"}
                </Text>
              </View>
              {/* <View
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <CheckBox
              style={{ flex: 1, padding: 10 }}
              onClick={() => {
                setIsChecked1(!isChecked1);
                if (state === false) {
                  array.push(...array, id);
                  setState(array);
                  console.log(array);
                }
              }}
              isChecked={isChecked1}
              checkBoxColor="#41B825"
            />
          </View> */}
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("jhsjahdah", {
              week_id: weekNumber,
              plan_id: planTemplateId,
              client_id: clientId,
              start_date: moment(date).format("YYYY-MM-DD"),
            });
            clientService
              .assignNutrition({
                week_id: weekNumber,
                plan_id: planTemplateId,
                client_id: [clientId],
                start_date: moment(date).format("YYYY-MM-DD"),
              })
              .then((res) => {
                dropDownAlertRef.alertWithType(
                  "success",
                  "Nutrition Plan Assigned"
                );
                setLoading(false);

                navigation.navigate("TopBarScreenNutrition");
              })
              .catch((error) => {
                console.log(error);
                dropDownAlertRef.alertWithType("error", "Error");
                setLoading(false);
              });
          }}
        >
          <Text style={styles.buttonTextStyle}>Assign Client</Text>
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

export default AssignClientScreen;

const styles = StyleSheet.create({
  buttonView: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
const stylesSidebar = StyleSheet.create({
  drawerContainerCardIcon: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
  },

  linearGradient: {
    borderRadius: 5,
  },
  drawerContainerCard: {
    marginTop: "5%",
    justifyContent: "flex-start",
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.85,
    height: width * 0.12,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
  },
  drawerTitle: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },
  drawerTitleDescription: {
    marginTop: "2%",
    fontSize: 12,
    color: "#5E5E5E",
    fontWeight: "400",
  },
});
