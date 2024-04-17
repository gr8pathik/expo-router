import React from "react";

import { Text, View } from "react-native";

const MessageHome = () => {
  return (
    <Text>
      This is a protected message. You should only see this if you are logged
      in.
    </Text>
  );
};

export default MessageHome;
