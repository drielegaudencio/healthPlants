import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import ScreenWrapper from "../../components/screenWrapper";
import { themes } from "../../global/styles/color";
import { createIndicacao } from "../../storage/indicacao/indicacaoCreate";
import { getAllIndicacao } from "../../storage/indicacao/indicacaoGetAll";
import {styles} from "./style";

export function IndicacaoCadScreen() {
  // dados principais
  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");

  // novos campos
  const [especialidade, setEspecialidade] = useState("");
  const [profissional, setProfissional] = useState("");
  const [sintomas, setSintomas] = useState("");

  // receitas relacionadas
  const [receita1, setReceita1] = useState("");
  const [receita2, setReceita2] = useState("");
  const [receita3, setReceita3] = useState("");

  async function handleNewIndicacao() {
    const receitas = [receita1, receita2, receita3].filter(
      (item) => item.trim() !== ""
    );

    const data = {
      id: String(Date.now()),
      name,
      descricao,

      // novos campos
      especialidade,
      profissional,

      // transforma sintomas em array
      sintomas: sintomas
        .split(",")
        .map((item) => item.trim()),

      // array de receitas
      receitas,
    };

    console.log("Indicação cadastrada ->", data);

    await createIndicacao(data);

    const result = await getAllIndicacao();

    console.log("Todas indicações ->", result);

    // limpa os campos
    setName("");
    setDescricao("");
    setEspecialidade("");
    setProfissional("");
    setSintomas("");
    setReceita1("");
    setReceita2("");
    setReceita3("");
  }

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Título */}
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#23482D",
          }}
        >
          Cadastro de Indicação
        </Text>

        {/* Nome */}
        <Text style={styles.label}>Nome da Indicação</Text>

        <TextInput
          placeholder="Ex: Ansiedade"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        {/* Especialidade */}
        <Text style={styles.label}>Especialidade</Text>

        <TextInput
          placeholder="Ex: Neurologia"
          value={especialidade}
          onChangeText={setEspecialidade}
          style={styles.input}
        />

        {/* Profissional */}
        <Text style={styles.label}>Profissional</Text>

        <TextInput
          placeholder="Ex: Psicólogo, Médico..."
          value={profissional}
          onChangeText={setProfissional}
          style={styles.input}
        />

        {/* Sintomas */}
        <Text style={styles.label}>Sintomas</Text>

        <TextInput
          placeholder="Ex: dor de cabeça, insônia, estresse"
          value={sintomas}
          onChangeText={setSintomas}
          multiline
          style={[styles.input, { minHeight: 80 }]}
        />

        {/* Descrição */}
        <Text style={styles.label}>Descrição</Text>

        <TextInput
          placeholder="Descreva a indicação"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          style={[styles.input, { minHeight: 120 }]}
        />

        {/* Receitas */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 15,
            marginBottom: 10,
            color: "#23482D",
          }}
        >
          Receitas Relacionadas
        </Text>

        <TextInput
          placeholder="Receita 1"
          value={receita1}
          onChangeText={setReceita1}
          style={styles.input}
        />

        <TextInput
          placeholder="Receita 2"
          value={receita2}
          onChangeText={setReceita2}
          style={styles.input}
        />

        <TextInput
          placeholder="Receita 3"
          value={receita3}
          onChangeText={setReceita3}
          style={styles.input}
        />

        {/* Botão */}
        <TouchableOpacity
          onPress={handleNewIndicacao}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Cadastrar Indicação
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
}