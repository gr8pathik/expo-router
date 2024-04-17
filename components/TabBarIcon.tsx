import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

export const TabBarIcon = ({ style, ...restProp }: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  style?: any;
}) => {
  return <FontAwesome size={28} style={[styles.tabBarIcon, style]} {...restProp} />;
};

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
