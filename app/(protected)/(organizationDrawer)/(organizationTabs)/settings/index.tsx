import { Button, StyleSheet, Text, View } from "react-native";

import { useAuth } from "~/context/AuthContext";
import { useRouter } from "expo-router";

const Settings = () => {
  const router = useRouter();
  const { authState, onLogout } = useAuth();

  const onLogoutPressed = () => {
    router.replace("/")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.title}>Role: {authState?.role}</Text>
      <Button title={"Logout"} onPress={onLogoutPressed} />
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

export default Settings;
