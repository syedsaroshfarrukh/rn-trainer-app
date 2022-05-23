// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabsBottom from "../Components/TabsBottom";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import ClientHomeScreenButton from "../Components/ClientHomeScreenButton";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
  XAxis,
} from "react-native-chart-kit";
import YellowArrow from "../../Image/yellow-arrow.svg";
import GreenArrow from "../../Image/green-arrow.svg";
import Graph from "../../Image/graph.svg";
import RedChat from "../../Image/red-chat.svg";

const { width, height } = Dimensions.get("window");

const HomeScreenClient = (props) => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 0.6, padding: 16 }}>
        <View style={styles.topTextView}>
          <Text style={styles.topTextStyle}>Home</Text>
        </View>
        <View style={styles.cardView}>
          <ScrollView style={{ height: "100%" }}>
            <ClientHomeScreenButton
              imageUrl={YellowArrow}
              title={"Next Work from Planout"}
              description={"Next Workout Scheduled"}
              route={"NextWorkoutPlanScreen"}
            />
            <ClientHomeScreenButton
              imageUrl={GreenArrow}
              title={"Log Freestyle Workout"}
              description={"A Workout Outside Of Your Plan"}
              route={"LogTodayWorkout"}
            />
            <ClientHomeScreenButton
              imageUrl={Graph}
              title={"Track Progress"}
              description={"Weight, Progress Photo, BF%"}
              route={"AssesmentsScreen"}
            />
            <ClientHomeScreenButton
              imageUrl={RedChat}
              title={"Chat With Coach"}
              description={"Have A Question. Ask Here."}
              route={"NutritionPlanScreen"}
            />
          </ScrollView>
        </View>
      </View>
      <View style={{ flex: 0.4, padding: 16, bottom: "4%" }}>
        <View style={{ flex: 0.2 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Frequency Per Week
          </Text>
        </View>

        <View
          style={{
            flex: 0.8,
          }}
        >
          <BarChart
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              datasets: [
                {
                  data: [10, 30, 20, 10, 20, 10, 30],
                  color: (opacity = 1) => `rgba(19, 155, 255, ${opacity})`,
                },
              ],
            }}
            fromZero={true}
            width={width * 0.9} // from react-native
            height={width * 0.5}
            verticalLabelRotation={0}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={{
              barRadius: "10",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              barPercentage: 0.6,
              height: 5000,
              fillShadowGradient: `#43B926`,
              fillShadowGradientOpacity: 1,

              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `#43B926`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
              style: {
                borderRadius: 16,
              },
              propsForBackgroundLines: {},
            }}
            bezier
            showBarTops={false}
            style={{
              marginVertical: 8,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#E8E8E8",
              paddingRight: 10,
            }}
            withHorizontalLabels={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenClient;

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {
    flex: 0.15,
  },
  cardView: {
    flex: 1.9,
    marginTop: "5%",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    width: width * 0.91,
    height: width * 0.13,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
  },
  firstColumn: {
    flex: 1,

    left: "15%",
    top: "3%",
  },
  secondColumn: {
    flex: 3,
    padding: "3%",
  },
  thirdColumn: {
    flex: 1,
  },
  secondColumnContainer: {
    flex: 1,
    left: "5%",
  },
  rowOne: {
    flex: 1,
  },
  rowTwo: {
    flex: 1,
  },
  rowThree: {
    flex: 1,
  },
  rowFour: {
    flex: 1,
    flexDirection: "row",
  },
});
