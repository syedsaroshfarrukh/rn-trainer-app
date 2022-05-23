import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegisterScreen from "../RegisterScreen";

const Tab = createBottomTabNavigator();

const TabsBottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={RegisterScreen} />
      <Tab.Screen name="Admin" component={RegisterScreen} />
      <Tab.Screen name="Auth" component={RegisterScreen} />
      <Tab.Screen name="New" component={RegisterScreen} />
    </Tab.Navigator>
  );
};

export default TabsBottom;
