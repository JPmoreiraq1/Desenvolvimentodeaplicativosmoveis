
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { API_URL } from '../config/api';

export default function ListaTarefaScreen() {
    //dados vindos da API
    const [filmes, setFIlmes] = useState([]);

    //interruptor para informar se já carregou
    const [carregando, setCarregando] = useState(true);

    //erros
    const [erro, setErro] = useState(null);

    //Função que obtem os dados da API
    async function getData() {
        try {
            //limpando o objeto de erro
            setErro(null);

            //acessando a API e fazendo a requisição GET
            const resposta = await fetch(`${API_URL}/movies.json`);

            if (!resposta.ok) {
                throw new Error(
                    'O servidor respondeu com erro: ' + resposta.status
                );
            }

            const dados = await resposta.json();

            setFIlmes(dados);

            console.log('Dados vindos da API:', dados);
        } catch (error) {
            setErro(error.message);
        } finally {
            //informa a aplicação que foi finalizado a requisição
            setCarregando(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View>
            <Text>Lista de Tarefas</Text>

            {carregando && <Text>Carregando...</Text>}

            {erro && <Text>Erro: {erro}</Text>}

            {!carregando && !erro && (
                <Text>
                    Filmes carregados: {
                        Array.isArray(filmes)
                            ? filmes.length
                            : Object.keys(filmes || {}).length
                    }
                </Text>
            )}
        </View>
    );
}
