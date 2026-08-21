import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Caixa from "./src/components/Caixa";

export default function App() {
  return (
    <View style={styles.containerpai}>

      <View style={styles.container}>
        <Caixa cor="red" numero={1} />
        <Caixa cor="#20ea0e" numero={2} />
        <Caixa cor="#a6c322" numero={3} />
        <Caixa cor="#0d181c" numero={4} />
        <Caixa cor="#f7fcfe" numero={5} />
        <Caixa cor="#16840c" numero={6} />
        <Caixa cor="#0eb3ea" numero={7} />
        <Caixa cor="#0eb3ea" numero={8} />
        <Caixa cor="#0eb3ea" numero={9} />

        <StatusBar style="auto" />
      </View>
      <View style={styles.containerpai}>
        <Text>TESTE</Text>
      </View>

      <View style={styles.container}>
        <Text>TESTE2</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  containerpai: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red'
  },

  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#160fe7",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  container2: {
    flex: 4,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'flex-end'
  },
});