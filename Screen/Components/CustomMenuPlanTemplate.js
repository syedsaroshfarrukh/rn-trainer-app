import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, Menu, Divider, Provider, List } from "react-native-paper";
import DotsSvg from "../../Image/VerticalDot.svg";
import SvgUri from "expo-svg-uri";
import workoutService from "../../services/workoutService";
import Loader from "./Loader";
import { useNavigation } from "@react-navigation/native";

const CustomMenuPlanTemplate = (props) => {
  const [showMenu, setShowMenu] = useState();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  console.log("snsjajh", props);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginRight: "10%",
      }}
    >
      <Loader loading={loading} />
      <Menu
        style={{ width: "45%" }}
        visible={showMenu}
        onDismiss={() => setShowMenu(false)}
        anchor={
          <TouchableOpacity
            onPress={() => {
              setShowMenu(true);
              console.log(showMenu);
            }}
          >
            <SvgUri source={DotsSvg} height={28} width={28} />
          </TouchableOpacity>
        }
      >
        <Menu.Item
          onPress={() => {
            navigation.navigate("AssignClientScreen", {
              planTemplateId: props.navigation.params.planTemplateId,
              weekNumber: props.navigation.params.weekNumber,
            });
            setShowMenu(false);
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
          title="Assign Client"
        />
        {/* <Divider /> */}
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
    </View>
  );
};

export default CustomMenuPlanTemplate;

const styles = StyleSheet.create({});
