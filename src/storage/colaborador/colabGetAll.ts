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