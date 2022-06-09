import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";

const deviceStorage = {
  async loadToken() {
    try {
      const user = await AsyncStorage.getItem("user");
      let parsed = JSON.parse(user);
      let token = parsed.token;
      console.log("token in service--------------------------------", token);
      return token;
    } catch (error) {
      console.log("Load token error: ", error);
    }
    return token;
  },
};
export default deviceStorage;
