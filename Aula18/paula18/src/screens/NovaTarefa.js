import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { API_URL } from "../config/api";

export default function NovaTarefa({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function saveTask() {
    // Se não tiver título (obrigatório) não salva a tarefa
    if (!titulo.trim()) {
      Alert.alert("Atenção", "O título da tarefa é obrigatório!");
      return;
    }

    // Notifica o app que está conectando à API para enviar dados
    setEnviando(true);

    try {
      // Inicia uma requisição do tipo POST com os dados do formulário
      const response = await fetch(`${API_URL}/tarefas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo: titulo.trim(),
          descricao: descricao.trim(),
          concluido: false,
          concluida: false,
        }),
      });

      if (!response.ok) {
        const corpoErro = await response.json().catch(() => ({}));
        console.log(
          `Erro ao enviar tarefa para o servidor: ${JSON.stringify(corpoErro)}`
        );
        throw new Error(
          corpoErro?.message || `Erro do servidor (${response.status})`
        );
      }

      Alert.alert("Sucesso", "Tarefa cadastrada com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (erro) {
      console.log(`Erro em saveTask: ${erro.message}`);
      Alert.alert(
        "Erro ao salvar",
        erro.message || "Não foi possível salvar a tarefa no servidor."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerTitle}>Criar Tarefa</Text>
        <Text style={styles.headerSubtitle}>
          Preencha as informações para registrar uma nova tarefa.
        </Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Título da Tarefa *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: Enviar e-mail para o cliente"
            placeholderTextColor="#999"
            value={titulo}
            onChangeText={setTitulo}
            editable={!enviando}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Descrição da Tarefa</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Detalhes ou observações sobre a tarefa..."
            placeholderTextColor="#999"
            value={descricao}
            onChangeText={setDescricao}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            editable={!enviando}
          />
        </View>

        <TouchableOpacity
          style={[styles.botaoSalvar, enviando && styles.botaoDesabilitado]}
          onPress={saveTask}
          disabled={enviando}
          activeOpacity={0.8}
        >
          {enviando ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.botaoSalvarTexto}>Salvar Tarefa</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCancelar}
          onPress={() => navigation.goBack()}
          disabled={enviando}
          activeOpacity={0.7}
        >
          <Text style={styles.botaoCancelarTexto}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dcdde1",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#333",
  },
  textArea: {
    height: 100,
  },
  botaoSalvar: {
    backgroundColor: "#1e88e5",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  botaoDesabilitado: {
    backgroundColor: "#90caf9",
  },
  botaoSalvarTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoCancelar: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  botaoCancelarTexto: {
    color: "#777",
    fontSize: 15,
    fontWeight: "600",
  },
});