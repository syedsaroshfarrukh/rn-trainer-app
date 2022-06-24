import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import SearchImage from "../Image/search.svg";
import SvgUri from "expo-svg-uri";
import YoutubeMiniCard from "./Components/YoutubeMiniCard";
import YoutubeService from "../services/YoutubeService";
import Loader from "./Components/Loader";

const { width, height } = Dimensions.get("window");

const YoutubeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [youtubeVideosJson, setYoutubeVideosJson] = useState(false);
  const [youtubeQuery, setYoutubeQuery] = useState("");

  const fetchData = (data) => {
    setLoading(true);
    YoutubeService.getYoutubeVideos(data)
      .then((res) => {
        console.log(res.data);
        setYoutubeVideosJson(res.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowOne}>
        <View style={styles.rowOneInnerView}>
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="#f000"
            placeholder="Search Video Here"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="sentences"
            returnKeyType="next"
            onChangeText={(val) => {
              console.log(val);
              setYoutubeQuery(val);
            }}
            //   onBlur={handleBlur("ExcerciseName")}
            //   value={values.ExcerciseName}
          />
          <TouchableOpacity onPress={() => fetchData(youtubeQuery)}>
            <SvgUri
              source={SearchImage}
              height={width * 0.06}
              width={width * 0.06}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowTwo}>
        <Loader loading={loading} />
        <ScrollView>
          {youtubeVideosJson.length > 1 ? (
            youtubeVideosJson.map((item, key) => {
              return (
                // <AllClientCard
                //   key={key}
                //   Name={`${item.first_name} ${item.last_name}`}
                //   id={item.id}
                // />
                <YoutubeMiniCard
                  key={key}
                  thumbnail={item.snippet.thumbnails.default.url}
                  title={item.snippet.title}
                  id={item.id.videoId}
                />
              );
            })
          ) : (
            <Text></Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default YoutubeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "3%",
  },
  rowOne: {
    flex: 0.08,
    justifyContent: "center",
  },
  rowTwo: {
    flex: 0.92,
  },
  rowOneInnerView: {
    paddingLeft: "5%",
    paddingRight: "5%",
    flexDirection: "row",
    borderColor: "#FFFFFF",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "center",
    paddingBottom: "2%",
  },
  inputStyle: {
    justifyContent: "center",
    width: width * 0.75,

    fontSize: 16,
  },
});
