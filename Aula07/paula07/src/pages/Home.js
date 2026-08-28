import {View, StyleSheet } from "react-native";
import PerfilCard from "../components/PerfilCard";



export default function Home(){
    return(
      <View style={estilos.Tela}>
        <PerfilCard nome="Helton" cargo="CEO" cor="green"/>
        <PerfilCard nome="Higuin" cargo="LGBT" cor="red"/>
      </View>
    )
}

const estilos = StyleSheet.create({
    Tela:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20,
        backgroundColor:'blue'
    }
})
