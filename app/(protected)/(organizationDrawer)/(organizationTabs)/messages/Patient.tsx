import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Button } from "~/components/Button";

const Patient = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient</Text>
      <Link href={"/message/1"} asChild><Button title="Go to Message 1" /></Link>
      <Link href={"/message/1789217192"} asChild><Button title="Go to Message 1789217192" /></Link>
      <Link href={"/message/241213"} asChild><Button title="Go to Message 241213" /></Link>
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

export default Patient;
