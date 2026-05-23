import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { themes } from "../../global/styles/color";
import { useAuth } from "../../context/AuthContext";

type Props = {
  visible: boolean;
  onNavigate: (screen: string) => void;
};

export function SystemMenu({ visible, onNavigate }: Props) {
  const { user, signOut } = useAuth();
  if (!visible) return null;

  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Home")}>
        <Text style={styles.text}>Principal</Text>
      </TouchableOpacity>
    {user?.isAdmin && (
        <>
          <TouchableOpacity style={styles.item} onPress={() => onNavigate("Cadastro Plantas")}>
          <Text style={styles.text}>Cadastrar Planta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => onNavigate("Cadastro Indicações")}>
            <Text style={styles.text}>Cadastrar Indicação</Text>
          </TouchableOpacity>
        </>
    )}
      
      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Receitas")}>
        <Text style={styles.text}>Receitas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onNavigate("ProfessionalsScreen")}>
        <Text style={styles.text}>Buscar Profissionais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 120,
    right: 1,
    width: 200,
    backgroundColor: themes.colors.background,
    borderRadius: 12,
    paddingVertical: 8,
    zIndex: 9999,
    elevation: 20,
  },
  item: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 15,
    color: themes.colors.text,
  },
});