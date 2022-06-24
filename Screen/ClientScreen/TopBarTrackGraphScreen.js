import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import HeaderIcon from "../../Image/arrow.svg";
import SvgUri from "expo-svg-uri";
import { LineChart } from "react-native-chart-kit";
import GraphStatCard from "../Components/GraphStatCard";
import AddWeightModal from "../Components/AddWeightModal";
import TrackWeightScreen from "./TrackWeightScreen";

const initialLayout = { width: Dimensions.get("window").width };

export default function TabViewExample(props) {
  const [index, setIndex] = useState(0);
  const [refrestState, setRefrestState] = useState(false);
  console.log("Props", props);
  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };
  const [routes] = useState([
    { key: "firstMonth", title: "1 Month" },
    { key: "thirdMonth", title: "3 Month" },
    { key: "sixthMonth", title: "6 Month" },
    { key: "Yearly", title: "1 Year" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "firstMonth":
        return (
          <TrackWeightScreen
            Refresh={RefreshList}
            title={props.route.params.title}
            clientId={props.route.params.clientid}
            typeId={props.route.params.typeid}
          />
        );
      case "thirdMonth":
        return (
          <TrackWeightScreen
            Refresh={RefreshList}
            title={props.route.params.title}
            clientId={props.route.params.clientid}
            typeId={props.route.params.typeid}
          />
        );
      case "sixthMonth":
        return (
          <TrackWeightScreen
            Refresh={RefreshList}
            title={props.route.params.title}
            clientId={props.route.params.clientid}
            typeId={props.route.params.typeid}
          />
        );
      case "Yearly":
        return (
          <TrackWeightScreen
            Refresh={RefreshList}
            title={props.route.params.title}
            clientId={props.route.params.clientid}
            typeId={props.route.params.typeid}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <TabView
        navigationState={{ index, routes }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderLabel={({ route, color }) => (
              <>
                <Text style={{ color: "black" }}>{route.title}</Text>
              </>
            )}
            style={{
              backgroundColor: "white",
            }}
            indicatorStyle={{ backgroundColor: "#333333", height: 3 }}
          />
        )}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
});
