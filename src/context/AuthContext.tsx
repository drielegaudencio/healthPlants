import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type User = {
  id: string;
  name: string;
  typeUser: string;
  isAdmin: boolean;
};

type AuthContextData = {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
};

const AuthContext =
  createContext<AuthContextData>(
    {} as AuthContextData
  );

type Props = {
  children: ReactNode;
};

export function AuthProvider({
  children,
}: Props) {
  const [user, setUser] =
    useState<User | null>(null);

  function signIn(userData: User) {
    setUser(userData);
  }

  function signOut() {
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