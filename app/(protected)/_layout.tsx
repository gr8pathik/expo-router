import React from "react";

import { Text, View } from "react-native";
import { Stack } from "expo-router";

const ProtectedLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
};

export default ProtectedLayout;
