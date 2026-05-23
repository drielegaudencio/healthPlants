import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  BackHandler,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./style";

import { useAuth } from "../../context/AuthContext";

type Props = {
  visible: boolean;

  onClose: () => void;

  onNavigate: (screen: string) => void;
};

export function UserMenu({
  visible,
  onClose,
  onNavigate,
}: Props) {
  const { user, signOut } = useAuth();

  if (!visible) return null;

  async function CacheClean() {
    await AsyncStorage.clear();

    alert("O programa será finalizado");

    BackHandler.exitApp();
  }

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
        }}
      >
        <TouchableWithoutFeedback>
          <View style={styles.menu}>
            {/* VISITANTE */}
            {!user && (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  onNavigate("Login");
                  onClose();
                }}
              >
                <Text style={styles.text}>
                  Fazer Login
                </Text>
              </TouchableOpacity>
            )}

            {/* USUÁRIO LOGADO */}
            {user && (
              <>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    onNavigate("Profile");
                    onClose();
                  }}
                >
                  <Text style={styles.text}>
                    Perfil
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    onNavigate("Favorites");
                    onClose();
                  }}
                >
                  <Text style={styles.text}>
                    Favoritos
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    onNavigate("Settings");
                    onClose();
                  }}
                >
                  <Text style={styles.text}>
                    Configurações
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    signOut();
                    onClose();
                  }}
                >
                  <Text style={styles.text}>
                    Sair
                  </Text>
                </TouchableOpacity>
              </>
            )}

            {/* ADMIN */}
            {user?.isAdmin && (
              <TouchableOpacity
                style={styles.item}
                onPress={CacheClean}
              >
                <Text style={styles.text}>
                  Limpar Cache
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}