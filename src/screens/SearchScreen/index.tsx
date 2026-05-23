import { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import ScreenWrapper from "../../components/screenWrapper";
import { getAllIndicacao } from "../../storage/indicacao/indicacaoGetAll";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type IndicacaoDTO = {
  id: string;
  name: string;
  descricao: string;

  especialidade: string;
  profissional: string;

  sintomas: string[];
  receitas: string[];
};

export function SearchScreen() {
  const navigation = useNavigation<any>();

  const [search, setSearch] = useState("");

  const [especialidadeSelecionada, setEspecialidadeSelecionada] =
    useState("");

  const [profissionalSelecionado, setProfissionalSelecionado] =
    useState("");

  const [indicacoes, setIndicacoes] = useState<IndicacaoDTO[]>([]);

  const [resultado, setResultado] = useState<IndicacaoDTO[]>([]);

  async function carregarIndicacoes() {
    const data = await getAllIndicacao();

    setIndicacoes(data);
    setResultado(data);
  }

  useFocusEffect(
    useCallback(() => {
      carregarIndicacoes();
    }, [])
  );

  // filtros
  function filtrar() {
    let dadosFiltrados = [...indicacoes];

    // busca por nome
    if (search.trim() !== "") {
      dadosFiltrados = dadosFiltrados.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // filtro especialidade
    if (especialidadeSelecionada !== "") {
      dadosFiltrados = dadosFiltrados.filter(
        (item) =>
          item.especialidade === especialidadeSelecionada
      );
    }

    // filtro profissional
    if (profissionalSelecionado !== "") {
      dadosFiltrados = dadosFiltrados.filter(
        (item) =>
          item.profissional === profissionalSelecionado
      );
    }

    setResultado(dadosFiltrados);
  }

  function limparFiltros() {
    setSearch("");
    setEspecialidadeSelecionada("");
    setProfissionalSelecionado("");

    setResultado(indicacoes);
  }

  // especialidades únicas
  const especialidades = [
    ...new Set(indicacoes.map((item) => item.especialidade)),
  ];

  // profissionais únicos
  const profissionais = [
    ...new Set(indicacoes.map((item) => item.profissional)),
  ];

  return (
    <ScreenWrapper>
      <View style={{ flex: 1, padding: 20 }}>
        {/* título */}
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#23482D",
          }}
        >
          Pesquisar Doenças
        </Text>

        {/* busca */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 14,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: "#DDE5D8",
            marginBottom: 20,
          }}
        >
          <EvilIcons name="search" size={28} color="#4E7A52" />

          <TextInput
            placeholder="Ex: ansiedade, gripe..."
            value={search}
            onChangeText={setSearch}
            style={{
              flex: 1,
              paddingVertical: 12,
            }}
          />
        </View>

        {/* especialidade */}
        <Text
          style={{
            fontWeight: "bold",
            marginBottom: 10,
            color: "#23482D",
          }}
        >
          Especialidade
        </Text>

        <FlatList
          horizontal
          data={especialidades}
          keyExtractor={(item, index) => `${item}-${index}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                setEspecialidadeSelecionada(
                  especialidadeSelecionada === item ? "" : item
                )
              }
              style={{
                backgroundColor:
                  especialidadeSelecionada === item
                    ? "#4E7A52"
                    : "#E8F1E3",

                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 20,
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  color:
                    especialidadeSelecionada === item
                      ? "#fff"
                      : "#2F5136",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* profissionais */}
        <Text
          style={{
            fontWeight: "bold",
            marginBottom: 10,
            color: "#23482D",
          }}
        >
          Profissional
        </Text>

        <FlatList
          horizontal
          data={profissionais}
          keyExtractor={(item, index) => `${item}-${index}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                setProfissionalSelecionado(
                  profissionalSelecionado === item ? "" : item
                )
              }
              style={{
                backgroundColor:
                  profissionalSelecionado === item
                    ? "#4E7A52"
                    : "#E8F1E3",

                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 20,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color:
                    profissionalSelecionado === item
                      ? "#fff"
                      : "#2F5136",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* botões */}
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={filtrar}
            style={{
              flex: 1,
              backgroundColor: "#4E7A52",
              padding: 14,
              borderRadius: 12,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Buscar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={limparFiltros}
            style={{
              backgroundColor: "#E8F1E3",
              padding: 14,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <MaterialCommunityIcons
              name="filter-remove"
              size={22}
              color="#2F5136"
            />
          </TouchableOpacity>
        </View>

        {/* lista */}
        <FlatList
          data={resultado}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 140,
          }}
          ListEmptyComponent={
            <Text
              style={{
                textAlign: "center",
                marginTop: 40,
                color: "#666",
              }}
            >
              Nenhuma doença encontrada.
            </Text>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate(
                  "DiseaseDetails",
                  {
                    indicacao: item,
                  }
                )
              }
              style={{
                backgroundColor: "#fff",
                padding: 18,
                borderRadius: 18,
                marginBottom: 14,

                shadowColor: "#000",
                shadowOpacity: 0.08,
                shadowRadius: 4,

                elevation: 2,
              }}
            >
              {/* nome */}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#23482D",
                }}
              >
                {item.name}
              </Text>

              {/* descrição curta */}
              <Text
                numberOfLines={2}
                style={{
                  marginTop: 8,
                  color: "#444",
                }}
              >
                {item.descricao}
              </Text>

              {/* infos */}
              <View
                style={{
                  marginTop: 14,
                  gap: 6,
                }}
              >
                <Text style={{ color: "#4E7A52" }}>
                  Especialidade: {item.especialidade}
                </Text>

                <Text style={{ color: "#4E7A52" }}>
                  Profissional: {item.profissional}
                </Text>

                <Text style={{ color: "#4E7A52" }}>
                  Sintomas: {item.sintomas?.slice(0, 2).join(", ")}
                </Text>
              </View>

              {/* botão */}
              <View
                style={{
                  marginTop: 14,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    color: "#4E7A52",
                    fontWeight: "bold",
                  }}
                >
                  Ver detalhes
                </Text>

                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="#4E7A52"
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}