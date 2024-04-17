import React from "react";

import { Text, View } from "react-native";
import { Stack } from "expo-router";

const MessageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[id]"  options={{
        title: "Message",
      }} />
    </Stack>
  );
};

export default MessageLayout;
