import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {styles} from "./style"
import { themes } from "../../global/styles/color";
import { UserMenu } from "../UserMenu";
import { SystemMenu } from "../SystemMenu";

export function Header() {
  const navigation = useNavigation();

  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [systemMenuVisible, setSystemMenuVisible] = useState(false);

  function toggleUserMenu() {
    setUserMenuVisible(!userMenuVisible);
    setSystemMenuVisible(false);
  }

  function toggleSystemMenu() {
    setSystemMenuVisible(!systemMenuVisible);
    setUserMenuVisible(false);
  }

  function goToScreen(screenName: string) {
    setUserMenuVisible(false);
    setSystemMenuVisible(false);

    navigation.navigate(screenName as never);
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleUserMenu}>
          <Icon name="person" size={26} color={themes.colors.lightGreen} style={styles.iconPerson} />

        </TouchableOpacity>

        <Text style={styles.logoText}>
          Health <Text style={styles.logoHighlight}>Plants</Text>
        </Text>

        <TouchableOpacity onPress={toggleSystemMenu}>
          <Icon name="menu" size={26} color={themes.colors.secondary} style={ styles.iconMenu}  />

        </TouchableOpacity>
      </View>

      <UserMenu visible={userMenuVisible} onNavigate={goToScreen} onClose={() => setUserMenuVisible(false)} />

      <SystemMenu visible={systemMenuVisible} onNavigate={goToScreen} />
    </View>
  );
}

