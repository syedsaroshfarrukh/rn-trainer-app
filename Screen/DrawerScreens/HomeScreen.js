// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabsBottom from "../Components/TabsBottom";
import AllClientCard from "../Components/AllClientCard";
import clientService from "../../services/clientService";
import { array } from "yup";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const [client, setClients] = useState([]);
  useEffect(() => {
    clientService
      .getAllClient()
      .then((res) => {
        let array = [];
        res.data.success.clients.map((item) => {
          array.push(item);
        });
        setClients(array);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.topTextView}>
          <Text style={styles.topTextStyle}>Clients</Text>
        </View>
        <View style={styles.cardView}>
          <ScrollView style={{ height: "100%" }}>
            {client.length > 1 ? (
              client.map((item, key) => {
                return (
                  <AllClientCard
                    key={key}
                    Name={`${item.first_name} ${item.last_name}`}
                    id={item.id}
                  />
                );
              })
            ) : (
              <Text>No Clients Added</Text>
            )}
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
    flex: 0.1,
  },
  cardView: {
    flex: 1.9,
    marginTop: "5%",
  },
});
