import { View, Text, StyleSheet } from "react-native";

export default function Caixa({cor, numero}) {
    return (
        <View style={[estilo.caixa, {backgroundColor: cor}]}>
            <Text style={estilo.texto}>{numero}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    caixa: {
        width: 80,
        height: 80,
        margin:15 ,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },

    texto: {
        color: '#c70b0b',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'yellow'
    }
});