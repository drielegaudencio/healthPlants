// ProfessionalsScreen.tsx

import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ScreenWrapper from "../../components/screenWrapper";
import { styles } from "./styles";

import { colabGetAll } from "../../storage/colaborador/colabGetAll";
import { adressGetAll } from "../../storage/adress/adressGetAll";

import { useAuth } from "../../context/AuthContext";

export function ProfessionalsScreen() {
  const { user } = useAuth();

  const [profissionais, setProfissionais] = useState<any[]>([]);
  const [profissionaisFiltrados, setProfissionaisFiltrados] =
    useState<any[]>([]);

  const [cidadeUsuario, setCidadeUsuario] = useState("");

  const [buscaProfissao, setBuscaProfissao] = useState("");
  const [buscaEspecialidade, setBuscaEspecialidade] =
    useState("");

  const [mostrarTodos, setMostrarTodos] = useState(false);

  useEffect(() => {
    loadProfessionals();
  }, []);

  async function loadProfessionals() {
    try {
      // colaboradores
      const colaboradores = await colabGetAll();

      // endereços
      const enderecos = await adressGetAll();

      // pega cidade do usuário logado
      if (user?.id) {
        const enderecoUsuario = enderecos.find(
          (item: any) => item.idUser === user.id
        );

        setCidadeUsuario(enderecoUsuario?.city || "");
      }

      // junta colaborador + endereço
      const profissionaisComCidade = colaboradores.map(
        (prof: any) => {
          const endereco = enderecos.find(
            (item: any) => item.idUser === prof.idUser
          );

          return {
            ...prof,

            cidade: endereco?.city || "",

            estado: endereco?.state || "",

            bairro: endereco?.bairro || "",
          };
        }
      );

      console.log(
        "Profissionais com cidade:",
        profissionaisComCidade
      );

      setProfissionais(profissionaisComCidade);

      setProfissionaisFiltrados(
        profissionaisComCidade
      );
    } catch (error) {
      console.log("ERRO:", error);
    }
  }

  useEffect(() => {
    let resultado = [...profissionais];

    // somente mesma cidade
    if (!mostrarTodos && cidadeUsuario) {
      resultado = resultado.filter(
        (item) =>
          item.cidade?.toLowerCase() ===
          cidadeUsuario.toLowerCase()
      );
    }

    // busca profissão
    if (buscaProfissao.trim() !== "") {
      resultado = resultado.filter((item) =>
        item.profission
          ?.toLowerCase()
          .includes(buscaProfissao.toLowerCase())
      );
    }

    // busca especialidade
    if (buscaEspecialidade.trim() !== "") {
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
    cidadeUsuario,
  ]);

  return (
    <ScreenWrapper>
      <FlatList
        data={profissionaisFiltrados}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
        }}
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

              {!mostrarTodos && cidadeUsuario ? (
                <Text
                  style={{
                    color: "#406B45",
                    marginTop: 6,
                    fontWeight: "600",
                  }}
                >
                  Sua cidade: {cidadeUsuario}
                </Text>
              ) : null}
            </View>

            {/* BOTÃO */}
            <TouchableOpacity
              style={styles.cityButton}
              onPress={() =>
                setMostrarTodos(!mostrarTodos)
              }
            >
              <Icon
                name="location-city"
                size={22}
                color="#FFFFFF"
              />

              <Text style={styles.cityButtonText}>
                {mostrarTodos
                  ? "Mostrar somente da minha cidade"
                  : "Mostrar todos os profissionais"}
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
              {profissionaisFiltrados.length} profissionais
              encontrados
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
              <Text style={styles.name}>
                {item.name || "Profissional"}
              </Text>

              <Text style={styles.profession}>
                {item.profission}
              </Text>

              <Text style={styles.specialty}>
                {item.especialidade}
              </Text>

              {/* cidade */}
              <View style={styles.cityRow}>
                <Icon
                  name="location-on"
                  size={18}
                  color="#406B45"
                />

                <Text style={styles.cityText}>
                  {item.cidade || "Cidade não informada"}
                </Text>
              </View>

              {/* bio */}
              <Text style={styles.description}>
                {item.biografia ||
                  "Sem biografia cadastrada"}
              </Text>
            </View>
          </View>
        )}
      />
    </ScreenWrapper>
  );
}