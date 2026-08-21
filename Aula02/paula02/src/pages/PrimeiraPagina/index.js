import React from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function PrimeiraPagina() {
  const lidarComClique = () => {
    alert("Botão clicado!");
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.textoPrincipal}>João pedro</Text>
    <Text> Cientista de dados</Text>
    
        <View style={estilo.botao}>
        </View>
<TouchableOpacity style={textoBotao}>
      
      
      </TouchableOpacity>ds
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray"
  },

  textoPrincipal: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "rgb(255, 21, 0)",
  },

  textoBotao: {
      title="Conectar",
    color="rgb(22, 12, 112)",
        onPress={lidarComClique},
    fontSize: 14,
    fontWeight: "300",
  },

  botao: {
    marginTop: 12,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f7",
  },
});
