import React, { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { auth, db } from "../firebase";

export default function CustomListItem({ id, chatName, enterChat, route }) {
  const [chatMessages, setChatMessages] = useState([]);
  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setChatMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return unsubscribe;
  }, [route]);
  return (
    <ListItem
      onPress={() => {
        enterChat(id, chatName);
      }}
      key={id}
      bottomDivider
    >
      <Avatar
        rounded
        source={{
          uri:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mwnI-qZ3xHBoFPwkIk9YVQHaE7%26pid%3DApi&f=1",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode={"tail"}>
          {chatMessages?.[0]?.displayName}:{chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
