import AsyncStorage from "@react-native-async-storage/async-storage";

import { INDICACAO_COLLECTION } from "../storageConfig";

import { defaultIndicacoes } from "./defaultIndicacoes";

export async function getAllIndicacao() {
  try {
    const storage = await AsyncStorage.getItem(
      INDICACAO_COLLECTION
    );

    const indicacoes = storage
      ? JSON.parse(storage)
      : [];

    return [...defaultIndicacoes, ...indicacoes];

  } catch (error) {
    throw error;
  }
}