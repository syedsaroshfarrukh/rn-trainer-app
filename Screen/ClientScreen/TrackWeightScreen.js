import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import HeaderIcon from "../../Image/arrow.svg";
import SvgUri from "expo-svg-uri";
import { LineChart } from "react-native-chart-kit";
import GraphStatCard from "../Components/GraphStatCard";
import AddWeightModal from "../Components/AddWeightModal";
import Loader from "../Components/Loader";
import clientService from "../../services/clientService";
import moment from "moment";

const { width, height } = Dimensions.get("window");

const TrackWeightScreen = ({ title, clientId, typeId, clientid }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [assessment, setAssessment] = useState(false);
  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  useEffect(() => {
    setLoading(true);
    if (clientid) {
      clientService
        .getAssessmentDetails(clientid, typeId)
        .then((res) => {
          let array = [];
          res.data.assessment.map((item) => {
            array.push(item);
          });
          setAssessment(array);
          setLoading(false);
          console.log("Client Id", clientid, typeId);
        })
        .catch((error) => {
          console.log("Error", error);
          setLoading(false);
        });
    } else {
      clientService
        .getAssessmentDetails(clientId, typeId)
        .then((res) => {
          let array = [];
          res.data.assessment.map((item) => {
            array.push(item);
          });
          setAssessment(array);
          setLoading(false);
          console.log("Client Id", id);
        })
        .catch((error) => {
          console.log("Error", error);
          setLoading(false);
        });
    }
  }, [refrestState]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Loader loading={loading} />
      <View
        style={{
          flex: 0.37,
        }}
      >
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 255, 239, 0.71)`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "5",
              strokeWidth: "2",
              stroke: "rgba(0, 255, 239, 0.71)",
            },
          }}
          bezier
          withVerticalLines={false}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginTop: 20,
          }}
        />
      </View>
      <View
        style={{
          flex: 0.1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {clientid ? (
          <View></View>
        ) : (
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => setOpen(true)}
          >
            <Text style={styles.buttonTextStyle}>Add {title}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 0.53 }}>
        <ScrollView style={{ flex: 1, alignContent: "stretch" }}>
          {assessment.length >= 1 ? (
            assessment.map((item, key) => {
              return (
                <GraphStatCard
                  key={key}
                  title={moment(item.date).format("MMM Do YY")}
                  stats={`${item.assessment} lbs`}
                />
              );
            })
          ) : (
            <Text></Text>
          )}
        </ScrollView>
      </View>
      <AddWeightModal
        title={`Add ${title}`}
        open={open}
        onClose={() => setOpen(false)}
        RefreshList={RefreshList}
        clientId={clientId}
        typeId={typeId}
      />
    </View>
  );
};

export default TrackWeightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: "#41B825",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 53,
    width: width * 0.7,
    alignItems: "center",
    borderRadius: 4,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
  },
});
