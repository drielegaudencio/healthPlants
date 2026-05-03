import React
 from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "../../components/screenWrapper";
import { styles } from "./styles";
export function PlantScannerScreen() {
  return (
    <ScreenWrapper>
        <View style={styles.container}>
        
            <Text style={styles.title}>Scanner de Plantas</Text>
            {/* Aqui você pode adicionar a funcionalidade de scanner de plantas usando a câmera do dispositivo */}
        </View>
    </ScreenWrapper>
  );
}