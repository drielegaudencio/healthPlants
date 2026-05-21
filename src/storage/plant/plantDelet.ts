// src/storage/plant/plantDelete.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLANT_COLLECTION } from "../storageConfig";
import { getAllPlants } from "./plantGetAll";

export async function plantDelete(id: string) {
  try {
    const storedPlants = await getAllPlants();

    const plantsWithoutDeleted = storedPlants.filter(
      (plant) => plant.id !== id
    );

    await AsyncStorage.setItem(
      PLANT_COLLECTION,
      JSON.stringify(plantsWithoutDeleted)
    );
  } catch (error) {
    throw error;
  }
}