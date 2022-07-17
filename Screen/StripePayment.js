import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import { Secret_key, STRIPE_PUBLISHABLE_KEY } from "../configurations/keys";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import clientService from "../services/clientService";
import Loader from "./Components/Loader";

// create a component
const CURRENCY = "USD";
var CARD_TOKEN = null;

function getCreditCardToken(creditCardData) {
  // alert()
  const card = {
    "card[number]": creditCardData.values.number.replace(/ /g, ""),
    "card[exp_month]": creditCardData.values.expiry.split("/")[0],
    "card[exp_year]": creditCardData.values.expiry.split("/")[1],
    "card[cvc]": creditCardData.values.cvc,
  };
  return fetch("https://api.stripe.com/v1/tokens", {
    headers: {
      // Use the correct MIME type for your server
      Accept: "application/json",
      // Use the correct Content Type to send data to Stripe
      "Content-Type": "application/x-www-form-urlencoded",
      // Use the Stripe publishable key as Bearer
      Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`,
    },
    // Use a proper HTTP method
    method: "post",
    // Format the credit card data to a string of key-value pairs
    // divided by &
    body: Object.keys(card)
      .map((key) => key + "=" + card[key])
      .join("&"),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
/**
 * The method imitates a request to our server.
 *
 * @param creditCardToken
 * @return {Promise<Response>}
 */
function subscribeUser(creditCardToken) {
  return new Promise((resolve) => {
    console.log("Credit card token\n", creditCardToken);
    CARD_TOKEN = creditCardToken.id;
    setTimeout(() => {
      resolve({ status: true });
    }, 1000);
  });
}

const StripePayment = (props) => {
  const [CardInput, setCardInput] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  console.log("props deals", props);

  const onSubmit = async () => {
    setLoading(true);
    if (CardInput.valid == false || typeof CardInput.valid == "undefined") {
      alert("Invalid Credit Card");
      return false;
    }

    let creditCardToken;
    try {
      // Create a credit card token
      creditCardToken = await getCreditCardToken(CardInput);
      // console.log("creditCardToken", creditCardToken)
      console.log(creditCardToken);
      if (creditCardToken.error) {
        alert("creditCardToken error");
        return;
      }
    } catch (e) {
      console.log("e", e);
      return;
    }
    // Send a request to your server with the received credit card token
    const { error } = await subscribeUser(creditCardToken);
    // Handle any errors from your server
    if (error) {
      alert(error);
    } else {
      let pament_data = await charges();
      console.log("pament_data", pament_data);
      if (pament_data.status == "succeeded") {
        setLoading(false);
        alert("Payment Successfully");
        clientService
          .clientUpdateSetting({
            id: props?.route?.params?.dealDetails?.clientId,
            active: 1,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        navigation.replace("DrawerNavigationRoutesClient");
      } else {
        setLoading(false);

        alert("Payment failed");
      }
    }
  };

  const charges = async () => {
    const card = {
      amount: props?.route?.params?.dealDetails?.dealPrice * 100,
      currency: CURRENCY,
      source: CARD_TOKEN,
      description: `${props?.route?.params?.dealDetails?.dealName} : syedsaroshfarrukh@gmail.com`,
    };

    return fetch("https://api.stripe.com/v1/charges", {
      headers: {
        // Use the correct MIME type for your server
        Accept: "application/json",
        // Use the correct Content Type to send data to Stripe
        "Content-Type": "application/x-www-form-urlencoded",
        // Use the Stripe publishable key as Bearer
        Authorization: `Bearer ${Secret_key}`,
      },
      // Use a proper HTTP method
      method: "post",
      // Format the credit card data to a string of key-value pairs
      // divided by &
      body: Object.keys(card)
        .map((key) => key + "=" + card[key])
        .join("&"),
    }).then((response) => response.json());
  };

  const _onChange = (data) => {
    console.log("data", data);
    setCardInput(data);
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
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
          <Text style={styles.headerText}> Debit/Credit </Text>
          <Text style={styles.secondaryText}>
            {props?.route?.params?.dealDetails?.dealName} :{" "}
            {props?.route?.params?.dealDetails?.dealPrice} ${" "}
            {props?.route?.params?.dealDetails?.clientId}
          </Text>
        </View>
        <View style={{ flex: 1.6 }}>
          <CreditCardInput
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            validColor="#fff"
            placeholderColor="#ccc"
            onChange={_onChange}
          />
        </View>

        <View style={{ flex: 0.5 }}>
          <TouchableOpacity
            activeOpacity={0.3}
            style={styles.buttonStyle}
            onPress={onSubmit}
          >
            <Text style={styles.buttonTextStyle}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  ImgStyle: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#2471A3",
    width: 150,
    height: 45,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: "#f4f4f4",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  inputContainerStyle: {
    borderRadius: 5,
  },
  inputStyle: {
    backgroundColor: "#222242",
    paddingLeft: 15,
    borderRadius: 5,
    color: "#fff",
  },
  labelStyle: {
    marginBottom: 5,
    fontSize: 12,
  },
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

//make this component available to the app
export default StripePayment;
