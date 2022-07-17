import React from "react";
import {
  ActivityIndicator,
  View,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native";
import clientService from "../services/clientService";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

export default function PaypalPayment(props) {
  const navigation = useNavigation();

  const route = useRoute();
  console.log("props", props);

  const stateChng = (navState) => {
    console.log("kkjakskaj", navState);
    // const { url, title } = navState;
    // if (title == "PayPal Sucess") {
    //   console.log("dddjdjjdjdjdj", url);
    //   let spliturl = url.split("?");
    //   // console.log("spliturl",spliturl);
    //   let splitotherhalf = spliturl[1].split("&");
    //   console.log("splitotherhalf", splitotherhalf);
    //   let paymentId = splitotherhalf[0].replace("paymentId=", "");
    //   let token = splitotherhalf[1].replace("token=", "");
    //   let PayerID = splitotherhalf[2].replace("PayerID=", "");
    //   props.navigation.navigate("Success", {
    //     payId: paymentId,
    //     token: token,
    //     payerId: PayerID,
    //   });
    // console.log("paymentId", paymentId);
    // console.log("token", token);
    // console.log("PayerID", PayerID);
    // }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <WebView
        startInLoadingState={true}
        onNavigationStateChange={({ url, canGoBack }) => {
          console.log("url>>>>>>>>", url);
          if (url == "http://trainer.asds.com.pk/api/payment-success") {
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
          }
        }}
        renderLoading={() => <Loading />}
        source={{
          uri: `http://trainer.asds.com.pk/api/handle-payment/${props?.route?.params?.dealDetails?.dealPrice}`,
        }}
      />
    </SafeAreaView>
  );
}

const Loading = () => {
  return (
    <View
      style={{
        height: height,
        width: width,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../Image/paypal.png")}
        style={{ width: 250, height: 100, resizeMode: "contain" }}
      />
    </View>
  );
};
