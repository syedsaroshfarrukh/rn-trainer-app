// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import postService from "../services/postService";
import Loader from "./Components/Loader";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { set } from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width, height } = Dimensions.get("window");

const NewsCommentScreens = (props) => {
  const [text, setText] = useState();
  const [commentList, setCommentList] = useState();
  const [loading, setLoading] = useState();

  const [refresh, setRefrestState] = useState(false);

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  const isFocused = useIsFocused();
  const navigation = useNavigation();
  useEffect(() => {
    setRefrestState("New");
    setLoading(true);
    postService
      .getComments(props.route.params.id)
      .then((res) => {
        setCommentList(res.data.comments);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, [isFocused, refresh]);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Loader loading={loading} />
      <View style={{ flex: 0.35, alignSelf: "stretch" }}>
        <LinearGradient
          style={styles.statusCard}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.statusCardRowOne}>
              <View style={styles.statusCardRowOneColOne}>
                <Image
                  source={require("../Image/BoyProfile.png")}
                  style={{ height: 40, width: 40 }}
                />
              </View>
              <View style={styles.statusCardRowOneColTwo}>
                <Text style={styles.postText}>
                  {props.route.params.firstName}
                  {""} added a post
                </Text>
                <Text style={styles.postDate}>May 7, 2022</Text>
              </View>
              <View style={styles.statusCardRowOneColThree}>
                {/* <SvgUri
                  source={require("../Image/dots-button.svg")}
                  style={{
                    top: "0.7%",
                    left: "30%",
                    top: "8%",
                  }}
                /> */}
              </View>
            </View>
            <View
              style={
                props.route.params.image
                  ? styles.statusCardRowTwoo
                  : styles.statusCardRowTwoo
              }
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  marginLeft: "5%",
                }}
              >
                {props.route.params.description}
              </Text>
              {props.route.params.image ? (
                <Image
                  source={{
                    uri: `${props.route.params.image}`,
                  }}
                  style={{ height: "90%" }}
                />
              ) : (
                <></>
              )}
            </View>
            {/* <View style={styles.statusCardRowThree}>
              <View style={styles.statusCardRowThreeColOne}>
                <SvgUri source={require("../Image/like.svg")} />
                <Text style={styles.likeComment}>Like</Text>
              </View>
              <View style={styles.statusCardRowThreeColTwo}>
                <SvgUri source={require("../Image/comment.svg")} />
                <Text style={styles.likeComment}>Comment</Text>
              </View>
            </View> */}
          </View>
        </LinearGradient>
      </View>
      <View style={{ flex: 0.08 }}>
        <LinearGradient
          style={styles.statusBarView}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.statusBarViewColTwo}>
            <TextInput
              style={styles.input}
              placeholder="Type your comment here..."
              onChangeText={(val) => setText(val)}
              value={text}
            />
          </View>
          <View style={styles.statusBarViewColThree}>
            <TouchableOpacity
              onPress={() => {
                setLoading(true);
                postService
                  .addComment({ news_id: props.route.params.id, comment: text })
                  .then((res) => {
                    setCommentList(res.data.comments);
                    setLoading(false);
                    RefreshList(text);
                    setText("");
                  })
                  .catch((error) => {
                    console.log("Error", error);
                    setLoading(false);
                  });
              }}
            >
              <Text>Comment</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={{ flex: 0.5, padding: "5%" }}>
        <ScrollView>
          {commentList &&
            commentList.map((item) => {
              return <Text style={{ padding: "2%" }}>{item.comment}</Text>;
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default NewsCommentScreens;

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {
    padding: 16,
  },
  statusBarView: {
    flex: 1,
    borderColor: "#CBCBCB",
    borderWidth: 0.5,
    flexDirection: "row",
  },

  statusCard: {
    marginTop: "1%",
    width: "100%",
    flex: 1,
  },
  statusCardRowOne: {
    height: width * 0.15,
    flexDirection: "row",
  },
  statusCardRowTwoo: {},
  statusCardRowThree: {
    height: width * 0.15,
    borderColor: "#CBCBCB",
    borderWidth: 0.5,
    flexDirection: "row",
  },
  statusCardRowThreeColOne: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusCardRowThreeColTwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusCardRowOneColOne: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  statusCardRowOneColTwo: {
    flex: 3,
    justifyContent: "center",
    left: "25%",
  },
  statusCardRowOneColThree: {
    flex: 1,
  },
  cardView: {
    flex: 0.8,
  },
  titleContainer: {
    flex: 0.08,
  },
  statusBarViewColOne: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  statusBarViewColTwo: {
    flex: 2,
    justifyContent: "center",
  },
  input: {
    fontSize: 14,
    fontWeight: "400",
    color: "#777777",
    left: "5%",
  },
  statusBarViewColThree: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  postText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#333333",
  },
  postDate: {
    fontSize: 12,
    fontWeight: "400",
    color: "#777777",
  },
  likeComment: {
    left: "10%",
  },
});
