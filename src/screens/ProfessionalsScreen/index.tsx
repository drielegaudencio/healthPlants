// ProfessionalsScreen.tsx

import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ScreenWrapper from "../../components/screenWrapper";
import { styles } from "./styles";

import { colabGetAll } from "../../storage/colaborador/colabGetAll";
import { adressGetAll } from "../../storage/adress/adressGetAll";

export function ProfessionalsScreen() {
  const [profissionais, setProfissionais] = useState<any[]>([]);
  const [profissionaisFiltrados, setProfissionaisFiltrados] = useState<any[]>(
    []
  );

  const [buscaProfissao, setBuscaProfissao] = useState("");
  const [buscaEspecialidade, setBuscaEspecialidade] = useState("");

  const [mostrarTodos, setMostrarTodos] = useState(false);

  // Cidade do usuário logado
  const cidadeUsuario = "São Paulo";

  useEffect(() => {
    loadProfessionals();
  }, []);

  async function loadProfessionals() {
    try {
      const colaboradores = await colabGetAll();
      const enderecos = await adressGetAll();

      const profissionaisComCidade = colaboradores.map((prof: any) => {
        const endereco = enderecos.find(
          (item: any) => item.idUser === prof.idUser
        );

        return {
          ...prof,
          cidade: endereco?.city || "",
        };
      });

      setProfissionais(profissionaisComCidade);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let resultado = profissionais;

    // Mostrar apenas da mesma cidade
    if (!mostrarTodos) {
      resultado = resultado.filter(
        (item) =>
          item.cidade.toLowerCase() === cidadeUsuario.toLowerCase()
      );
    }

    // Busca profissão
    if (buscaProfissao) {
      resultado = resultado.filter((item) =>
        item.profission
          ?.toLowerCase()
          .includes(buscaProfissao.toLowerCase())
      );
    }

    // Busca especialidade
    if (buscaEspecialidade) {
      resultado = resultado.filter((item) =>
        item.especialidade
          ?.toLowerCase()
          .includes(buscaEspecialidade.toLowerCase())
      );
    }

    setProfissionaisFiltrados(resultado);
  }, [
    buscaProfissao,
    buscaEspecialidade,
    profissionais,
    mostrarTodos,
  ]);

  return (
    <ScreenWrapper>
      <FlatList
        data={profissionaisFiltrados}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
        ListHeaderComponent={
          <>
            {/* HEADER */}
            <View style={styles.header}>
              <View style={styles.headerIcon}>
                <MaterialCommunityIcons
                  name="stethoscope"
                  size={36}
                  color="#406B45"
                />
              </View>

              <Text style={styles.title}>
                Profissionais Especializados
              </Text>

              <Text style={styles.subtitle}>
                Encontre especialistas próximos de você
              </Text>
            </View>

            {/* BOTÃO */}
            <TouchableOpacity
              style={styles.cityButton}
              onPress={() => setMostrarTodos(!mostrarTodos)}
            >
              <Icon
                name="location-city"
                size={22}
                color="#FFFFFF"
              />

              <Text style={styles.cityButtonText}>
                {mostrarTodos
                  ? "Mostrar somente da minha cidade"
                  : "Listar todos por cidade"}
              </Text>
            </TouchableOpacity>

            {/* BUSCA PROFISSÃO */}
            <View style={styles.searchContainer}>
              <Icon
                name="medical-services"
                size={22}
                color="#6DBA75"
              />

              <TextInput
                placeholder="Buscar profissão..."
                placeholderTextColor="#999"
                value={buscaProfissao}
                onChangeText={setBuscaProfissao}
                style={styles.input}
              />
            </View>

            {/* BUSCA ESPECIALIDADE */}
            <View style={styles.searchContainer}>
              <Icon
                name="badge"
                size={22}
                color="#6DBA75"
              />

              <TextInput
                placeholder="Buscar especialidade..."
                placeholderTextColor="#999"
                value={buscaEspecialidade}
                onChangeText={setBuscaEspecialidade}
                style={styles.input}
              />
            </View>

            <Text style={styles.resultText}>
              {profissionaisFiltrados.length} profissionais encontrados
            </Text>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* FOTO */}
            <View style={styles.avatar}>
              <MaterialCommunityIcons
                name="account"
                size={44}
                color="#406B45"
              />
            </View>

            {/* INFO */}
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.profession}>
                {item.profission}
              </Text>

              <Text style={styles.specialty}>
                {item.especialidade}
              </Text>

              <View style={styles.cityRow}>
                <Icon
                  name="location-on"
                  size={18}
                  color="#406B45"
                />

                <Text style={styles.cityText}>
                  {item.cidade}
                </Text>
              </View>

              <Text style={styles.description}>
                {item.biografia || "Sem biografia cadastrada"}
              </Text>
            </View>
          </View>
        )}
      />
    </ScreenWrapper>
  );
}