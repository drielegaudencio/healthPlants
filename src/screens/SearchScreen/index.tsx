import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "../../components/screenWrapper";
import { styles } from "./styles";
export function SearchScreen() {
  return (
    <ScreenWrapper>
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes da Planta</Text>
            <Text>oi liam</Text>
            {/* Aqui você pode adicionar mais detalhes sobre a planta, como nome científico, benefícios, cuidados, etc. */}
        </View>
    </ScreenWrapper>
  );
}
