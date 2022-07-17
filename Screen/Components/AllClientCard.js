import { StyleSheet, Text, View, Dimensions, Image, Share } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import clientService from "../../services/clientService";
import TrainerClientsMenu from "../../Screen/Components/TrainerClientsMenu";

const { width, height } = Dimensions.get("window");

const AllClientCard = ({ Name, id }) => {
  const [client, setClient] = useState({});

  useEffect(() => {}, []);

  const onShare = async (id) => {
    clientService
      .getClientInvite(id)
      .then(async (res) => {
        setClient(res.data.details);
        try {
          const result = await Share.share({
            message: `Hi ${res.data.details.user.first_name},

I have created a new TrainerLux Fitness app account for you. TrainerLux Fitness app would let us collaborate and help you meet your fitness goals faster.

Once you have downloaded the app, use the below email and password to login to the app:
Email ==> ${res.data.details.user.email}
Password ==> ${res.data.details.password}

If you have any questions, please let me know.
Thanks, have a lovely day.
                    `,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      })
      .catch((error) => {
        console.log("Error", error);
        console.log("Error", id);
      });
  };

  return (
    <LinearGradient
      style={styles.card}
      colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
      {...deg(140)}
    >
      <View style={styles.firstColumn}>
        <Image
          source={require("../../Image/client-boy.png")}
          style={{ height: 45, width: 45 }}
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
              {Name}
            </Text>
          </View>
          <View style={styles.rowTwo}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "#5E5E5E",
                top: "15%",
              }}
            >
              No Upcoming Plan
            </Text>
          </View>
          <View style={styles.rowThree}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "#5E5E5E",
              }}
            >
              Last workout: yesterday
            </Text>
          </View>
          <View style={styles.rowFour}>
            {/* <SvgUri
              source={require("../../Image/order-new.svg")}
              style={{ height: 20, width: 20 }}
            />
            <SvgUri
              source={require("../../Image/chat.svg")}
              style={{
                height: 16,
                width: 15.16,
                top: "0.7%",
                left: "50%",
              }}
            /> */}
            <Text
              style={{ fontSize: 12, color: "#42B825" }}
              onPress={async () => {
                await onShare(id);
                // console.log({
                //   name: client.user.first_name,
                //   email: client.user.email,
                //   password: client.password,
                // });
              }}
            >
              Send Invite Link
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.thirdColumn}>
        <View>
          <TrainerClientsMenu id={id} />
        </View>
        <View style={{ right: "2%" }}></View>
      </View>
    </LinearGradient>
  );
};

export default AllClientCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    width: width * 0.91,
    height: width * 0.3,
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
    flex: 2.7,
    padding: "3%",
  },
  thirdColumn: {
    flex: 1.3,
    top: "2%",
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
