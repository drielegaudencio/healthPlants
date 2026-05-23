// FavoritesScreen.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import ScreenWrapper from "../../components/screenWrapper";
import { styles } from "./style";

import { getAllPlants } from "../../storage/plant/plantGetAll";

export function FavoritesScreen() {
  const navigation = useNavigation<any>();

  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    try {
      const plants = await getAllPlants();

      // Apenas favoritos
      const onlyFavorites = plants.filter(
        (item) => item.favorite === true
      );

      setFavorites(onlyFavorites);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenPlant(planta: any) {
    navigation.navigate("PlantDetails", {
      planta,
    });
  }

  return (
    <ScreenWrapper>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
        }}
        ListHeaderComponent={
          <>
            {/* HEADER */}
            <View style={styles.header}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="heart"
                  size={42}
                  color="#5A8F62"
                />
              </View>

              <Text style={styles.title}>
                Plantas Favoritas
              </Text>

              <Text style={styles.subtitle}>
                Suas plantas salvas para acesso rápido
              </Text>
            </View>

            <Text style={styles.resultText}>
              {favorites.length} favoritas encontradas
            </Text>
          </>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons
              name="leaf-off"
              size={90}
              color="#B8C9BA"
            />

            <Text style={styles.emptyTitle}>
              Nenhuma planta favorita
            </Text>

            <Text style={styles.emptyText}>
              Adicione plantas aos favoritos para
              encontrá-las rapidamente aqui.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleOpenPlant(item)}
          >
            {/* IMAGEM */}
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            {/* INFO */}
            <View style={styles.content}>
              <View style={styles.topRow}>
                <Text style={styles.name}>
                  {item.namePop}
                </Text>

                <MaterialCommunityIcons
                  name="heart"
                  size={24}
                  color="#5A8F62"
                />
              </View>

              <Text style={styles.scientific}>
                {item.nameSci}
              </Text>

              <Text
                style={styles.description}
                numberOfLines={3}
              >
                {item.about || "Sem descrição"}
              </Text>

              {/* TAGS */}
              <View style={styles.tagsContainer}>
                {item.properties?.map(
                  (property: string, index: number) => (
                    <View
                      key={index}
                      style={styles.tag}
                    >
                      <Text style={styles.tagText}>
                        {property}
                      </Text>
                    </View>
                  )
                )}
              </View>

              {/* BOTÃO */}
              <View style={styles.footer}>
                <Text style={styles.moreText}>
                  Ver detalhes
                </Text>

                <Feather
                  name="chevron-right"
                  size={22}
                  color="#406B45"
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScreenWrapper>
  );
}