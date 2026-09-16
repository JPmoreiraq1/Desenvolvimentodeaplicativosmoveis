import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function Home() {
    function aoDigitar(textoDigitado) {
        console.log(`Texto digitado: ${textoDigitado}`);
    }
 
    return (
    <View style={styles.container}>
        <View style={styles.containerInput}>
        <Text style={styles.label}>Nome</Text>
        <TextInput placeholder="Digite o seu texto aqui" 
        style={styles.input}
        onChangeText={aoDigitar}
        />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Idade</Text>
        <TextInput  
        style={styles.input}
        placeholder ="Digite a sua idade"
        onChangeText={aoDigitar}
        keyboardType="numeric"
        />
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8b848b',
        flexDirection: 'column',
        gap: 10,
    },
    containerInput: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginBottom: 12,
        marginStart: 8,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fffffffa',
    }
})