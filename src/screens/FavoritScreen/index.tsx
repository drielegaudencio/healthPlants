import React, { useCallback, useState } from "react";

import {
  View,
  Text,
  FlatList,
} from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import ScreenWrapper from "../../components/screenWrapper";

import { useAuth } from "../../context/AuthContext";

import { getAllPlants } from "../../storage/plant/plantGetAll";

import { favoriteGetByUser } from "../../storage/favorite/favoriteGetByUser";

import { CollectionCard } from "../../components/ColectionCard";

import { PlantStorageDTO } from "../../storage/plant/PlantStorageDTO";

export function FavoritesScreen() {

  const { user } = useAuth();

  const [plants, setPlants] = useState<
    PlantStorageDTO[]
  >([]);

  async function loadFavorites() {

    if (!user) return;

    // favoritos do usuário
    const favorites =
      await favoriteGetByUser(user.id);

    // todas plantas
    const allPlants =
      await getAllPlants();

    // filtra somente favoritadas
    const filteredPlants =
      allPlants.filter((plant) =>
        favorites.some(
          (fav: any) =>
            fav.idPlant === plant.id
        )
      );

    setPlants(filteredPlants);
  }

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [user])
  );

  if (!user) {
    return (
      <ScreenWrapper>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Faça login para visualizar seus favoritos.
          </Text>
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#23482D",
          }}
        >
          Meus Favoritos
        </Text>

        <FlatList
          data={plants}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
          }}
          ListEmptyComponent={
            <Text
              style={{
                textAlign: "center",
                marginTop: 40,
                color: "#666",
              }}
            >
              Você ainda não possui favoritos.
            </Text>
          }
          renderItem={({ item }) => (
            <CollectionCard data={item} />
          )}
        />
      </View>
    </ScreenWrapper>
  );
}