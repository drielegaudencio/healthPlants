import AsyncStorage from "@react-native-async-storage/async-storage";
import { adressGetAll } from "./adressGetAll";
import { AdressStorageDTO } from "./AdressStorageDTO";
import { ADRESS_COLLECTION } from "../storageConfig";

export async function adressCreate(newAdress: AdressStorageDTO): Promise<void>{
    try{
        const storageAdress = await adressGetAll(newAdress.idUser);
        const storage = [...storageAdress, newAdress];
        await AsyncStorage.setItem(ADRESS_COLLECTION, JSON.stringify(storage));
    }catch(error){
        console.error('Erro ao salvar', error);
        throw error;
    }
}