import React, { ReactNode } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import  theme from "../global/styles/theme";
import Header from "./header";
import { useTheme } from "styled-components";
//import BottomTab from "./BottomTab";

type Props = {
  children: ReactNode;
};
  
export default function ScreenWrapper({ children }: Props) {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        {children}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});