import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const ITENS_MENU = [
  { icone: "user", texto: "Meu Perfil" },
  { icone: "settings", texto: "Configurações" },
  { icone: "bell", texto: "Notificações" },
  { icone: "log-out", texto: "Sair" },
];

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="dark" />

      {ITENS_MENU.map((atual) => (
        <ItemMenu
          icone={atual.icone}
          texto={atual.texto}
          key={atual.texto}
        />
      ))}

      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={styles.imagem}
      />

      <Image
        source={require("./src/assets/gato1.jpg")}
        style={styles.imagem}
      />

    </View>
  );
}

function ItemMenu({ icone, texto }) {
  return (
    <TouchableOpacity style={styles.linha}>
      <View style={styles.iconeCirculo}>
        <Feather name={icone} size={20} color="#4355dc" />
      </View>

      <Text style={styles.textoLinha}>{texto}</Text>

      <Feather name="chevron-right" size={20} color="#151613" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
    paddingHorizontal: 16,
  },

  linha: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#c51a1a",
  },

  iconeCirculo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#118ab2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  textoLinha: {
    fontSize: 16,
    flex: 1,
  },

  imagem: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
  },
});