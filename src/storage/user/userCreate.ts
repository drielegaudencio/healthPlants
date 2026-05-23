import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_COLLECTION } from '../storageConfig';
import { UserStorageDTO } from './UserStorageDTO';
import { userGetAll } from './userGetAll';

export async function userCreate(user: UserStorageDTO): Promise<void> {
    try {
        const storage = await AsyncStorage.getItem(USER_COLLECTION);
        const users: UserStorageDTO[] = storage ? JSON.parse(storage) : [];
        users.push(user);
        await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(users));
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}