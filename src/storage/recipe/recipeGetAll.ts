// recipeGetAll.ts

import AsyncStorage from "@react-native-async-storage/async-storage";

import { RecipeStorageDTO } from "./RecipeStorageDTO";

import { defaultRecipes } from "./defaultRecipes";

const RECIPE_COLLECTION = "@healthplants:recipes";

export async function getAllRecipes() {
  try {
    const storage = await AsyncStorage.getItem(
      RECIPE_COLLECTION
    );

    // se ainda não existe nada salvo
    if (!storage) {
      await defaultRecipes();

      // busca novamente após criar defaults
      const newStorage =
        await AsyncStorage.getItem(
          RECIPE_COLLECTION
        );

      return newStorage
        ? JSON.parse(newStorage)
        : [];
    }

    return JSON.parse(storage);
  } catch (error) {
    throw error;
  }
}