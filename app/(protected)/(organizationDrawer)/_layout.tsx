import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAuth } from "~/context/AuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarIcon } from "~/components/TabBarIcon";
import Directory from "~/app/(protected)/(organizationDrawer)/(organizationTabs)/directory";
import Messages from "~/app/(protected)/(organizationDrawer)/(organizationTabs)/messages";
import Alerts from "~/app/(protected)/(organizationDrawer)/(organizationTabs)/alerts";
import Settings from "~/app/(protected)/(organizationDrawer)/(organizationTabs)/settings";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Link } from "expo-router";
import { Linking } from "react-native";

const BottomTab = createBottomTabNavigator();

export default function TabLayout() {
  const { authState } = useAuth();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        headerShown: false,
        drawerType: "front"
      }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
        {/* All other screens should be hidden */}
      </Drawer>
    </GestureHandlerRootView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Link href={'/message/'} onPress={() => props.navigation.closeDrawer()}>Org 1</Link>
      <Link href={'/directory/'}>Org 2</Link>
      <Link href={'/settings/'} onPress={() => props.navigation.closeDrawer()}>Org 3</Link>
    </DrawerContentScrollView>
  );
}
