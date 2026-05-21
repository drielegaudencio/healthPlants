import AsyncStorage from "@react-native-async-storage/async-storage";
import { IndicacaoStorageDTO } from "./indicacaoStorageDTO";
import { INDICACAO_COLLECTION } from "../storageConfig";
import { getAllIndicacao } from "./indicacaoGetAll";

export async function createIndicacao(newDoenca: IndicacaoStorageDTO) {
    try {
        const storedIndicacao = await getAllIndicacao();
        const updatedIndicacao = [...storedIndicacao, newDoenca];
        await AsyncStorage.setItem(
            INDICACAO_COLLECTION,
            JSON.stringify(updatedIndicacao)
        );
    } catch (error) {
        console.error('Error creating indicacao:', error);
        throw error;
    }
}