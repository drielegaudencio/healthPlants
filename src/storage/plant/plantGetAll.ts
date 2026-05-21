import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLANT_COLLECTION } from "../storageConfig";
import { PlantStorageDTO } from "./PlantStorageDTO";

export async function getAllPlants(): Promise<PlantStorageDTO[]> {
    try {
        const storage = await AsyncStorage.getItem(PLANT_COLLECTION);
        const plants: PlantStorageDTO[] = storage ? JSON.parse(storage) : [];
        return plants;
    }
    catch (error) {
        console.error('Error fetching plants:', error);
        throw error;
    }
}