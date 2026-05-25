import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLABORADOR_COLLECTION } from "../storageConfig";
import { ColabStorageDTO } from "./ColabStorageDTO";

export async function colabGetAll(): Promise<ColabStorageDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(COLABORADOR_COLLECTION);

    const colaboradores: ColabStorageDTO[] = storage
      ? JSON.parse(storage)
      : [];

    return colaboradores;
  } catch (error) {
    throw error;
  }
} 
// storage/colaborador/colabGetAll.ts
/* 
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLABORADOR_COLLECTION } from "../storageConfig";

import { defaultProfessionals } from "./defaultProfessionals";

export async function colabGetAll() {
  try {
    const storage =
      await AsyncStorage.getItem(
        COLABORADOR_COLLECTION
      );

    // se não existir nada salvo
    if (!storage) {
      // salva os defaults
      await AsyncStorage.setItem(
        COLABORADOR_COLLECTION,
        JSON.stringify(defaultProfessionals)
      );

      return defaultProfessionals;
    }

    return JSON.parse(storage);
  } catch (error) {
    throw error;
  }
} */