import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";

const groupUserInfo = {
  async loadInfo() {
    try {
      const user = await AsyncStorage.getItem("user");
      let parsed = JSON.parse(user);
      return parsed;
    } catch (error) {
      console.log("Load token error: ", error);
    }
    return token;
  },
};
export default groupUserInfo;
