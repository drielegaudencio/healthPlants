import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLANT_COLLECTION } from "../storageConfig";

import { getAllPlants } from "./plantGetAll";

export async function plantUpdate(updatedPlant: any) {

  const storage = await getAllPlants();

  const updatedPlants = storage.map((item) =>
    item.id === updatedPlant.id
      ? updatedPlant
      : item
  );

  await AsyncStorage.setItem(
    PLANT_COLLECTION,
    JSON.stringify(updatedPlants)
  );
}