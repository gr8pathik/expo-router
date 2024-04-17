import "../global.css";

import "../translation";

import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

import { AuthProvider, useAuth } from "~/context/AuthContext";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(protected)"
};

function RootLayout() {
  const { authState } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  useEffect(() => {
    const inAuthGroup = segments[0] === "(protected)";
    /*if (!authState?.authenticated && inAuthGroup) {
      router.replace("/");
    } else if (authState?.authenticated === true) {*/
      // router.replace("/(protected)/messages");
    // }
  }, [authState]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, title: "Login" }} />
        <Stack.Screen name="register" options={{ headerShown: true }} />
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ title: "Modal", presentation: "modal" }} />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const AuthRootLayout = () => {
  return (
    <AuthProvider>
      <PaperProvider>
        <RootLayout />
      </PaperProvider>
    </AuthProvider>
  );
};

export default AuthRootLayout;
