// RecipesScreen.tsx

import React, { useCallback, useState } from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ScreenWrapper from "../../components/screenWrapper";

import { getAllRecipes } from "../../storage/recipe/recipeGetAll";

export function RecipesScreen() {
  const navigation = useNavigation<any>();

  const [recipes, setRecipes] = useState<any[]>([]);

  async function loadRecipes() {
    const data = await getAllRecipes();

    setRecipes(data);
  }

  useFocusEffect(
    useCallback(() => {
      loadRecipes();
    }, [])
  );

  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        {/* HEADER */}
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#23482D",
            }}
          >
            Receitas Naturais
          </Text>

          <Text
            style={{
              color: "#666",
              marginTop: 4,
            }}
          >
            Receitas fitoterápicas e naturais
          </Text>
        </View>

        {/* LISTA */}
        <FlatList
          data={recipes}
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
              Nenhuma receita cadastrada.
            </Text>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate(
                  "RecipeDetails",
                  {
                    recipe: item,
                  }
                )
              }
              style={{
                backgroundColor: "#FFF",
                borderRadius: 18,
                marginBottom: 18,
                overflow: "hidden",

                shadowColor: "#000",
                shadowOpacity: 0.08,
                shadowRadius: 4,

                elevation: 3,
              }}
            >
              {/* IMAGEM */}
              {item.image ? (
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: "100%",
                    height: 180,
                  }}
                />
              ) : (
                <View
                  style={{
                    width: "100%",
                    height: 180,
                    backgroundColor: "#E8F1E3",

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="food-apple"
                    size={60}
                    color="#4E7A52"
                  />
                </View>
              )}

              {/* CONTEÚDO */}
              <View
                style={{
                  padding: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#23482D",
                  }}
                >
                  {item.name}
                </Text>

                <Text
                  numberOfLines={2}
                  style={{
                    marginTop: 8,
                    color: "#555",
                  }}
                >
                  {item.description}
                </Text>

                {/* INFO */}
                <View
                  style={{
                    marginTop: 14,
                    gap: 6,
                  }}
                >
                  <Text
                    style={{
                      color: "#4E7A52",
                    }}
                  >
                    Tipo: {item.type}
                  </Text>

                  <Text
                    style={{
                      color: "#4E7A52",
                    }}
                  >
                    Indicação: {item.indicacao}
                  </Text>
                </View>

                {/* BOTÃO */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",

                    marginTop: 14,
                  }}
                >
                  <Text
                    style={{
                      color: "#4E7A52",
                      fontWeight: "bold",
                    }}
                  >
                    Ver receita
                  </Text>

                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="#4E7A52"
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}