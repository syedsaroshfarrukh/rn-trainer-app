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
  Touchable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabsBottom from "../Components/TabsBottom";
import AllClientCard from "../Components/AllClientCard";
import clientService from "../../services/clientService";
import { array } from "yup";
import Loader from "../Components/Loader";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const [client, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const focused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    clientService
      .getAllClient()
      .then((res) => {
        let array = [];
        res.data.success.clients.map((item) => {
          array.push(item);
        });
        setClients(array);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, [focused]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Loader loading={loading} />
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.topTextView}>
          <Text style={styles.topTextStyle}>Clients</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
            <Text style={styles.topTextStyle}>Chats</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardView}>
          <ScrollView style={{ height: "100%" }}>
            {client.length >= 1 ? (
              client.map((item, key) => {
                return (
                  <AllClientCard
                    key={key}
                    Name={`${item.first_name} ${item.last_name} `}
                    id={item.id}
                  />
                );
              })
            ) : (
              <Text></Text>
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
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardView: {
    flex: 1.9,
    marginTop: "5%",
  },
});
