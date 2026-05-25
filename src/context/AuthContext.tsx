import React, {
  createContext,
  useContext,
  useState,
} from "react";

import { userGetAll } from "../storage/user/userGetAll";
import { UserStorageDTO } from "../storage/user/UserStorageDTO";

type AuthContextData = {
  user: UserStorageDTO | null;

  signIn: (
    email: string,
    password: string
  ) => Promise<boolean>;

  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext =
  createContext<AuthContextData>(
    {} as AuthContextData
  );

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] =
    useState<UserStorageDTO | null>(null);

  async function signIn(
    email: string,
    password: string
  ) {
    const users = await userGetAll();

    const usuarioLogado = users.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!usuarioLogado) {
      return false;
    }

    // salva usuário no contexto
    setUser(usuarioLogado);

    return true;
  }

  async function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}