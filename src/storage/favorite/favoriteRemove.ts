import AsyncStorage from "@react-native-async-storage/async-storage";

import { FAVORITE_COLLECTION } from "../storageConfig";

export async function favoriteRemove(
  idUser: string,
  idPlant: string
) {
  const storage = await AsyncStorage.getItem(
    FAVORITE_COLLECTION
  );

  const favorites = storage
    ? JSON.parse(storage)
    : [];

  const updated = favorites.filter(
    (item: any) =>
      !(
        item.idUser === idUser &&
        item.idPlant === idPlant
      )
  );

  await AsyncStorage.setItem(
    FAVORITE_COLLECTION,
    JSON.stringify(updated)
  );
}