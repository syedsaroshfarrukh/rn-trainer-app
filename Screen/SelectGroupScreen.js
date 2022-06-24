import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import GroupMemberCard from "./Components/GroupMemberCard";
import Loader from "./Components/Loader";
import groupService from "../services/groupService";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const SelectGroupScreen = (props) => {
  const [filterdUser, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const isFocused = useIsFocused();

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

        // for (var i = 0; i < array.length; i++) {
        //   var found = false;

        //   for (var j = 0; j < result.length; j++) {
        //     // j < is missed;
        //     if (array[i] == result[j]) {
        //       found = true;
        //       break;
        //     }
        //   }
        //   if (found == false) {
        //     unique.push(array[i]);
        //   }
        // }
        // console.log("---Unique Array---", unique);

        setFilteredUsers(result);
        // setUniqueMembers(unique);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, [isFocused]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loader loading={loading} />
      <View style={{ flex: 0.85, alignItems: "center" }}>
        <ScrollView>
          {filterdUser.length >= 1 ? (
            filterdUser.map((item, key) => {
              return (
                <GroupMemberCard
                  name={`${item.first_name} ${item.last_name} ${item.id}`}
                  key={key}
                />
              );
            })
          ) : (
            <Text
              style={{
                marginTop: "5%",
              }}
            >
              No Group Members Added
            </Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("AddGroupMembersListScreen", {
              groupId: props.route.params.groupId,
            })
          }
        >
          <Text style={styles.buttonTextStyle}>Add Group Members</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectGroupScreen;

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
