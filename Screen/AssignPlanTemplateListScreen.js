import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import PlanTemplateCard from "./Components/PlanTemplateCard";
import AddModal from "./Components/AddModal";
import planTemplateService from "../services/planTemplateService";
import Loader from "./Components/Loader";

const AssignPlanTemplateListScreen = (props) => {
  const [open, setOpen] = useState(false);

  const [platTemplateList, setPlatTemplateListt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  console.log("Groupppppppp Id", props.route.params.groupId);

  useEffect(() => {
    setLoading(true);
    planTemplateService
      .getAllPlanTemplates()
      .then((res) => {
        let array = [];
        res.data.workout.map((item) => {
          array.push(item);
        });
        setPlatTemplateListt(array);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, [refrestState]);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View style={styles.firstRow}>
        <ScrollView>
          {platTemplateList.length >= 1 ? (
            platTemplateList.map((item, key) => {
              return (
                <PlanTemplateCard
                  key={key}
                  title={item.name}
                  description={"1st week plan"}
                  id={item.id}
                  groupId={props.route.params.groupId}
                />
              );
            })
          ) : (
            <Text></Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default AssignPlanTemplateListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  firstRow: {
    flex: 1,
  },
  secondRow: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
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
