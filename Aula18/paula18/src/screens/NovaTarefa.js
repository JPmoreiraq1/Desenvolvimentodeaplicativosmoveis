import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function NovaTarefa({navigation}) {
    const [titulo, useTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [enviando, setEnviando] = useState(false);

    async function saveTask(){
    }

  return (
    <ScrollView>
      <Text>NOVA TAREFA</Text>
      <View>
        <Text>Titulo da tarefa:</Text>
        <TextInput
        placeholder="Ex: Enviar e-mail para o cliente"
        value={titulo}
        onChangeText={setTitulo}
        />
      </View>
      <View>
        <Text>Descrição da Tarefa</Text>
        <TextInput  
        placeholder="Detalhes da tarefa XPTO......................"
        value={descricao}
        onChangeText={setDescricao}
        />
      </View>

      <TouchableOpacity>
        <Text>SALVAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.goBack() }
      >
        <Text>CANCELAR</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
