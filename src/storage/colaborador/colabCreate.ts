import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColabStorageDTO } from './ColabStorageDTO';
import { COLABORADOR_COLLECTION } from '../storageConfig';
import { colabGetAll } from './colabGetAll';
export async function colabCreate(newColab: ColabStorageDTO): Promise<void>{
    try {
        const storageColabs = await colabGetAll();
        const storage = [...storageColabs, newColab];
        await AsyncStorage.setItem(COLABORADOR_COLLECTION, JSON.stringify(storage));
    } catch (error) {
        console.error('Error saving collaborator:', error);
        throw error;
    }   
}