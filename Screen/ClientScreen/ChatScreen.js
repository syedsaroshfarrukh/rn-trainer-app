import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { auth, db } from "../../firebase";
// import { AntDesign } from "@expo/vector-icons";
// import { Avatar } from "@rneui/themed";
import getUserId from "../../configurations/getUserId";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export default function HomeScreen({ user, navigation }) {
  // console.log(user)
  const [id, setId] = useState();

  const [users, setUsers] = useState(null);
  const isFocused = useIsFocused();

  const _retrieveId = async () => {
    try {
      const value = await getUserId.loadInfo();
      if (value !== null) {
        // We have data!!
        setId(value);
        console.log("---value---", value);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };
  const getUsers = async () => {
    if (id && id.role === "trainer") {
      const querySanp = await db
        .collection("users")
        .where("uid", "!=", "JFNeLwqNn6S5heQWnRrhRfIg3CI3")
        .get();
      const allusers = querySanp.docs.map((docSnap) => docSnap.data());
      //  console.log(allusers)
      setUsers(allusers);
      console.log("All Users", allusers);
      console.log("All Users", user.uid);
    }
    if (id && id.role === "client") {
      const querySanp = await db
        .collection("users")
        .where("uid", "==", "JFNeLwqNn6S5heQWnRrhRfIg3CI3")
        .get();
      const allusers = querySanp.docs.map((docSnap) => docSnap.data());
      //  console.log(allusers)
      setUsers(allusers);
      console.log("All Users", allusers);
      console.log("All Users", user.uid);
    }
  };

  useEffect(() => {
    _retrieveId();
  }, [isFocused]);

  useEffect(() => {
    getUsers();
  }, [id]);

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerLeft: () => (
  //         <View style={{ marginLeft: 20 }}>
  //           <Avatar
  //             rounded
  //             source={{ uri: auth?.currentUser?.photoURL }}
  //             style={{ height: 30, width: 30 }}
  //           />
  //         </View>
  //       ),
  //       headerRight: () => (
  //         <TouchableOpacity style={{ marginRight: 30 }} onPress={signOut}>
  //           <AntDesign name="logout" size={24} color="black" />
  //         </TouchableOpacity>
  //       ),
  //     });
  //   }, []);

  //   const signOut = () => {
  //     auth
  //       .signOut()
  //       .then(() => {
  //         navigation.replace("Login");
  //       })
  //       .catch((error) => {});
  //   };

  const RenderCard = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Chat", {
            name: item.name,
            uid: item.uid,
            status:
              typeof item.status == "string"
                ? item.status
                : item.status.toDate().toString(),
          })
        }
      >
        <View style={styles.mycard}>
          <Image source={{ uri: item.pic }} style={styles.img} />
          <View>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <RenderCard item={item} />;
        }}
        keyExtractor={(item) => item.uid}
      />
      {/* <FAB
        style={styles.fab}
        icon="face-profile"
        color="black"
        onPress={() => navigation.navigate("account")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  img: { width: 60, height: 60, borderRadius: 30, backgroundColor: "green" },
  text: {
    fontSize: 18,
    marginLeft: 15,
  },
  mycard: {
    flexDirection: "row",
    margin: 3,
    padding: 4,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
  },
});
