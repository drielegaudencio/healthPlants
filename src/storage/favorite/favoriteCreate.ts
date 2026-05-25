import AsyncStorage from "@react-native-async-storage/async-storage";

import { FAVORITE_COLLECTION } from "../storageConfig";
import {FavoriteStorageDTO} from "./FavoriteStorageDTO"

export async function favoriteCreate(
  newFavorite: FavoriteStorageDTO
) {
  try {
    const storage = await AsyncStorage.getItem(
      FAVORITE_COLLECTION
    );

    const favorites: FavoriteStorageDTO[] =
      storage ? JSON.parse(storage) : [];

    favorites.push(newFavorite);

    await AsyncStorage.setItem(
      FAVORITE_COLLECTION,
      JSON.stringify(favorites)
    );
  } catch (error) {
    throw error;
  }
}