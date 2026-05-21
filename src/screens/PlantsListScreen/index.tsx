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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenWrapper from "../../components/screenWrapper";
import { themes } from "../../global/styles/color";
import { PlantStorageDTO } from "../../storage/plant/PlantStorageDTO";
import { getAllPlants } from "../../storage/plant/plantGetAll";
import { CollectionCard } from "../../components/ColectionCard";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from "./style";
import { ScrollView } from "react-native/";

const plantas = [
  {
    id: "1",
    nomePopular: "Calêndula",
    nomeCientifico: "Calendula officinalis",
    categoria: "Planta Medicinal",
    imagem: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651",
    acaoPrincipal: "Cicatrizante, anti-inflamatória...",
    descricao:
      "A calêndula é conhecida por suas propriedades cicatrizantes, anti-inflamatórias e antioxidantes.",
    parteUtilizada: "Flores",
    formaUso: "Chá, pomadas, cataplasmas, tinturas",
    indicacoes: "Feridas, inflamações de pele, acne, assaduras",
    contraindicacoes: "Gestantes e lactantes devem usar com orientação",
    cultivo: "Sol pleno, solo bem drenado e regas moderadas",
    ondeEncontrar: "Feiras, lojas de produtos naturais e viveiros",
    pesquisas: "Estudos apontam ação cicatrizante e anti-inflamatória.",
  },
  {
    id: "2",
    nomePopular: "Alecrim",
    nomeCientifico: "Rosmarinus officinalis",
    categoria: "Planta Medicinal",
    imagem: "https://images.unsplash.com/photo-1515586000433-45406d8e6662",
    acaoPrincipal: "Estimulante, digestiva...",
    descricao: "O alecrim é utilizado para auxiliar na digestão e estimular a concentração.",
  },
  {
    id: "3",
    nomePopular: "Bardana",
    nomeCientifico: "Arctium lappa",
    categoria: "Planta Medicinal",
    imagem: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    acaoPrincipal: "Depurativa, anti-inflamatória...",
    descricao: "A bardana é conhecida por seu uso tradicional como depurativa.",
  },
];

export default function CatalogScreen() {
  const navigation = useNavigation<any>();
  const [dataPlants, setDataPlants] = useState<PlantStorageDTO[]>([]);
const [plantasFiltradas, setPlantasFiltradas] = useState<any[]>([]);

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
        /* (
       <TouchableOpacity
         style={styles.card}
         onPress={() => navigation.navigate("PlantDetails", { planta: item })}
       >
         <Image source={{ uri: item.imagem }} style={styles.image} />

         <View style={styles.cardContent}>
           <Text style={styles.plantName}>{item.nomePopular}</Text>
           <Text style={styles.label}>Ação Principal:</Text>
           <Text style={styles.description}>{item.acaoPrincipal}</Text>

           <View style={styles.leafRow}>
             <MaterialCommunityIcons name="leaf" size={22} color="#8BAD73" />
             <Text style={styles.decorativeLine}>〜 〜 〜</Text>
           </View>
         </View>

         <TouchableOpacity style={styles.heartButton}>
           <Feather name="heart" size={26} color="#7D9B7A" />
         </TouchableOpacity>
       </TouchableOpacity>
     ) */ } />
      </View>
      </ScreenWrapper>
  );
}
{
/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#EEF6E9",
    paddingTop: 20,
  },
  header: {
    //paddingHorizontal: 24,
    backgroundColor: themes.colors.background,
    flexDirection: "column",
    alignItems: "center",
    //height: 150,
    borderBottomEndRadius: 24,
    borderBottomLeftRadius: 24,
    paddingTop: -10,
    marginTop: -30,
    gap:3,

  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: themes.fonts.logo,
    fontStyle: "italic",
    color: "#23482D",
  },
  profileButton: {
    position: "absolute",
    right: 24,
    backgroundColor: "#DDEBD4",
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#23482D",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 24,
  },
  filters: {
    flexDirection: "row",
    //justifyContent: "space-between",
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#DCEAD4",
    flexDirection: "row",
    //marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 6,
  },
  filterText: {
    color: "#2F5136",
    fontSize: 14,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  card: {
    backgroundColor: "#FAFCF7",
    borderRadius: 24,
    padding: 14,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 115,
    height: 115,
    borderRadius: 16,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  plantName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#23482D",
  },
  label: {
    marginTop: 8,
    fontSize: 15,
    color: "#333",
  },
  description: {
    marginTop: 4,
    fontSize: 15,
    color: "#333",
  },
  leafRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  decorativeLine: {
    color: "#A8B79E",
    marginLeft: 6,
    fontSize: 18,
  },
  heartButton: {
    position: "absolute",
    top: 18,
    right: 18,
  },
}); */}