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
import clientService from "../services/clientService";

const ClientListAssignNutritionPlan = (props) => {
  const isFocused = useIsFocused();

  const [uniqueMembers, setUniqueMembers] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  console.log(props);
  useEffect(() => {
    setLoading(true);
    clientService
      .getAllClient()
      .then((res) => {
        let array = [];

        res.data.success.clients.map((item) => {
          array.push(item);
        });
        console.log(res.data.success.clients);
        setUniqueMembers(array);
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
                planTemplateId={props.route.params.planTemplateId}
                weekNumber={props.route.params.weekNumber}
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

export default ClientListAssignNutritionPlan;

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
