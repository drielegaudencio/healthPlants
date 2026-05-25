// PrivacyPolicyScreen.tsx

import React from "react";

import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import ScreenWrapper from "../../components/screenWrapper";

export function PrivacyPolicyScreen() {
  const navigation = useNavigation<any>();

  return (
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 80,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* botão voltar */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color="#23482D"
          />

          <Text
            style={{
              color: "#23482D",
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>

        {/* título */}
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#23482D",
            marginBottom: 20,
          }}
        >
          Política de Privacidade
        </Text>

        <Text
          style={{
            fontSize: 15,
            lineHeight: 26,
            color: "#444",
            textAlign: "justify",
          }}
        >
          Esta Política de Privacidade descreve como as
          informações dos usuários são coletadas,
          utilizadas e protegidas dentro da plataforma
          Health Plants.
        </Text>

        {/* seção */}
        <View style={{ marginTop: 28 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#23482D",
              marginBottom: 10,
            }}
          >
            1. Coleta de Informações
          </Text>

          <Text
            style={{
              fontSize: 15,
              lineHeight: 24,
              color: "#444",
              textAlign: "justify",
            }}
          >
            O aplicativo poderá coletar informações
            fornecidas pelo usuário durante o cadastro,
            incluindo nome, e-mail, localização e dados
            relacionados ao uso da plataforma.
          </Text>
        </View>

        {/* seção */}
        <View style={{ marginTop: 28 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#23482D",
              marginBottom: 10,
            }}
          >
            2. Uso das Informações
          </Text>

          <Text
            style={{
              fontSize: 15,
              lineHeight: 24,
              color: "#444",
              textAlign: "justify",
            }}
          >
            As informações coletadas são utilizadas para:
          </Text>

          <Text
            style={{
              marginTop: 10,
              fontSize: 15,
              lineHeight: 24,
              color: "#444",
            }}
          >
            • Melhorar a experiência do usuário;{"\n"}
            • Permitir acesso às funcionalidades da
            plataforma;{"\n"}
            • Exibir conteúdos personalizados;{"\n"}
            • Conectar usuários a profissionais da área
            da saúde e terapias naturais;{"\n"}
            • Garantir segurança e funcionamento do
            aplicativo.
          </Text>
        </View>

        {/* seção */}
        <View style={{ marginTop: 28 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#23482D",
              marginBottom: 10,
            }}
          >
            3. Compartilhamento de Dados
          </Text>

          <Text
            style={{
              fontSize: 15,
              lineHeight: 24,
              color: "#444",
              textAlign: "justify",
            }}
          >
            Os dados dos usuários não serão vendidos ou
            compartilhados com terceiros sem autorização,
            exceto quando necessário para cumprimento de
            obrigações legais.
          </Text>
        </View>

        {/* seção */}
        <View style={{ marginTop: 28 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#23482D",
              marginBottom: 10,
            }}
          >
            4. Segurança das Informações
          </Text>

          <Text
            style={{
              fontSize: 15,
              lineHeight: 24,
              color: "#444",
              textAlign: "justify",
            }}
          >
            A plataforma adota medidas de segurança para
            proteger as informações armazenadas, buscando
            evitar acessos não autorizados, perdas ou
            alterações indevidas.
          </Text>
        </View>

        {/* seção */}
        <View style={{ marginTop: 28 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#23482D",
              marginBottom: 10,
            }}
          >
            5. Uso Responsável
          </Text>

          <Text
            style={{
              fontSize: 15,
              lineHeight: 24,
              color: "#444",
              textAlign: "justify",
            }}
          >
            As informações disponibilizadas no aplicativo
            possuem caráter educativo e informativo, não
            substituindo acompanhamento médico ou
            profissional especializado.
          </Text>
        </View>

        {/* seção */}
        <View style={{ marginTop: 28 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#23482D",
              marginBottom: 10,
            }}
          >
            6. Plantas Medicinais e Fitoterápicos
          </Text>

          <Text
            style={{
              fontSize: 15,
              lineHeight: 24,
              color: "#444",
              textAlign: "justify",
            }}
          >
            Plantas medicinais e produtos fitoterápicos
            podem provocar efeitos adversos, toxicidade e
            contraindicações, especialmente quando
            associados a medicamentos convencionais. A
            utilização deve ocorrer com cautela e,
            preferencialmente, sob orientação de
            profissionais qualificados.
          </Text>
        </View>

        {/* seção */}
        <View style={{ marginTop: 28 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#23482D",
              marginBottom: 10,
            }}
          >
            7. Alterações nesta Política
          </Text>

          <Text
            style={{
              fontSize: 15,
              lineHeight: 24,
              color: "#444",
              textAlign: "justify",
            }}
          >
            Esta Política de Privacidade poderá ser
            atualizada periodicamente para melhor atender
            às necessidades da plataforma e dos usuários.
          </Text>
        </View>

        {/* rodapé */}
        <Text
          style={{
            marginTop: 40,
            textAlign: "center",
            color: "#888",
            fontSize: 13,
          }}
        >
          Health Plants © 2026
        </Text>
      </ScrollView>
  );
}