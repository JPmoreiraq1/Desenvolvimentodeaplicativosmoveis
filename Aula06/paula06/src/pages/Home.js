import {FlatList, StyleSheet, Text, View } from "react-native-web"

const FRUTAS = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga', 'Abacaxi', 
    'Ameixa', 'Kiwi', 'Morango', 'Tomate']

export default function Home() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Pagina Home !!</Text>
            <FlatList
                data={FRUTAS}
                keyExtractor={(item) => item}
                renderItem={({item}) => (<View style={estilos.linha}>
                    <Text style={estilos.texto}>{item}</Text>
                </View>)}
                contentContainerStyle={estilos.conteudo}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b0f54",
        justifyContent: "center",
        alignItems: "center"
    },
    linha: {
        backgroundColor: "#6b1717",
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "#eee" 
    },
    texto: {
        fontSize: 20,
        color:'rgb(0, 255, 255)',
    },
    conteudo:{
        paddingTop: 60,
        backgroundColor:'green'
    }
})