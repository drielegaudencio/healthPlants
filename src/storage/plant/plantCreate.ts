import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlantStorageDTO } from "./PlantStorageDTO";
import { PLANT_COLLECTION } from "../storageConfig";
import { getAllPlants } from "./plantGetAll";

export async function createPlant(newPlant: PlantStorageDTO): Promise<void> {
    try {
        const storagePlants = await getAllPlants();
        const storage = [...storagePlants, newPlant];
        
        await AsyncStorage.setItem(PLANT_COLLECTION, JSON.stringify(storage));
    }
    catch (error) {
        console.error('Error saving plant:', error);
        throw error;
    }   
}