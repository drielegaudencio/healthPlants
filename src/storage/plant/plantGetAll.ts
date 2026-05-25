import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLANT_COLLECTION } from "../storageConfig";

import { PlantStorageDTO } from "./PlantStorageDTO";

import { defaultPlants } from "./defaultPlants";

export async function getAllPlants() {
  try {
    const storage = await AsyncStorage.getItem(
      PLANT_COLLECTION
    );

    const plants: PlantStorageDTO[] = storage
      ? JSON.parse(storage)
      : [];

    return [...defaultPlants, ...plants];

  } catch (error) {
    throw error;
  }
}