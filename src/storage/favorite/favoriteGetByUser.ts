import AsyncStorage from "@react-native-async-storage/async-storage";

import { FAVORITE_COLLECTION } from "../storageConfig";

export async function favoriteGetByUser(
  idUser: string
) {
  const storage = await AsyncStorage.getItem(
    FAVORITE_COLLECTION
  );

  const favorites = storage
    ? JSON.parse(storage)
    : [];

  return favorites.filter(
    (item: any) => item.idUser === idUser
  );
}
