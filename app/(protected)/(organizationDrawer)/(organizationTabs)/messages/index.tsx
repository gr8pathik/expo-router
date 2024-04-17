import Patient from "~/app/(protected)/(organizationDrawer)/(organizationTabs)/messages/Patient";
import { TabBarIcon } from "~/components/TabBarIcon";
import Internal from "~/app/(protected)/(organizationDrawer)/(organizationTabs)/messages/Internal";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyTabBar from "~/components/MyTabBar";

const TopTab = createMaterialTopTabNavigator();
const Messages = () => {
  return (
    <TopTab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <TopTab.Screen name="Patient" component={Patient} options={{
        tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
      }} />
      <TopTab.Screen name="Internal" component={Internal} options={{
        tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />
      }} />
      <TopTab.Screen name="Direct" component={Internal} options={{
        tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
      }} />
      <TopTab.Screen name="Boradcast" component={Internal} options={{
        tabBarIcon: ({ color }) => <TabBarIcon name="bullhorn" color={color} />
      }} />
      <TopTab.Screen name="Hidden" component={Internal} options={{
        tabBarIcon: ({ color }) => <TabBarIcon name="eye-slash" color={color} />
      }} />
    </TopTab.Navigator>
  );
};

export default Messages;
