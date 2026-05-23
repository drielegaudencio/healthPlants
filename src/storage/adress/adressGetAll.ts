import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADRESS_COLLECTION } from "../storageConfig";
import { AdressStorageDTO } from "./AdressStorageDTO";
export async function adressGetAll() {
    try {
        const storage = await AsyncStorage.getItem(ADRESS_COLLECTION);
        const adresses: AdressStorageDTO[] = storage ? JSON.parse(storage) : [];
        return adresses;
    } catch (error) {
        console.error('Error fetching adresses:', error);
        throw error;
    }
}