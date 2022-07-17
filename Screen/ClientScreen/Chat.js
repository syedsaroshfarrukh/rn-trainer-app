import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from "react";
import { auth, db, timestamp } from "../../firebase";
// import { AntDesign } from "@expo/vector-icons";
// import { Avatar } from "@rneui/themed";
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat";

const Chat = ({ navigation, user, route }) => {
  // const [messages, setMessages] = useState([]);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <View style={{ marginLeft: 20 }}>
  //         <Avatar
  //           rounded
  //           source={{ uri: auth?.currentUser?.photoURL }}
  //           style={{ height: 30, width: 30 }}
  //         />
  //       </View>
  //     ),
  //     headerRight: () => (
  //       <TouchableOpacity style={{ marginRight: 30 }} onPress={signOut}>
  //         <AntDesign name="logout" size={24} color="black" />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, []);

  // //   useEffect(() => {
  // //     setMessages([
  // //       {
  // //         _id: 1,
  // //         text: "Hello developer",
  // //         createdAt: new Date(),
  // //         user: {
  // //           _id: 2,
  // //           name: "React Native",
  // //           avatar: "https://placeimg.com/140/140/any",
  // //         },
  // //       },
  // //     ]);
  // //   }, []);

  // useLayoutEffect(() => {
  //   const unsubscribe = db
  //     .collection("chats")
  //     .orderBy("createdAt", "desc")
  //     .onSnapshot((snapshot) =>
  //       setMessages(
  //         snapshot.docs.map((doc) => ({
  //           _id: doc.data()._id,
  //           createdAt: doc.data().createdAt.toDate(),
  //           text: doc.data().text,
  //           user: doc.data().user,
  //         }))
  //       )
  //     );
  //   return unsubscribe;
  // }, []);

  // const onSend = useCallback((messages = []) => {
  //   setMessages((previousMessages) =>
  //     GiftedChat.append(previousMessages, messages)
  //   );
  //   const { _id, createdAt, text, user } = messages[0];
  //   db.collection("chats").add({
  //     _id,
  //     createdAt,
  //     text,
  //     user,
  //   });
  // }, []);
  const [messages, setMessages] = useState([]);
  const { uid } = route.params;
  const getAllMessages = async () => {
    const docid = uid > user.uid ? user.uid + "-" + uid : uid + "-" + user.uid;
    const querySanp = await db
      .collection("chatrooms")
      .doc(docid)
      .collection("messages")
      .orderBy("createdAt", "desc")
      .get();
    const allmsg = querySanp.docs.map((docSanp) => {
      return {
        ...docSanp.data(),
        createdAt: docSanp.data().createdAt.toDate(),
      };
    });
    setMessages(allmsg);
  };
  useEffect(() => {
    // getAllMessages()
    console.log("sjhakjshajshahsjasj");
    const docid = uid > user.uid ? user.uid + "-" + uid : uid + "-" + user.uid;
    const messageRef = db
      .collection("chatrooms")
      .doc(docid)
      .collection("messages")
      .orderBy("createdAt", "desc");

    const unSubscribe = messageRef.onSnapshot((querySnap) => {
      const allmsg = querySnap.docs.map((docSanp) => {
        const data = docSanp.data();
        if (data.createdAt) {
          return {
            ...docSanp.data(),
            createdAt: docSanp.data().createdAt.toDate(),
          };
        } else {
          return {
            ...docSanp.data(),
            createdAt: new Date(),
          };
        }
      });
      setMessages(allmsg);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const onSend = (messageArray) => {
    const msg = messageArray[0];
    const mymsg = {
      ...msg,
      sentBy: user.uid,
      sentTo: uid,
      createdAt: new Date(),
    };
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, mymsg)
    );
    const docid = uid > user.uid ? user.uid + "-" + uid : uid + "-" + user.uid;

    db.collection("chatrooms")
      .doc(docid)
      .collection("messages")
      .add({ ...mymsg, createdAt: timestamp });
  };

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
  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: auth?.currentUser.email,
        name: auth?.currentUser.displayName,
        avatar: auth?.currentUser.photoURL,
      }}
      // renderBubble={(props) => {
      //   return (
      //     <Bubble
      //       {...props}
      //       wrapperStyle={{
      //         right: {
      //           backgroundColor: "green",
      //         },
      //       }}
      //     />
      //   );
      // }}
      // renderInputToolbar={(props) => {
      //   return (
      //     <InputToolbar
      //       {...props}
      //       containerStyle={{ borderTopWidth: 1.5, borderTopColor: "green" }}
      //       textInputStyle={{ color: "black" }}
      //     />
      //   );
      // }}
    />
  );
};

export default Chat;

const styles = StyleSheet.create({});
