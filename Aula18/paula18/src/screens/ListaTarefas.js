import { Text, View } from "react-native";
import { API_URL } from "../config/api";
import { useState } from "react";

export default function ListaTarefas(navigation) {
  //objeto que armazena as tarefas
  const [tasks, setTasks] = useState([]);
  //interruptor que mostra se esta  atualiando
  const [carregando, setCarregando] = useState(true);
  //Objeto para capturar os erros
  const [erro, setErro] = useState(null);

  async function getTask() {
    try {
      setErro(null);
      setCarregando(true);
      //fazendo o GET na url e salvando o resultado
      const resposta = await fetch(`${API_URL}/tarefas`);
      //Se o servidor responder qualquer coisa <> 200 entra no if
      if (!resposta.ok) {
        throw new Error(`O servidor respondeu com erro ${resposta.status}`);
      }
      //converter a resposta fo fetch em JSON/
      const dados = await resposta.json();
      //Setando as tarefas no objeto
      setTasks(dados);
    } catch (erro) {
      setErro(`Erro no getTasks: ${erro.message}`);
      console.error(`Erro no getTasks: ${erro.message}`);
    } finally {
      setCarregando(false);
    }

    useEffect(() => {
      getTask();
    }, []);

    if (carregando) {
      return (
        <View>
          <ActivityIndicator size="large" />
          <Text>Carregando Tarefas...</Text>
          <TouchbleOpacity onPress={() => navigation.navigate("NovaTarefa")}>
            <Text>+Nova Tarefa</Text>
          </TouchbleOpacity>
        </View>
      );
    }
  }
  return (
    <View>
      <Text>ListaTarefas</Text>
      <FlatList>
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem=
        {({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      </FlatList>
    </View>
  );
}