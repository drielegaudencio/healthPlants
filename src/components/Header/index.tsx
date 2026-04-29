import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {styles} from "./style";
import {themes} from "../../global/styles/color";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import {NewsScreen} from "../../screens/NewsScreen";

export function Header() {
  //const theme = useTheme();
   const [menuVisible, setMenuVisible] = useState(false);
   const navigation = useNavigation();
  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }
   function goToScreen(screenName: string) {
    setMenuVisible(false);
    navigation.navigate(screenName as never);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="person" size={26} color={themes.colors.lightGreen} style={styles.iconPerson} />
      </TouchableOpacity>

      <Text style={styles.title}>Health 🌿 Plants</Text>

      <TouchableOpacity onPress={toggleMenu}>
        <Icon name="menu" size={26} color={themes.colors.secondary} style={ styles.iconMenu}  />
      </TouchableOpacity>
      {menuVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => goToScreen('HomeScreen')}
          >
            <Text style={styles.menuText}>Principal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => goToScreen('FavoritesScreen')}
          >
            <Text style={styles.menuText}>Favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => goToScreen('NewsScreen')}
          >
            <Text style={styles.menuText}>Notícias</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  );
}