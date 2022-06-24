import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";

const groupUserInfo = {
  async loadInfo() {
    try {
      const group = await AsyncStorage.getItem("clientGroupInfo");
      let parsed = JSON.parse(group);
      return parsed;
    } catch (error) {
      console.log("Load token error: ", error);
    }
    return token;
  },
};
export default groupUserInfo;
