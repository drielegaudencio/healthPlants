import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { themes } from "../../global/styles/color";

type Props = {
  visible: boolean;
  onNavigate: (screen: string) => void;
};

export function SystemMenu({ visible, onNavigate }: Props) {
  if (!visible) return null;

  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Home")}>
        <Text style={styles.text}>Principal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Cadastro Plantas")}>
        <Text style={styles.text}>Cadastrar Planta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => onNavigate("Cadastro Indicações")}>
        <Text style={styles.text}>Cadastrar Indicação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onNavigate("NewsScreen")}>
        <Text style={styles.text}>Notícias</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onNavigate("ProfessionalsScreen")}>
        <Text style={styles.text}>Profissionais</Text>
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