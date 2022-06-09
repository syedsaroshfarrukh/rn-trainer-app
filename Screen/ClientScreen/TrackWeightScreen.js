import * as React from "react";
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

const { width, height } = Dimensions.get("window");

const firstMonth = () => (
  <View
    style={{
      flex: 1,
    }}
  >
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
      <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
        <Text style={styles.buttonTextStyle}>Add Weight</Text>
      </TouchableOpacity>
    </View>
    <View style={{ flex: 0.53 }}>
      <GraphStatCard title="May 06, 2022" stats="60.0 lbs" />
      <GraphStatCard title="May 02, 2022" stats="160.0 lbs" />
    </View>
  </View>
);

const thirdMonth = () => (
  <View style={[styles.scene, { backgroundColor: "#FFFFFF" }]} />
);
const sixthMonth = () => (
  <View style={[styles.scene, { backgroundColor: "#FFFFFF" }]} />
);

const Yearly = () => (
  <View style={[styles.scene, { backgroundColor: "#FFFFFF" }]} />
);

const initialLayout = { width: Dimensions.get("window").width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "firstMonth", title: "1 Month" },
    { key: "thirdMonth", title: "3 Month" },
    { key: "sixthMonth", title: "6 Month" },
    { key: "Yearly", title: "1 Year" },
  ]);

  const renderScene = SceneMap({
    firstMonth: firstMonth,
    thirdMonth: thirdMonth,
    sixthMonth: sixthMonth,
    Yearly: Yearly,
  });

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
