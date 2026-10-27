import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { API_URL } from "../config/api";

export default function ListaTarefas({ navigation }) {
  // Objeto que armazena as tarefas
  const [tasks, setTasks] = useState([]);
  // Interruptor que mostra se está atualizando
  const [carregando, setCarregando] = useState(true);
  // Objeto para capturar os erros
  const [erro, setErro] = useState(null);

  async function getTasks() {
    try {
      setErro(null);
      setCarregando(true);

      // Fazendo o GET na URL e salvando o resultado
      const resposta = await fetch(`${API_URL}/tarefas`);

      // Se o servidor responder qualquer coisa <> 200 então entra no IF
      if (!resposta.ok) {
        throw new Error(`O servidor respondeu com status: ${resposta.status}`);
      }

      // Converter a resposta do fetch em JSON
      const dados = await resposta.json();

      // Setando as tarefas no objeto garantindo formato de array
      setTasks(Array.isArray(dados) ? dados : []);
    } catch (erro) {
      setErro(`Erro ao carregar tarefas: ${erro.message}`);
      console.log(`Erro no getTasks: ${erro.message}`);
    } finally {
      // Informando a aplicação que a carga de tasks finalizou (com erro ou não)
      setCarregando(false);
    }
  }

  async function alternarConcluida(tarefa) {
    const statusAtual = Boolean(tarefa.concluido ?? tarefa.concluida);
    const novoStatus = !statusAtual;

    // Atualização "otimista": altera primeiro o estado local
    setTasks((atuais) =>
      atuais.map((t) =>
        t.id === tarefa.id
          ? { ...t, concluido: novoStatus, concluida: novoStatus }
          : t
      )
    );

    // Depois sincroniza com o servidor/API
    try {
      let resposta = await fetch(`${API_URL}/tarefas/${tarefa.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          concluido: novoStatus,
          concluida: novoStatus,
        }),
      });

      // Se o servidor não aceitar PATCH (404/405), tenta PUT
      if (!resposta.ok && (resposta.status === 404 || resposta.status === 405)) {
        resposta = await fetch(`${API_URL}/tarefas/${tarefa.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...tarefa,
            concluido: novoStatus,
            concluida: novoStatus,
          }),
        });
      }

      if (!resposta.ok) {
        throw new Error(`Servidor respondeu com código ${resposta.status}`);
      }
    } catch (erroReq) {
      console.log(`Erro ao sincronizar status da tarefa: ${erroReq.message}`);
      // Reverte a alteração otimista em caso de erro na API
      setTasks((atuais) =>
        atuais.map((t) =>
          t.id === tarefa.id
            ? { ...t, concluido: statusAtual, concluida: statusAtual }
            : t
        )
      );
      Alert.alert(
        "Erro ao atualizar",
        "Não foi possível salvar o status da tarefa no servidor."
      );
    }
  }

  // Recarrega as tarefas sempre que a tela ganha foco (ex.: ao voltar de NovaTarefa)
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getTasks();
    });
    return unsubscribe;
  }, [navigation]);

  // Se estiver na primeira carga e carregando os dados, mostra o indicador
  if (carregando && tasks.length === 0 && !erro) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#1e88e5" />
        <Text style={styles.carregandoTexto}>Carregando tarefas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {erro && (
        <View style={styles.erroBox}>
          <Text style={styles.erroTexto}>{erro}</Text>
          <TouchableOpacity style={styles.erroBotao} onPress={getTasks}>
            <Text style={styles.erroBotaoTexto}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={tasks}
        keyExtractor={(item, index) =>
          item?.id != null ? String(item.id) : String(index)
        }
        refreshing={carregando}
        onRefresh={getTasks}
        contentContainerStyle={
          tasks.length === 0 ? styles.emptyListContent : styles.listContent
        }
        ListEmptyComponent={
          !carregando && (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>Nenhuma tarefa cadastrada</Text>
              <Text style={styles.emptySubtitle}>
                Clique no botão abaixo para adicionar sua primeira tarefa.
              </Text>
            </View>
          )
        }
        renderItem={({ item }) => {
          const isConcluida = Boolean(item.concluido ?? item.concluida);
          return (
            <TouchableOpacity
              style={[styles.card, isConcluida && styles.cardConcluido]}
              onPress={() => alternarConcluida(item)}
              activeOpacity={0.7}
            >
              <View style={styles.cardHeader}>
                <Text
                  style={[
                    styles.cardTitulo,
                    isConcluida && styles.textoRiscado,
                  ]}
                >
                  {item.titulo || item.title || "Sem título"}
                </Text>
                <View
                  style={[
                    styles.badge,
                    isConcluida ? styles.badgeConcluida : styles.badgePendente,
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeTexto,
                      isConcluida
                        ? styles.badgeTextoConcluida
                        : styles.badgeTextoPendente,
                    ]}
                  >
                    {isConcluida ? "✓ Concluída" : "○ Pendente"}
                  </Text>
                </View>
              </View>

              {item.descricao ? (
                <Text style={styles.cardDescricao}>{item.descricao}</Text>
              ) : null}

              <Text style={styles.cardDica}>
                Toque para marcar como {isConcluida ? "pendente" : "concluída"}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity
        style={styles.botaoNovaTarefa}
        onPress={() => navigation.navigate("NovaTarefa")}
        activeOpacity={0.8}
      >
        <Text style={styles.botaoNovaTarefaTexto}>+ Nova Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f6fa",
    padding: 20,
  },
  carregandoTexto: {
    marginTop: 12,
    fontSize: 16,
    color: "#555",
  },
  listContent: {
    padding: 16,
    paddingBottom: 90,
  },
  emptyListContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyContainer: {
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  erroBox: {
    backgroundColor: "#ffebee",
    padding: 12,
    margin: 16,
    marginBottom: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ef9a9a",
  },
  erroTexto: {
    color: "#c62828",
    fontSize: 14,
  },
  erroBotao: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#c62828",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  erroBotaoTexto: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderLeftWidth: 4,
    borderLeftColor: "#ff9800",
  },
  cardConcluido: {
    borderLeftColor: "#4caf50",
    backgroundColor: "#fafafa",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    flex: 1,
    marginRight: 8,
  },
  textoRiscado: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  cardDescricao: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  cardDica: {
    fontSize: 11,
    color: "#999",
    fontStyle: "italic",
    marginTop: 4,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  badgeConcluida: {
    backgroundColor: "#e8f5e9",
  },
  badgePendente: {
    backgroundColor: "#fff3e0",
  },
  badgeTexto: {
    fontSize: 12,
    fontWeight: "bold",
  },
  badgeTextoConcluida: {
    color: "#2e7d32",
  },
  badgeTextoPendente: {
    color: "#e65100",
  },
  botaoNovaTarefa: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#1e88e5",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  botaoNovaTarefaTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});