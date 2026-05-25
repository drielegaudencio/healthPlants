import { UserStorageDTO } from "./UserStorageDTO";

export const defaultUsers: UserStorageDTO[] = [
  {
    id: "1",
    name: "Administrador",
    email: "admin@healthplants.com",
    password: "123456",
    typeUser: "admin",
    isAdmin: true,
  },
];