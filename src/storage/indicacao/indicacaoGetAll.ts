import AsyncStorage from "@react-native-async-storage/async-storage";
import { IndicacaoStorageDTO } from "./indicacaoStorageDTO";
import { INDICACAO_COLLECTION } from "../storageConfig";

export async function getAllIndicacao(): Promise<IndicacaoStorageDTO[]> {
    try {
        const storage = await AsyncStorage.getItem(INDICACAO_COLLECTION);
        const indicacao: IndicacaoStorageDTO[] = storage ? JSON.parse(storage) : [];
        return indicacao;
    }
    catch (error) {
        console.error('Error fetching indicacao:', error);
        throw error;
    }
}