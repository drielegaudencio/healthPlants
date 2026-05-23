// CatalogScreen.tsx

import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenWrapper from "../../components/screenWrapper";
import { themes } from "../../global/styles/color";
import { PlantStorageDTO } from "../../storage/plant/PlantStorageDTO";
import { getAllPlants } from "../../storage/plant/plantGetAll";
import { CollectionCard } from "../../components/ColectionCard";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from "./style";
import { ScrollView } from "react-native/";
import { useAuth } from "../../context/AuthContext";

export function CatalogScreen() {
  
  const navigation = useNavigation<any>();
  const [dataPlants, setDataPlants] = useState<PlantStorageDTO[]>([]);
const [plantasFiltradas, setPlantasFiltradas] = useState<any[]>([]);
const [favorite, setFavorite] = useState("")
const [ordem, setOrdem] = useState<"az" | "za">("az");
const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
const [showCategorias, setShowCategorias] = useState(false);

const categorias = [
  "Todas",
  "Planta Medicinal",
  "Planta Alimentícia",
  "Planta Ornamental",
  "Fruta",
  "Legume",
  "Verdura",
  "PANC",
]
  async function carregarPlantas() {
    const data: PlantStorageDTO[] = await getAllPlants();
    setDataPlants(data);
    setPlantasFiltradas(data);
  }
  useFocusEffect(
    useCallback(() => {
      carregarPlantas();
    }, [])
  );
//Função para aplicar os filtros de categoria e ordenação
  function aplicarFiltros(
  categoria = categoriaSelecionada,
  ordemAtual = ordem
) {
  let lista = [... dataPlants];

  // filtro categoria
  if (categoria !== "" && categoria !== "Todas") {
    lista = lista.filter(
      (item) => item.tipo === categoria
    );
  }

  // ordenação
  lista.sort((a, b) => {
    if (ordemAtual === "az") {
      return a.namePop.localeCompare(b.namePop);
    }

    return b.namePop.localeCompare(a.namePop);
  });

  setPlantasFiltradas(lista);
}
//Função para alternar a ordenação
function toggleOrdem() {
  const novaOrdem = ordem === "az" ? "za" : "az";

  setOrdem(novaOrdem);

  aplicarFiltros(categoriaSelecionada, novaOrdem);
}

//Função para selecionar a categoria
function selecionarCategoria(categoria: string) {
  setCategoriaSelecionada(categoria);

  aplicarFiltros(categoria, ordem);
}

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <View style={styles.card}>
          <MaterialIcons name="emoji-nature" size={28} color="#07ac59" />
          <Text style={styles.headerText}>Catálogo Botânico</Text>
          <MaterialIcons name="emoji-nature" size={28} color="#07ac59" transform={[{ rotate: "265deg" }]} />
        </View>

        <View style={styles.filters}>

          <TouchableOpacity style={styles.filterButton1} onPress={toggleOrdem}>
            <MaterialCommunityIcons name="sort-alphabetical-ascending" size={20} color="#406B45" />
            {/* <Text style={styles.filterText}>Ordem: Alfabético</Text> */}
            <Text style={styles.filterText}>
              {ordem === "az" ? "A-Z" : "Z-A"}
            </Text>
            <Feather name="chevron-down" size={18} color="#406B45" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton2} onPress={() => setShowCategorias(!showCategorias)}>
            <MaterialCommunityIcons name="filter" size={20} color="#406B45" />
            {/* <Text style={styles.filterText}>Ordem: Alfabético</Text> */}
            <Text style={styles.filterText}>
              {categoriaSelecionada || "Categoria"}
            </Text>

            <Feather
              name={showCategorias ? "chevron-up" : "chevron-down"}
              size={20}
              color="#406B45"
            />
          </TouchableOpacity>
        </View>
      </View>
          {showCategorias && (
            <View style={styles.categoryBox}>
              {categorias.map((categoria) => (
                <TouchableOpacity
                  key={categoria}
                  style={[
                    styles.categoryItem,
                    categoriaSelecionada === categoria &&
                      styles.categorySelected,
                  ]}
                  onPress={() => {
                    selecionarCategoria(categoria);
                    setShowCategorias(false);
                  }}
                >
                  <Text
                    style={{
                      color:
                        categoriaSelecionada === categoria
                          ? "#fff"
                          : "#406B45",
                      fontWeight: "600",
                    }}
                  >
                    {categoria}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        

      
    <View style={styles.container}>
        <FlatList
          data={plantasFiltradas}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <CollectionCard data={item} />
         } />
      </View>
      </ScreenWrapper>
  );
}
