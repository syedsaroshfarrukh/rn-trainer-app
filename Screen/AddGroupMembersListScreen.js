import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";

import { useNavigation, useIsFocused } from "@react-navigation/native";
import Loader from "./Components/Loader";

import GroupMemberCard from "./Components/GroupMemberCard";
import groupService from "../services/groupService";

const AddGroupMembersListScreen = (props) => {
  const isFocused = useIsFocused();

  const [uniqueMembers, setUniqueMembers] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    groupService
      .getAllGroupMembers(props.route.params.groupId)
      .then((res) => {
        let array = [];
        let array1 = [];
        let unique = [];
        res.data.user.map((item) => {
          array.push(item);
        });
        res.data.group_user.map((item) => {
          array1.push(item);
        });
        const result = array.filter((col) => {
          return array1[0].group_user.find((selected) => selected.id == col.id);
        });
        console.log("----Group Members----", result);

        for (var i = 0; i < array.length; i++) {
          var found = false;

          for (var j = 0; j < result.length; j++) {
            // j < is missed;
            if (array[i] == result[j]) {
              found = true;
              break;
            }
          }
          if (found == false) {
            unique.push(array[i]);
          }
        }
        console.log("---Unique Array---", unique);

        setUniqueMembers(unique);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loader loading={loading} />
      <ScrollView style={{ flex: 0.9 }}>
        {uniqueMembers.length > 1 ? (
          uniqueMembers.map((item, key) => {
            return (
              <GroupMemberCard
                key={key}
                name={`${item.first_name} ${item.last_name} ${item.id}`}
                id={item.id}
                groupId={props.route.params.groupId}
              />
            );
          })
        ) : (
          <Text></Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddGroupMembersListScreen;

const styles = StyleSheet.create({
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
