import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingTrainerScreen = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    async function AsyncStorageDataLoad() {
      let user = await AsyncStorage.getItem("user");
      let parsed = JSON.parse(user);
      setUserInfo(parsed);
      console.log(parsed);
    }

    AsyncStorageDataLoad();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <Image
          source={require("../Image/BoyProfile.png")}
          style={{ height: 101, width: 101 }}
        />
        <Text style={styles.name}>
          {userInfo.firstName} {userInfo.lastName}
        </Text>
        <Text style={styles.email}>{userInfo.email}</Text>
      </View>
      <View style={styles.secondRow}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <LinearGradient
            style={styles.card}
            colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
            {...deg(140)}
          >
            <View style={styles.firstColumn}>
              <Image
                source={require("../Image/gear.png")}
                style={{ height: 25, width: 25 }}
              />
            </View>
            <View style={styles.secondColumn}>
              <View style={styles.secondColumnContainer}>
                <View style={styles.rowOne}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      color: "#333333",
                    }}
                  >
                    Edit Profile
                  </Text>
                </View>
                <View style={styles.rowTwo}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#5E5E5E",
                    }}
                  >
                    Name, Email
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.thirdColumn}>
              <SvgUri
                source={require("../Image/arrow.svg")}
                width="10.09"
                height="15.63"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
          <LinearGradient
            style={styles.card1}
            colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
            {...deg(140)}
          >
            <View style={styles.firstColumn}>
              <Image
                source={require("../Image/chnage-password.png")}
                style={{ height: 25, width: 25 }}
              />
            </View>
            <View style={styles.secondColumn}>
              <View style={styles.secondColumnContainer}>
                <View style={styles.rowOne}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      color: "#333333",
                    }}
                  >
                    Change Password
                  </Text>
                </View>
                <View style={styles.rowTwo}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#5E5E5E",
                    }}
                  >
                    Password
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.thirdColumn}>
              <SvgUri
                source={require("../Image/arrow.svg")}
                width="10.09"
                height="15.63"
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingTrainerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  firstRow: {
    flex: 1,
    top: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  secondRow: {
    flex: 3,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    width: width * 0.91,
    height: width * 0.18,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
    marginTop: "10%",
  },
  card1: {
    flexDirection: "row",
    width: width * 0.91,
    height: width * 0.18,
    borderRadius: 11,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: "5%",
    marginTop: "0.5%",
  },
  name: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 12,
    marginBottom: 12,
  },
  email: {
    fontSize: 16,
    fontWeight: "400",
  },
  firstColumn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secondColumn: {
    flex: 3,
    padding: "3%",
  },
  thirdColumn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secondColumnContainer: {
    flex: 1,
    left: "5%",
  },
  rowOne: {
    flex: 1,
    justifyContent: "center",
    top: "5%",
  },
  rowTwo: {
    flex: 1,
    justifyContent: "center",
  },
  rowThree: {
    flex: 1,
  },
  rowFour: {
    flex: 1,
    flexDirection: "row",
  },
});
