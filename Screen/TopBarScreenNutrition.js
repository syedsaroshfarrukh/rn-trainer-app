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
import HeaderIcon from "../Image/leftArrow.svg";
import SvgUri from "expo-svg-uri";

const SunRoute = () => (
  <View style={[styles.scene, { backgroundColor: "red" }]} />
);

const MonRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#FFFFFF" }]} />
);
const TueRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#FFFFFF" }]} />
);

const WedRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#FFFFFF" }]} />
);
const ThursRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#FFFFFF" }]} />
);

const FriRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#FFFFFF" }]} />
);
const SatRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#FFFFFF" }]} />
);

const initialLayout = { width: Dimensions.get("window").width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "sun", title: "Sun" },
    { key: "mon", title: "Mon" },
    { key: "tue", title: "Tue" },
    { key: "wed", title: "Wed" },
    { key: "thurs", title: "Thur" },
    { key: "fri", title: "Fri" },
    { key: "sat", title: "Sat" },
  ]);

  const renderScene = SceneMap({
    sun: SunRoute,
    mon: MonRoute,
    tue: TueRoute,
    wed: WedRoute,
    thurs: ThursRoute,
    fri: FriRoute,
    sat: SatRoute,
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
});
