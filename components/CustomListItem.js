import React from "react";
import { View, Text } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

export default function CustomListItem({id, chatName,enterChat}) {
  return (
    <ListItem key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            "https://avatars.githubusercontent.com/u/60180419?s=460&u=5135c6af08fc8ae159e854882cd816efa82c7da5&v=4",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800' }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode={"tail"}>
          Awesome
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
