import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from "react-native";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
type Props = {
  visible: boolean;
  onNavigate: (screen: string) => void;
};

export function UserMenu({ visible, onNavigate }: Props) {
  if (!visible) return null;
  async function CacheClean(){
    //limpa o AsyncStorage no android
    await AsyncStorage.clear()
     alert('O programa sera finalizado')
     return (BackHandler.exitApp())

  }
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Profile")}>
        <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Favorites")}>
        <Text style={styles.text}>Favoritos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Settings")}>
        <Text style={styles.text}>Configurações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={CacheClean}>
        <Text style={styles.text}>Limpar Cache</Text>
      </TouchableOpacity>
    </View>
  );
}

