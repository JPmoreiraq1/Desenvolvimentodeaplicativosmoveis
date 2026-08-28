import { StyleSheet, Text, View } from "react-native";
import BotaoCurtir from "../components/BotaoCurtir";


export default function Direita2(){
    function aoCurtir(nomePost){
        console.log('Foi curtido o POST: ' + nomePost);
    }

    return(
        <View style={estilos.tela}>
            <Text style={estilos.titulo}>Foto de praia</Text>
            <BotaoCurtir nomePost="Foto de praia" aoPressionar={aoCurtir}/>

            <Text style={estilos.titulo}>Foto de cachorro</Text>
            <BotaoCurtir nomePost="Ola Mundo" aoPressionar={aoCurtir}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    titulo: {
        fontsize: 18,
        fontWeight: 'bold',
        color: '#21295C',
        marginBottom: 16
    }
})