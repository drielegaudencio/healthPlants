import { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import ScreenWrapper from "../../components/screenWrapper";
import { getAllIndicacao } from "../../storage/indicacao/indicacaoGetAll";
import EvilIcons from '@expo/vector-icons/EvilIcons';

const especialidades = [
  { id: "1", nome: "Fitoterapia" },
  { id: "2", nome: "Homeopatia" },
  { id: "3", nome: "Nutrição Natural" },
  { id: "4", nome: "Terapias Integrativas" },
];

type IndicacaoDTO = {
  id: string;
  name: string;
  descricao: string;
  idEspecialidade: string;
};

export function SearchScreen() {
  const [search, setSearch] = useState("");
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState("");
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

  function filtrar() {
    let dadosFiltrados = indicacoes;

    if (search.trim() !== "") {
      dadosFiltrados = dadosFiltrados.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (especialidadeSelecionada !== "") {
      dadosFiltrados = dadosFiltrados.filter(
        (item) => item.idEspecialidade === especialidadeSelecionada
      );
    }

    setResultado(dadosFiltrados);
  }

  function limparFiltros() {
    setSearch("");
    setEspecialidadeSelecionada("");
    setResultado(indicacoes);
  }

  return (
    <ScreenWrapper>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          Pesquisar <EvilIcons name="search" size={24} color="black" />
        </Text>

        <Text>Nome da doença ou indicação</Text>
        <TextInput
          placeholder="Ex: ansiedade, insônia, dor..."
          value={search}
          onChangeText={setSearch}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            padding: 12,
            marginBottom: 15,
          }}
        />

        <Text>Especialidade</Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {especialidades.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setEspecialidadeSelecionada(item.id)}
              style={{
                backgroundColor:
                  especialidadeSelecionada === item.id ? "#4E7A52" : "#E4EEDC",
                paddingVertical: 10,
                paddingHorizontal: 14,
                borderRadius: 20,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color:
                    especialidadeSelecionada === item.id ? "#fff" : "#2F5136",
                }}
              >
                {item.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={filtrar}
          style={{
            backgroundColor: "#4E7A52",
            padding: 14,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={limparFiltros}
          style={{
            padding: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#4E7A52" }}>Limpar filtros</Text>
        </TouchableOpacity>

        <FlatList
          data={resultado}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 30 }}>
              Nenhuma indicação encontrada.
            </Text>
          }
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#fff",
                padding: 15,
                borderRadius: 12,
                marginBottom: 12,
                elevation: 2,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.name}
              </Text>

              <Text style={{ marginTop: 6 }}>{item.descricao}</Text>

              <Text style={{ marginTop: 8, color: "#4E7A52" }}>
                Especialidade:{" "}
                {
                  especialidades.find(
                    (esp) => esp.id === item.idEspecialidade
                  )?.nome
                }
              </Text>
            </View>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}