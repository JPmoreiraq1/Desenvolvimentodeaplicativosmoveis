import { View, Text, StyleSheet } from "react-native";

export default function Aura(){
    return (
       <View style={estilo.container}>
            <Text>Não sou betinha!</Text>
       </View>
    )
}

export function Aura9k(){
    return(
        <View style={estilo.container}>
            <Text>Aura +999999999</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 20
    }
})