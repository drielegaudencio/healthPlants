// recipeCreate.ts

import AsyncStorage from "@react-native-async-storage/async-storage";

import { RecipeStorageDTO } from "./RecipeStorageDTO";

const RECIPE_COLLECTION = "@healthplants:recipes";

import { getAllRecipes } from "./recipeGetAll";

export async function recipeCreate(
  newRecipe: RecipeStorageDTO
) {
  try {
    const storage =
      await getAllRecipes();

    const updatedStorage = [
      ...storage,
      newRecipe,
    ];

    await AsyncStorage.setItem(
      RECIPE_COLLECTION,
      JSON.stringify(updatedStorage)
    );
  } catch (error) {
    throw error;
  }
}