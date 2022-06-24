import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const YoutubeMiniCard = ({ thumbnail, title, id }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textcolor = colors.iconColor;

  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginBottom: 0,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`https://www.youtube.com/watch?v=${id}`);
        }}
      >
        <Image
          source={{
            uri: `${thumbnail}`,
          }}
          style={{
            width: width * 0.25,
            height: width * 0.15,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreateNewExcercise", {
            youtubeLink: `https://www.youtube.com/watch?v=${id}`,
            thumbnails: `${thumbnail}`,
            videoTitle: `${title}`,
          });
        }}
      >
        <View
          style={{
            paddingLeft: 10,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 17,
              width: width * 0.6,
              color: textcolor,
            }}
            ellipsizeMode="tail"
            numberOfLines={3}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default YoutubeMiniCard;
