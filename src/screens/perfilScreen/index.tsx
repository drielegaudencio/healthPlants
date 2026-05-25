// ProfileScreen.tsx

import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  useNavigation,
} from "@react-navigation/native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ScreenWrapper from "../../components/screenWrapper";
import { styles } from "./style";
import { useAuth } from "../../context/AuthContext";

export function ProfileScreen() {
  const navigation = useNavigation<any>();

  const { user, signOut } = useAuth();

  async function handleLogout() {
    await signOut();

    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        {/* HEADER */}
        <View
          style={{
            backgroundColor: "#4E7A52",
            paddingTop: 70,
            paddingBottom: 40,
            alignItems: "center",

            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          {/* FOTO */}
          <View
            style={{
              width: 110,
              height: 110,

              borderRadius: 55,

              backgroundColor: "#E8F1E3",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="account"
              size={70}
              color="#4E7A52"
            />
          </View>

          {/* NOME */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#fff",

              marginTop: 18,
            }}
          >
            {user?.name || "Usuário"}
          </Text>

          {/* EMAIL */}
          <Text
            style={{
              color: "#DDEBD4",
              marginTop: 6,
            }}
          >
            {user?.email || "E-mail não informado"}
          </Text>

          {/* TIPO */}
          <View
            style={{
              marginTop: 16,

              backgroundColor: "#DDEBD4",

              paddingHorizontal: 16,
              paddingVertical: 8,

              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#23482D",
                fontWeight: "bold",
              }}
            >
              {user?.typeUser === "colab"
                ? "Profissional"
                : "Usuário"}
            </Text>
          </View>
        </View>

        {/* CONTEÚDO */}
        <View
          style={{
            padding: 20,
            gap: 14,
          }}
        >
          {/* CARD INFO */}
          <InfoCard
            icon="account-outline"
            title="Nome"
            value={user?.name || "Nome não informado"}
          />

          <InfoCard
            icon="email-outline"
            title="E-mail"
            value={user?.email || "E-mail não informado"}
          />

          <InfoCard
            icon="shield-account"
            title="Tipo de Conta"
            value={
              user?.typeUser === "colab"
                ? "Profissional"
                : user?.isAdmin
                ? "Administrador"
                : "Usuário"
            }
          />

          {/* FAVORITOS */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Favorite")
            }
            style={styles.button}
          >
            <View style={styles.buttonLeft}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color="#4E7A52"
              />

              <Text style={styles.buttonText}>
                Favoritos
              </Text>
            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#4E7A52"
            />
          </TouchableOpacity>

          {/* CONFIG */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Settings")
            }
            style={styles.button}
          >
            <View style={styles.buttonLeft}>
              <MaterialCommunityIcons
                name="cog-outline"
                size={24}
                color="#4E7A52"
              />

              <Text style={styles.buttonText}>
                Configurações
              </Text>
            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#4E7A52"
            />
          </TouchableOpacity>

          {/* SAIR */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleLogout}
            style={[
              styles.button,
              {
                marginTop: 10,
              },
            ]}
          >
            <View style={styles.buttonLeft}>
              <MaterialCommunityIcons
                name="logout"
                size={24}
                color="#C62828"
              />

              <Text
                style={[
                  styles.buttonText,
                  {
                    color: "#C62828",
                  },
                ]}
              >
                Sair da Conta
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: any) {
  return (
    <View
      style={{
        backgroundColor: "#fff",

        padding: 18,

        borderRadius: 18,

        elevation: 2,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color="#4E7A52"
        />

        <View
          style={{
            marginLeft: 14,
          }}
        >
          <Text
            style={{
              color: "#777",
              fontSize: 13,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              color: "#23482D",
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 2,
            }}
          >
            {value || "Não informado"}
          </Text>
        </View>
      </View>
    </View>
  );
}