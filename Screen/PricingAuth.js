import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import React, { Component } from "react";
import SvgUri from "expo-svg-uri";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Classic Plan",
    price: "100",
    planType: "Current Plan",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Bussiness Plan",
    price: "200",
    planType: "Upgrade",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Enterprise Plan",
    price: "300",
    planType: "Upgrade",
  },
];

const Item = ({ title, price, planType }) => (
  <View
    style={{
      ...styles.item,
      backgroundColor: title === "Classic Plan" ? "#BDC8FF" : "#FFFFFF",
    }}
  >
    <Text style={styles.title}>{title}</Text>
    <View style={{ alignItems: "center", marginTop: 23 }}>
      <View style={styles.priceView}>
        <Text style={styles.sign}>$</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Text style={styles.period}>/ Month</Text>

      <View
        style={{
          ...styles.cardBodyButton,
          backgroundColor: planType === "Current Plan" ? "#FFFFFF" : "#F3B007",
        }}
      >
        <Text>{planType}</Text>
      </View>
    </View>
  </View>
);

const PricingAuth = ({ navigation }) => {
  {
    const renderItem = ({ item }) => (
      <Item title={item.title} price={item.price} planType={item.planType} />
    );
    return (
      <View style={styles.mainBody}>
        <View
          style={{
            flex: 0.05,
            padding: 20,
            marginTop: "10%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../Image/Expand_Less.png")} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 0.4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../Image/logo-small.png")}
            style={{ width: "60%", resizeMode: "contain", margin: 20 }}
          />
        </View>
        <View style={styles.cardBody}>
          <View style={{ flex: 0.7 }}>
            <Text style={styles.headerText}>Pricing</Text>
            <Text style={styles.secondaryText}>
              Get Unlimited to your Personalized Fitness Plan!
            </Text>
          </View>
          <View style={{ flex: 1.6 }}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              style={{ padding: 5, marginBottom: 0, height: 50 }}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{ flex: 0.5 }}>
            <TouchableOpacity
              activeOpacity={0.3}
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("DrawerNavigationRoutesClient")
              }
            >
              <Text style={styles.buttonTextStyle}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

export default PricingAuth;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#6D8591",
    alignContent: "center",
  },
  cardBody: {
    flex: 1,
    backgroundColor: "#DEE3E5",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 15,
  },
  secondaryText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    top: "10%",
    paddingLeft: 30,
    paddingRight: 30,
  },
  item: {
    flex: 2,
    height: 243,
    width: 177,
    borderRadius: 18,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
  },
  priceView: {
    flexDirection: "row",
  },
  price: {
    fontSize: 48,
  },
  sign: {
    fontSize: 30,
  },
  period: {
    marginTop: 5,
    color: "#777777",
    fontSize: 22,
    fontWeight: "400",
  },
  cardBodyButton: {
    marginTop: 20,
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
  },
  buttonStyle: {
    height: 53,
    backgroundColor: "#41B825",
    borderColor: "#7DE24E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginLeft: 39,
    marginRight: 39,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
  },
});
