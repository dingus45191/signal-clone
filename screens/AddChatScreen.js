import React, { useLayoutEffect, useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Input } from "react-native-elements";
import { auth, db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => {
        alert(err);
      });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    }),
      [navigation];
  });

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => {
          setInput(text);
        }}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color={"green"} />
        }
      />
      <Button onPress={createChat} title="Go" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
      backgroundColor:"white",
      padding:30,
      height:"100%"
  },
});
