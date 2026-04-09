import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
//import { useTheme } from "styled-components";
import theme from "../global/styles/theme";

export default function Header() {
  //const theme = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="person" size={26} color={theme.colors.lightGreen} style={styles.iconPerson} />
      </TouchableOpacity>

      <Text style={styles.title}>Health 🌿 Plants</Text>

      <TouchableOpacity>
        <Icon name="menu" size={26} color={theme.colors.secondary} style={ styles.iconMenu}  />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: theme.colors.secondary,
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    color: theme.colors.secondary,
    fontSize: 18,
    fontWeight: "bold",
  },
  iconMenu: {
    backgroundColor: theme.colors.lightGreen,
    padding: 8,
    borderRadius: 50,
  },
  iconPerson: {
    backgroundColor: theme.colors.secondary,
    padding: 8,
    borderRadius: 50,
  },
});