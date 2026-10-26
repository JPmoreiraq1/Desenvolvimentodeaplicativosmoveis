import { ActivityIndicator, Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import {useState} from 'react';
import { API_URL } from "../config/api";

export default function NovaTarefa({navigation}){
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [enviando, setEnviando] = useState(false);

    async function saveTask(){
        //Se nao tiver titulo (obrigatorio) nao salva a tarefa
        if(!titulo.trim()){
            console.log("Titulo da tarefa e obrigatorio");
            Alert.alert("Ops!", "Titulo da Tarefa e obrigatorio");
            return;
        }
        //Notifica o APP que esta conectando a uma API para enviar dados
        setEnviando(true);

        try{
            //Inicia uma requisicao do tipo POST com os dados do formulario
            const response = await fetch(`${API_URL}/tarefas`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({titulo, descricao})
            });

            if(!response.ok){
                const corpoErro = await response.json().catch(()=> ({}));
                console.log(`Erro ao enviar tarefa para o servidor: ${JSON.stringify(corpoErro)}`);
                throw new Error(`Erro ao enviar tarefa para o servidor: ${response.status}`);
            }

            navigation.navigate("ListaTarefas");
        }catch(erro){
            Alert.alert("Erro ao salvar", "Erro ao salvar tarefa no servidor");
        }finally{
            setEnviando(false);
        }
    }

    return(
        <ScrollView>
            <Text>Nova Tarefa</Text>

            <View>
                <Text>Título da Tarefa:</Text>
                <TextInput 
                    placeholder="Ex.: Enviar e-mail para o cliente"
                    value={titulo}
                    onChangeText={setTitulo}
                />
            </View>
            <View>
                <Text>Descrição da Tarefa</Text>
                <TextInput 
                    placeholder="Detalhes da tarefa XPTO..."
                    value={descricao}
                    onChangeText={setDescricao}
                />
            </View>
            <TouchableOpacity
                onPress={saveTask}
            >
                {enviando ? (<ActivityIndicator />) : (<Text>Salvar</Text>)}
                
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => navigation.goBack() }
            >
                <Text>Cancelar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}