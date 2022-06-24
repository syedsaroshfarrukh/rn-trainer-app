import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import AssesmentsCard from "../Components/AssesmentCard";
import BodyWeightImage from "../../Image/body-weight.svg";
import SitesLogo from "../../Image/sites-logo.svg";
import Ruler from "../../Image/ruler.svg";
import Loader from "../Components/Loader";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import clientService from "../../services/clientService";
import getUserId from "../../configurations/getUserId";
const { width, height } = Dimensions.get("window");

const AssesmentsScreen = () => {
  const [assessment, setAssessment] = useState([]);
  const [id, setId] = useState();

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  const _retrieveId = async () => {
    try {
      const value = await getUserId.loadInfo();
      if (value !== null) {
        // We have data!!
        setId(value);
        console.log("---value---", value);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  useEffect(() => {
    _retrieveId();
  }, [isFocused]);

  useEffect(() => {
    setLoading(true);
    clientService
      .getClientAssessments(id && id.id)
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
  }, [id]);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <ScrollView style={styles.ScrollView}>
        {assessment.length > 1 ? (
          assessment.map((item, key) => {
            return (
              <AssesmentsCard
                key={key}
                title={item.name}
                imageUrl={BodyWeightImage}
                stats={
                  item.last_assessment
                    ? `${item.last_assessment.assessment} lbs`
                    : "0 lbs"
                }
                clientId={id.id}
                typeId={item.id}
              />
            );
          })
        ) : (
          <Text></Text>
        )}

        {/* <AssesmentsCard
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
        <AssesmentsCard title="Ankle" imageUrl={Ruler} /> */}
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
