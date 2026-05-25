import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import ScreenWrapper from "../../components/screenWrapper";

export function TermsScreen() {
  const navigation = useNavigation<any>();

  return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name="arrow-back"
              size={28}
              color="#23482D"
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#23482D",
            }}
          >
            Termos de Uso
          </Text>
        </View>

        {/* Conteúdo */}
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#444",
              lineHeight: 24,
              textAlign: "justify",
            }}
          >
            Bem-vindo ao aplicativo Health Plants.
            Ao utilizar nossa plataforma, você concorda
            com os presentes Termos de Uso.
            {"\n\n"}

            O aplicativo possui finalidade exclusivamente
            educativa e informativa sobre plantas
            medicinais, fitoterapia, terapias integrativas
            e conteúdos relacionados à saúde natural.
            {"\n\n"}

            As informações disponibilizadas NÃO substituem
            orientação médica, diagnóstico profissional,
            acompanhamento clínico ou tratamento
            especializado.
            {"\n\n"}

            O usuário é responsável pela forma como utiliza
            as informações presentes na plataforma.
            Recomenda-se sempre buscar orientação de
            profissionais qualificados antes de utilizar
            plantas medicinais, fitoterápicos ou terapias
            alternativas.
            {"\n\n"}

            O aplicativo não se responsabiliza por:
            {"\n\n"}

            • automedicação;
            {"\n"}
            • uso incorreto de plantas medicinais;
            {"\n"}
            • reações adversas;
            {"\n"}
            • interações medicamentosas;
            {"\n"}
            • decisões tomadas com base nas informações do
            aplicativo.
            {"\n\n"}

            Alguns conteúdos podem ser cadastrados por
            usuários, colaboradores e profissionais.
            Apesar dos esforços para manter a qualidade das
            informações, não garantimos total ausência de
            erros, omissões ou desatualizações.
            {"\n\n"}

            Usuários cadastrados comprometem-se a:
            {"\n\n"}

            • fornecer informações verdadeiras;
            {"\n"}
            • utilizar o aplicativo de forma ética;
            {"\n"}
            • não publicar conteúdos ofensivos, falsos ou
            ilegais;
            {"\n"}
            • respeitar os demais usuários da plataforma.
            {"\n\n"}

            O aplicativo poderá alterar funcionalidades,
            conteúdos ou estes Termos de Uso a qualquer
            momento, sem aviso prévio.
            {"\n\n"}

            Ao continuar utilizando a plataforma, você
            declara estar ciente e de acordo com estes
            Termos de Uso.
          </Text>
          </ScrollView>
      </View>
  );
}