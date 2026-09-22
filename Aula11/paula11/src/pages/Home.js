import { Button, View, Text, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={estilos.tela}>
      <Text style={estilos.texto}>Tela Principal</Text>

      <Button
        title="Ir Para Sobre"
        color="#5a1145"
        onPress={() => navigation.navigate("TelaSobre")}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "blue",
  },

  texto: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginBottom: 24,
  },
});
