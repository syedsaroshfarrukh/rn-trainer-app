import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import AssesmentsCard from "../Components/AssesmentCard";
import BodyWeightImage from "../../Image/body-weight.svg";
import SitesLogo from "../../Image/sites-logo.svg";
import Ruler from "../../Image/ruler.svg";

const { width, height } = Dimensions.get("window");

const AssesmentsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <AssesmentsCard
          title="Weight"
          imageUrl={BodyWeightImage}
          stats="60.0 lbs"
          route={"TrackWeightScreen"}
        />
        <AssesmentsCard
          title="Body Weight %"
          imageUrl={BodyWeightImage}
          stats="90%"
        />
        <AssesmentsCard
          title="Progress Photos"
          imageUrl={BodyWeightImage}
          stats="0"
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            justifyContent: "center",
            marginLeft: "8%",
            marginTop: "3%",
          }}
        >
          SITES
        </Text>
        <AssesmentsCard title="Progress Photos" imageUrl={SitesLogo} />
        <AssesmentsCard title="Progress Photos" imageUrl={SitesLogo} />
        <AssesmentsCard title="Progress Photos" imageUrl={SitesLogo} />
        <AssesmentsCard title="Progress Photos" imageUrl={SitesLogo} />
        <AssesmentsCard title="Progress Photos" imageUrl={SitesLogo} />
        <AssesmentsCard title="Progress Photos" imageUrl={SitesLogo} />
        <AssesmentsCard title="Progress Photos" imageUrl={SitesLogo} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            justifyContent: "center",
            marginLeft: "8%",
            marginTop: "3%",
          }}
        >
          GIRTH
        </Text>
        <AssesmentsCard title="Head" imageUrl={Ruler} />
        <AssesmentsCard title="Neck" imageUrl={Ruler} />
        <AssesmentsCard title="Arm Relaxed" imageUrl={Ruler} />
        <AssesmentsCard title="Arm Flexed" imageUrl={Ruler} />
        <AssesmentsCard title="Forearm" imageUrl={Ruler} />
        <AssesmentsCard title="Wrist" imageUrl={Ruler} />
        <AssesmentsCard title="Chest" imageUrl={Ruler} />
        <AssesmentsCard title="Waist" imageUrl={Ruler} />
        <AssesmentsCard title="Hip" imageUrl={Ruler} />
        <AssesmentsCard title="Thigh Gluteal" imageUrl={Ruler} />
        <AssesmentsCard title="Thigh Mid" imageUrl={Ruler} />
        <AssesmentsCard title="Calf" imageUrl={Ruler} />
        <AssesmentsCard title="Ankle" imageUrl={Ruler} />
      </ScrollView>
    </View>
  );
};

export default AssesmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  ScrollView: {
    marginTop: "3%",
  },
});
