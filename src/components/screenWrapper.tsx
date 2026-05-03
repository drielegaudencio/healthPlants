import React, { ReactNode } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import  {themes} from "../global/styles/color";
import {Header} from "./Header";
//import BottomTab from "./BottomTab";

type Props = {
  children: ReactNode;
};
  
export default function ScreenWrapper({ children }: Props) {
  //rconst theme = useTheme();

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
    backgroundColor: themes.colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});