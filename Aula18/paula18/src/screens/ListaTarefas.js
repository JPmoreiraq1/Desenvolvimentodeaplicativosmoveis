import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import {useState, useEffect} from 'react';

import { API_URL } from "../config/api";

export default function ListaTarefas({navigation}){
    //Objeto que armazenas as tarefas
    const [tasks, setTasks] = useState([]);
    //Interruptor que mostra se esta atualizando
    const [carregando, setCarregando] = useState(true);
    //Objeto para capturar os erros
    const [erro, setErro] = useState(null);

    async function getTasks(){
        try{
            setErro(null);
            setCarregando(true);

            //Fazendo o GET na URL e salvando o resultado
            const resposta = await fetch(`${API_URL}/tarefas`);
            //Se o servidor responder qualquer coisa <> 200 entao entra no IF
            if(!resposta.ok){
                throw new Error(`O servidor respondeu com erro: ${resposta.status}`);
            }
            //Converter a resposta do fetch em JSON
            const dados = await resposta.json();
            //Setando as tarefas no objeto
            setTasks(Array.isArray(dados) ? dados : []);
        }catch(erro){
            setErro(`Erro no getTasks: ${erro.message}`);
            console.log(`Erro no getTasks: ${erro.message}`);
        }finally{
            //Informando a aplicacao que a carga de tasks finalizou (com erro ou nao)
            setCarregando(false);
        }
    }

    //Garante que sera executada uma unica vez a getTasks quando a pagina é renderizada
    useEffect(()=>{
        getTasks();
    }, []);

    //Se estiver carregando os dados ele nao mostra o Flatlist
    if(carregando){
        return(
            <View>
                <ActivityIndicator size="large" />
                <Text>Carregando as tarefas...</Text>
            </View>
        )
    }

    return(
        <View>
            <Text>Lista de Tarefas</Text>
            {erro && <Text style={{ color: "red" }}>{erro}</Text>}

            <FlatList 
                data={tasks}
                keyExtractor={(item, index) => item?.id ? String(item.id) : String(index)}
                renderItem={({item})=>(<Text>{item.titulo || item.title}</Text>)}
            />
            <TouchableOpacity
                onPress={()=> navigation.navigate('NovaTarefa')}
            >
                <Text>+ Nova tarefa</Text>
            </TouchableOpacity>
        </View>
    )
}