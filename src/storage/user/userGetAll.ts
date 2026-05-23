import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_COLLECTION } from "../storageConfig";
import { UserStorageDTO } from "./UserStorageDTO";

export async function userGetAll() {
    try {
        const storage = await AsyncStorage.getItem(USER_COLLECTION);
        const users: UserStorageDTO[] = storage ? JSON.parse(storage) : [];
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}   