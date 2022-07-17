import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import CheckBox from "react-native-check-box";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import groupService from "../../services/groupService";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const GroupMemberCard = ({ name, id, groupId, weekNumber, planTemplateId }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        if (groupId) {
          groupService
            .addGroupMember({
              group_id: groupId,
              user: id,
            })
            .then((res) => {
              navigation.navigate("SelectGroupScreen", {
                groupId: groupId,
              });
            })
            .catch((error) => {
              console.log("Error", error);
            });
        }
        if (planTemplateId && weekNumber) {
          navigation.navigate("AssignClientScreen", {
            planTemplateId: planTemplateId,
            weekNumber: weekNumber,
            clientId: id,
            clientName: name,
          });
        }
      }}
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
              {name}
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
  );
};

export default GroupMemberCard;

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
