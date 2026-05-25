import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_COLLECTION } from "../storageConfig";
import { UserStorageDTO } from "./UserStorageDTO";
import { defaultUsers } from "./defaultUsers";

export async function userGetAll() {
  try {
    const storage = await AsyncStorage.getItem(
      USER_COLLECTION
    );

    const users: UserStorageDTO[] = storage
      ? JSON.parse(storage)
      : [];

    // adiciona admin fixo
    return [...defaultUsers, ...users];

  } catch (error) {
    throw error;
  }
}