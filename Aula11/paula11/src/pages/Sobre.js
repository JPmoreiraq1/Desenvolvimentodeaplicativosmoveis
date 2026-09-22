import { View, Text, Button, StyleSheet } from "react-native";

export default function Sobre({ navigation }) {
    return (
        <View style={estilos.tela}>
            <Text style={estilos.texto}>Tela sobre</Text>

            <Button
                title="Voltar"
                color="blue"
                onPress={() => navigation.goBack()}
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
        backgroundColor: "green"
    },

    texto: {
        fontSize: 14,
        color: "black",
        textAlign: "center",
        marginBottom: 24
    }
});