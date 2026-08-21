import { StyleSheet, Text, View, Platform } from "react-native";

export default function Home() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.textoPrincipal}>Bem Vindos ao Sistema!</Text>
      <text>{Platform.OS}</text>
      <text>{Platform.Version}</text>
      <text>{Platform.isTV?'é': 'Não'}</text>


      <view style={estilos.caixaComSobra}>

      </view>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#043b49",
  },
  textoPrincipal: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0ae845",
  },
  caixaComSobra:{
    backgroundColor:'#fff',
    padding: 20,
    borderRadius: 33,
    width: '80%',
    ...Platform.select({
        ios:{
            shadowColor:'#000',
            textShadowOffset:{width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius:4,
        },
        android:{
            elevation: 6,
        }
    })
  }
});
