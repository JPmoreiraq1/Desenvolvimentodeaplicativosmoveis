import { Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

export default function TelaHome({ navigation }) {
  return (
    <SafeAreaView style={styles.tela}>
      <Text style={styles.titulo}>Home</Text>
      <Text style={styles.nota}>CLIQUE AQUI</Text>

      <Button title="Abrir menu" onPress={() => navigation.openDrawer()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#21295c",
  },
  nota: {
    fontSize: 13,
    color: "red",
    textAlign: "center",
    marginTop: 24,
  },
});
