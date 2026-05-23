// DiseaseDetailsScreen.tsx

import React from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import ScreenWrapper from "../../components/screenWrapper";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export function DiseaseDetailsScreen() {
  const navigation = useNavigation<any>();

  const route = useRoute<any>();

  const { indicacao } = route.params;

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
            paddingTop: 60,
            paddingHorizontal: 20,
            paddingBottom: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          {/* voltar */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginBottom: 20,
            }}
          >
            <Feather
              name="arrow-left"
              size={28}
              color="#fff"
            />
          </TouchableOpacity>

          {/* nome */}
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {indicacao.name}
          </Text>

          {/* especialidade */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <MaterialCommunityIcons
              name="medical-bag"
              size={22}
              color="#DDEBD4"
            />

            <Text
              style={{
                color: "#DDEBD4",
                marginLeft: 8,
                fontSize: 16,
              }}
            >
              {indicacao.especialidade}
            </Text>
          </View>
        </View>

        {/* CONTEÚDO */}
        <View
          style={{
            padding: 20,
            gap: 18,
          }}
        >
          {/* descrição */}
          <InfoCard
            icon="text-box-outline"
            title="Descrição"
            text={indicacao.descricao}
          />

          {/* sintomas */}
          <InfoCard
            icon="emoticon-sick-outline"
            title="Sintomas"
            text={
              indicacao.sintomas?.join(", ") ||
              "Não informado"
            }
          />

          {/* profissional */}
          <InfoCard
            icon="doctor"
            title="Profissional Indicado"
            text={
              indicacao.profissional ||
              "Não informado"
            }
          />

          {/* receitas */}
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 18,
              padding: 18,
              elevation: 2,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <MaterialCommunityIcons
                name="leaf"
                size={24}
                color="#4E7A52"
              />

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginLeft: 10,
                  color: "#23482D",
                }}
              >
                Receitas Naturais
              </Text>
            </View>

            {indicacao.receitas?.length > 0 ? (
              indicacao.receitas.map(
                (receita: string, index: number) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor: "#EEF5EA",
                      padding: 14,
                      borderRadius: 12,
                      marginBottom: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#2F5136",
                        fontSize: 15,
                      }}
                    >
                      🌿 {receita}
                    </Text>
                  </View>
                )
              )
            ) : (
              <Text
                style={{
                  color: "#666",
                }}
              >
                Nenhuma receita cadastrada.
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

// COMPONENTE CARD
function InfoCard({
  icon,
  title,
  text,
}: any) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 18,
        elevation: 2,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color="#4E7A52"
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 10,
            color: "#23482D",
          }}
        >
          {title}
        </Text>
      </View>

      <Text
        style={{
          color: "#444",
          lineHeight: 22,
          fontSize: 15,
        }}
      >
        {text}
      </Text>
    </View>
  );
}