import React from "react";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "~/components/Button";

const OrgSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Organization</Text>
      <Link href="/messages/" asChild>
        <Button title="Organization Selected" />
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: "80%"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default OrgSelectionScreen;
