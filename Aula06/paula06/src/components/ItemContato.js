import { StyleSheet, Text, View } from "react-native-web";
import { Feather } from "@expo/vector-icons";

export default function ItemContato({ contato }) {
  return (
    <View style={estilos.linha}>
      <View style={estilos.iconeCirculo}>
        <Feather
          name={contato.icone}
          size={20}
          color="#fff"
        />
      </View>

      <View style={estilos.textos}>
        <text style={estilos.nome}>{contato.nome}</text>
         <text style={estilos.cargo}>{contato.cargo}</text>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  linha: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },

  iconeCirculo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textos:{
    flex:1
  },
  nome:{
    fontSize:16,
    fontWeight: 'bold',
    color: 'blue',
  },
  cargo:{
    fontSize:13,
    color:'#777'
  }
});