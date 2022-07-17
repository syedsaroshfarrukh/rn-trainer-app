import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, Menu, Divider, Provider, List } from "react-native-paper";
import DotsSvg from "../../Image/dots-button.svg";
import SvgUri from "expo-svg-uri";
import workoutService from "../../services/workoutService";
import Loader from "./Loader";
import { useNavigation } from "@react-navigation/native";

const TrainerClientsMenu = ({ id }) => {
  const [showMenu, setShowMenu] = useState();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     marginRight: "10%",
    //   }}
    // >
    //   <Loader loading={loading} />
    <Menu
      style={{ width: "40%" }}
      contentStyle={{ fontSize: 4 }}
      visible={showMenu}
      onDismiss={() => setShowMenu(false)}
      anchor={
        <TouchableOpacity
          onPress={() => {
            setShowMenu(true);
            console.log(showMenu);
          }}
        >
          <SvgUri
            source={DotsSvg}
            height={28}
            width={28}
            style={{
              left: "30%",
            }}
          />
        </TouchableOpacity>
      }
    >
      <Menu.Item
        onPress={() => {
          setShowMenu(false);
          navigation.navigate("AssesmentsScreen", {
            clientId: id,
          });
        }}
        title="Assessments"
      />
      <Divider />
      <Menu.Item
        onPress={() => {
          setShowMenu(false);
          navigation.navigate("EditClientProfile", {
            clientId: id,
          });
        }}
        title="Edit Profile"
      />
      <Divider />
      <Menu.Item
        onPress={() => {
          setShowMenu(false);
          // navigation.navigate("AssignClientScreen", {
          //   planTemplateId: props.navigation.params.planTemplateId,
          //   weekNumber: props.navigation.params.weekNumber,
          // });
          //   setLoading(true);
          //   workoutService
          //     .addEmptySuperSet({ workout_id: props.navigation.params.id })
          //     .then((res) => {
          //       setLoading(false);
          //     })
          //     .catch((error) => {
          //       console.log("Error", error);
          //       setLoading(false);
          //     });
        }}
        title="Cancel"
      />

      {/* <Menu.Item
          title="Assign Group"
            onPress={() => {
              setLoading(true);
              workoutService
                .addEmptyCircuit({ workout_id: props.navigation.params.id })
                .then((res) => {
                  setLoading(false);
                  navigation.navigate("AddNewWorkoutScreen", {
                    id: props.navigation.params.id,
                  });
                  setShowMenu(false);
                })
                .catch((error) => {
                  console.log("Error", error);
                  setLoading(false);
                });
            }}
        /> */}
      {/* <Divider /> */}
    </Menu>
    // </View>
  );
};

export default TrainerClientsMenu;

const styles = StyleSheet.create({});
