import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";

const deviceStorage = {
  async loadToken() {
    try {
      const user = await AsyncStorage.getItem("user");
      let parsed = JSON.parse(user);
      let token = parsed.token;
      console.log("token in service--------------------------------", token);
      const headers = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      return headers;
    } catch (error) {
      console.log("Load token error: ", error);
    }
    return token;
  },
  async loadToken1() {
    try {
      const user = await AsyncStorage.getItem("user");
      let parsed = JSON.parse(user);
      let token = parsed.token;
      console.log("token in service--------------------------------", token);
      const headers = {
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "multipart/form-data",
        },
      };
      return headers;
    } catch (error) {
      console.log("Load token error: ", error);
    }
    return token;
  },
};
export default deviceStorage;
