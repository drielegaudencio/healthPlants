import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "../../components/screenWrapper";
import { styles } from "./styles";

export function ProfessionalsScreen() {
  return (
    <ScreenWrapper>
      <Text style={styles.title}>Profissionais de Saúde</Text>
      {/* Aqui você pode adicionar uma lista de profissionais de saúde relacionados a plantas medicinais, como fitoterapeutas, herbalistas, etc. */}
    </ScreenWrapper>
  );
}