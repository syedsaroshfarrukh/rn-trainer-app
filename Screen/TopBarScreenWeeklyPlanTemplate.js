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

import Loader from "./Components/Loader";
import planTemplateService from "../services/planTemplateService";
import DayPlanWorkoutTabsComponent from "./Components/DayPlanWorkoutTabsComponent";

const initialLayout = { width: Dimensions.get("window").width };

const TopBarScreenNutrition = (props) => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [daysId, setDaysId] = useState([]);
  const [refrestState, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  useEffect(() => {
    console.log(props);
    setLoading(true);
    planTemplateService
      .getDailyWorkoutPlanTemplate(props.route.params.id)
      .then((res) => {
        // let array = [];
        let days = [];
        // res.data.nutrition_plan[0].nutriton_plan_type.map((item) => {
        //   array.push(item);
        // });
        res.data.weeks.map((item) => {
          days.push(item.id);
        });
        // setWeeklyPlanList(array);
        setDaysId(days);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, [refrestState]);

  const [routes] = useState([
    { key: "sun", title: "Sun" },
    { key: "mon", title: "Mon" },
    { key: "tue", title: "Tue" },
    { key: "wed", title: "Wed" },
    { key: "thurs", title: "Thur" },
    { key: "fri", title: "Fri" },
    { key: "sat", title: "Sat" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "sun":
        return daysId[0] ? (
          <DayPlanWorkoutTabsComponent id={daysId[0]} Refresh={RefreshList} />
        ) : (
          <></>
        );
      case "mon":
        return daysId[1] ? (
          <DayPlanWorkoutTabsComponent id={daysId[1]} Refresh={RefreshList} />
        ) : (
          <></>
        );
      case "tue":
        return daysId[2] ? (
          <DayPlanWorkoutTabsComponent id={daysId[2]} Refresh={RefreshList} />
        ) : (
          <></>
        );
      case "wed":
        return daysId[3] ? (
          <DayPlanWorkoutTabsComponent id={daysId[3]} Refresh={RefreshList} />
        ) : (
          <></>
        );
      case "thurs":
        return daysId[4] ? (
          <DayPlanWorkoutTabsComponent id={daysId[4]} Refresh={RefreshList} />
        ) : (
          <></>
        );
      case "fri":
        return daysId[5] ? (
          <DayPlanWorkoutTabsComponent id={daysId[5]} Refresh={RefreshList} />
        ) : (
          <></>
        );
      case "sat":
        return daysId[6] ? (
          <DayPlanWorkoutTabsComponent id={daysId[6]} Refresh={RefreshList} />
        ) : (
          <></>
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loader loading={loading} />

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
    </View>
  );
};

export default TopBarScreenNutrition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
});
