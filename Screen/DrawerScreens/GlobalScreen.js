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
  TextInput,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import TabsBottom from "../Components/TabsBottom";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";
import SvgUri from "expo-svg-uri";
import * as ImagePicker from "expo-image-picker";
import postService from "../../services/postService";
import Loader from "../Components/Loader";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { set } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);
  const [localuri, setLocalUri] = useState();
  const [imageFileName, setImageFileName] = useState();
  const [imageType, setImageType] = useState();
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState(false);
  const [refresh, setRefrestState] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }

    let localUri = result.uri;
    let filename = localUri.split("/").pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    setLocalUri(localUri);
    setImageFileName(filename);
    setImageType(type);
  };

  const RefreshList = (newValue) => {
    setRefrestState(newValue);
  };

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    setRefrestState("new");
    setImage(null);
    setLoading(true);
    postService
      .getPost()
      .then((res) => {
        setPostList(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, [isFocused, refresh]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loader loading={loading} />
      <View style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <View style={styles.topTextView}>
            <Text style={styles.topTextStyle}>News</Text>
          </View>
        </View>
        <LinearGradient
          style={styles.statusBarView}
          colors={["rgba(220, 220, 220, 0.29)", "rgba(255, 255, 255, 0)"]}
          {...deg(140)}
        >
          <View style={styles.statusBarViewColOne}>
            <Image
              source={require("../../Image/profile.png")}
              style={{ width: 40, height: 40 }}
            />
          </View>
          <View style={styles.statusBarViewColTwo}>
            <TextInput
              style={styles.input}
              placeholder="What's on your mind?"
              onChangeText={(val) => setText(val)}
              value={text}
              clearButtonMode="always"
            />
          </View>
          <View style={styles.statusBarViewColThree}>
            <TouchableOpacity onPress={pickImage}>
              <SvgUri source={require("../../Image/photo-staus.svg")} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (image) {
                  let formData = new FormData();
                  formData.append("image", {
                    uri: localuri,
                    name: imageFileName,
                    type: imageType,
                  });
                  formData.append("description", text);
                  console.log(formData);
                  setLoading(true);
                  postService
                    .addPost(formData)
                    .then((res) => {
                      setLoading(false);
                      console.log(res);
                      RefreshList("");
                      setImage(null);
                      setText("");
                    })
                    .catch((error) => {
                      // setIsLoading(false); // For hiding loader
                      // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
                      console.log(error);

                      setLoading(false);
                    });
                } else {
                  postService
                    .addNewPost({ description: text })
                    .then((res) => {
                      setLoading(false);
                      console.log(res);
                      RefreshList("");
                      setImage(null);
                      setText("");
                    })
                    .catch((error) => {
                      // setIsLoading(false); // For hiding loader
                      // dropDownAlertRef.alertWithType("error", "Something Went Wrong");
                      console.log(error);

                      setLoading(false);
                    });
                }
              }}
            >
              <Text>Post</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View style={styles.cardView}>
          <ScrollView>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: width * 1, height: 200 }}
              />
            )}
            {postList &&
              postList.map((item) => {
                if (item.news[0].image === null) {
                  return (
                    <LinearGradient
                      style={styles.statusCard}
                      colors={[
                        "rgba(220, 220, 220, 0.29)",
                        "rgba(255, 255, 255, 0)",
                      ]}
                      {...deg(140)}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles.statusCardRowOne}>
                          <View style={styles.statusCardRowOneColOne}>
                            <Image
                              source={require("../../Image/BoyProfile.png")}
                              style={{ height: 40, width: 40 }}
                            />
                          </View>
                          <View style={styles.statusCardRowOneColTwo}>
                            <Text style={styles.postText}>
                              {item &&
                              item.user[0] &&
                              item.user[0].first_name &&
                              item.user[0].first_name
                                ? item.user[0].first_name
                                : "Default"}
                              {""} added a post
                            </Text>
                            <Text style={styles.postDate}>May 7, 2022</Text>
                          </View>
                          <View style={styles.statusCardRowOneColThree}>
                            <SvgUri
                              source={require("../../Image/dots-button.svg")}
                              style={{
                                top: "0.7%",
                                left: "30%",
                                top: "8%",
                              }}
                            />
                          </View>
                        </View>
                        <View style={styles.statusCardRowTwo}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: "400",
                              padding: 16,
                            }}
                          >
                            {item.news[0].description}
                          </Text>
                        </View>
                        <View style={styles.statusCardRowThree}>
                          <TouchableOpacity
                            style={styles.statusCardRowThreeColOne}
                            onPress={() => {
                              console.log(item.news_details.id);
                              postService
                                .addLike({ news_id: item.news_details.id })
                                .then((res) => {
                                  // setPostList(res.data.data);
                                  // console.log("responssssss", res.data.data);

                                  RefreshList("");
                                })
                                .catch((error) => {
                                  console.log("Error", error);
                                });
                            }}
                          >
                            <SvgUri
                              source={
                                item.like === false
                                  ? require("../../Image/like.svg")
                                  : require("../../Image/liked.svg")
                              }
                            />
                            <Text style={styles.likeComment}>Like</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.statusCardRowThreeColTwo}
                            onPress={() =>
                              navigation.navigate("NewsCommentScreens", {
                                firstName:
                                  item &&
                                  item.user[0] &&
                                  item.user[0].first_name &&
                                  item.user[0].first_name
                                    ? item.user[0].first_name
                                    : "Default",
                                description: item.news[0].description,
                                id: item.news_details.id,
                              })
                            }
                          >
                            <SvgUri
                              source={require("../../Image/comment.svg")}
                            />
                            <Text style={styles.likeComment}>Comment</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </LinearGradient>
                  );
                }
                if (item.news_details.Type === "FreeStyleWorkout") {
                  return (
                    <LinearGradient
                      style={styles.statusCard}
                      colors={[
                        "rgba(220, 220, 220, 0.29)",
                        "rgba(255, 255, 255, 0)",
                      ]}
                      {...deg(140)}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles.statusCardRowOne}>
                          <View style={styles.statusCardRowOneColOne}>
                            <Image
                              source={require("../../Image/BoyProfile.png")}
                              style={{ height: 40, width: 40 }}
                            />
                          </View>
                          <View style={styles.statusCardRowOneColTwo}>
                            <Text style={styles.postText}>
                              {item &&
                              item.user[0] &&
                              item.user[0].first_name &&
                              item.user[0].first_name
                                ? item.user[0].first_name
                                : "Default"}
                              {""} added a post
                            </Text>
                            <Text style={styles.postDate}>May 7, 2022</Text>
                          </View>
                          <View style={styles.statusCardRowOneColThree}>
                            <SvgUri
                              source={require("../../Image/dots-button.svg")}
                              style={{
                                top: "0.7%",
                                left: "30%",
                                top: "8%",
                              }}
                            />
                          </View>
                        </View>
                        <View style={styles.statusCardRowTwo}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: "400",
                              padding: "1%",
                            }}
                          >
                            Free Style Workout Logged
                            {item.name}
                          </Text>
                          {item.news[0].relation.map((item) => {
                            return (
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontWeight: "400",
                                  padding: "1%",
                                }}
                              >
                                {item.name}
                              </Text>
                            );
                          })}
                        </View>
                        <View style={styles.statusCardRowThree}>
                          <TouchableOpacity
                            style={styles.statusCardRowThreeColOne}
                            onPress={() => {
                              console.log(item.news_details.id);
                              postService
                                .addLike({ news_id: item.news_details.id })
                                .then((res) => {
                                  setPostList(res.data.data);
                                  console.log(res.data.data);
                                  RefreshList("");
                                })
                                .catch((error) => {
                                  console.log("Error", error);
                                });
                            }}
                          >
                            <SvgUri
                              source={
                                item.like === false
                                  ? require("../../Image/like.svg")
                                  : require("../../Image/liked.svg")
                              }
                            />
                            <Text style={styles.likeComment}>Like</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.statusCardRowThreeColTwo}
                            onPress={() =>
                              navigation.navigate("NewsCommentScreens", {
                                firstName:
                                  item &&
                                  item.user[0] &&
                                  item.user[0].first_name &&
                                  item.user[0].first_name
                                    ? item.user[0].first_name
                                    : "Default",
                                description: item.news[0].description,
                                id: item.news_details.id,
                              })
                            }
                          >
                            <SvgUri
                              source={require("../../Image/comment.svg")}
                            />
                            <Text style={styles.likeComment}>Comment</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </LinearGradient>
                  );
                }
                if (item.news[0].image !== null) {
                  return (
                    <LinearGradient
                      style={styles.statusCard}
                      colors={[
                        "rgba(220, 220, 220, 0.29)",
                        "rgba(255, 255, 255, 0)",
                      ]}
                      {...deg(140)}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles.statusCardRowOne}>
                          <View style={styles.statusCardRowOneColOne}>
                            <Image
                              source={require("../../Image/BoyProfile.png")}
                              style={{ height: 40, width: 40 }}
                            />
                          </View>
                          <View style={styles.statusCardRowOneColTwo}>
                            <Text style={styles.postText}>
                              {item &&
                              item.user[0] &&
                              item.user[0].first_name &&
                              item.user[0].first_name
                                ? item.user[0].first_name
                                : "Default"}
                              {""} added a post
                            </Text>
                            <Text style={styles.postDate}>May 7, 2022</Text>
                          </View>
                          <View style={styles.statusCardRowOneColThree}>
                            <SvgUri
                              source={require("../../Image/dots-button.svg")}
                              style={{
                                top: "0.7%",
                                left: "30%",
                                top: "8%",
                              }}
                            />
                          </View>
                        </View>
                        <View style={styles.statusCardRowTwoo}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: "400",
                              marginLeft: 5,
                            }}
                          >
                            {item.news[0].description}
                          </Text>
                          <Image
                            source={{
                              uri: `http://trainer.asds.com.pk/public/${item.news[0].image}`,
                            }}
                            style={{ height: "90%" }}
                          />
                        </View>
                        <View style={styles.statusCardRowThree}>
                          <TouchableOpacity
                            style={styles.statusCardRowThreeColOne}
                            onPress={() => {
                              setLoading(true);
                              console.log(item.news_details.id);
                              postService
                                .addLike({ news_id: item.news_details.id })
                                .then((res) => {
                                  setPostList(res.data.data);
                                  console.log(res.data.data);
                                  setLoading(false);
                                  RefreshList("");
                                })
                                .catch((error) => {
                                  console.log("Error", error);
                                  setLoading(false);
                                });
                            }}
                          >
                            <SvgUri
                              source={
                                item.like === false
                                  ? require("../../Image/like.svg")
                                  : require("../../Image/liked.svg")
                              }
                            />
                            <Text style={styles.likeComment}>Like</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.statusCardRowThreeColTwo}
                            onPress={() =>
                              navigation.navigate("NewsCommentScreens", {
                                firstName:
                                  item &&
                                  item.user[0] &&
                                  item.user[0].first_name &&
                                  item.user[0].first_name
                                    ? item.user[0].first_name
                                    : "Default",
                                description: item.news[0].description,
                                id: item.news_details.id,
                                image: `http://trainer.asds.com.pk/public/${item.news[0].image}`,
                              })
                            }
                          >
                            <SvgUri
                              source={require("../../Image/comment.svg")}
                            />
                            <Text style={styles.likeComment}>Comment</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </LinearGradient>
                  );
                }
              })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topTextStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
  topTextView: {
    padding: 16,
  },
  statusBarView: {
    flex: 0.1,
    borderColor: "#CBCBCB",
    borderWidth: 0.5,
    flexDirection: "row",
  },

  statusCard: {
    marginTop: "5%",
    width: "100%",
    alignSelf: "stretch",
    flex: 1,
  },
  statusCardRowOne: {
    height: width * 0.15,
    flexDirection: "row",
  },
  statusCardRowTwoo: {
    height: width * 0.4,
  },
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
