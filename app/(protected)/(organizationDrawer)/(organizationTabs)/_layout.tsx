import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAuth } from "~/context/AuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarIcon } from "~/components/TabBarIcon";
import Directory from "~/app/(protected)/(organizationDrawer)/(organizationTabs)/directory";
import Messages from "~/app/(protected)/(organizationDrawer)/(organizationTabs)/messages";
import Alerts from "~/app/(protected)/(organizationDrawer)/(organizationTabs)/alerts";
import Settings from "~/app/(protected)/(organizationDrawer)/(organizationTabs)/settings";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Link } from "expo-router";
import { Linking } from "react-native";

const BottomTab = createBottomTabNavigator();

export default function TabLayout() {
  const { authState } = useAuth();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomTab.Navigator screenOptions={{ headerShown: false }}>
        <BottomTab.Screen name="Messages" component={Messages} options={{
          tabBarBadge: 9,
          tabBarIcon: ({ color }) => <TabBarIcon name="envelope" color={color} />
        }} />
        <BottomTab.Screen name="Directory" component={Directory} options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          headerShown: true
        }} />
        <BottomTab.Screen name="Alerts" component={Alerts} options={{
          tabBarBadge: 20,
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />
        }} />
        <BottomTab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
          headerShown: true
        }} />
      </BottomTab.Navigator>
    </GestureHandlerRootView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Website" onPress={() => Linking.openURL("https://www.expo.dev/")} />
      <Link href={"/message/"} onPress={() => props.navigation.closeDrawer()}>Alpha</Link>
      <Link href={"/directory/"} onPress={() => props.navigation.closeDrawer()}>Beta</Link>
      <Link href={"/settings/"} onPress={() => props.navigation.closeDrawer()}>Charlie</Link>
    </DrawerContentScrollView>
  );
}
