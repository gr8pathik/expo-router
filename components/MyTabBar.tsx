import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { TabBarIcon } from "~/components/TabBarIcon";
import { ToggleButton } from "react-native-paper";
import { DrawerActions } from '@react-navigation/native';
const tabBarStyles = StyleSheet.create({
  root: {
    justifyContent: "center"
  },
  wrapper: {
    backgroundColor: "#fff",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#ddd"
  },
  buttonFocused: {
    backgroundColor: "#51c0d2"
  },
  hidden: {
    backfaceVisibility: "hidden"
  }
});
function MyTabBar({ state, descriptors, navigation }) {
  const [value, setValue] = useState("left");
  return (
    <View style={tabBarStyles.wrapper}>
      <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><TabBarIcon name="bars" color="#51c0d2" /></Pressable>
      <ToggleButton.Row onValueChange={value => setValue(value)} value={value} style={tabBarStyles.root}>
        {
          state.routes.map((route, index) => {
            console.log("route ==>", route);
            const { options } = descriptors[route.key];
            console.log("options ==>", options);
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key
              });
              ß;
            };

            return (
              <ToggleButton key={route.name} icon={options.tabBarIcon}
                            style={isFocused ? tabBarStyles.buttonFocused : tabBarStyles.button} value={label}
                            onPress={onPress} />
            );
          })
        }
      </ToggleButton.Row>
      <TabBarIcon name="calendar" color="#51c0d2" style={tabBarStyles.hidden} />
    </View>
  );
}

export default MyTabBar
