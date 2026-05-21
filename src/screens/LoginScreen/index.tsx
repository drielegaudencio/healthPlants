import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "../../components/screenWrapper";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

/*type RootStackRoutes = {
  Login: undefined;
  Register: undefined;
  ProfessionalRegister: undefined;
  MainTabs: undefined;
};*/

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  /*const navigation =
    useNavigation<NativeStackNavigationProp<RootStackRoutes>>();*/

  const handleLogin = () => {
    console.log("Login realizado");
  };

  const handleCadastro = () => {
    navigation.navigate("Register");
  };

  const handleCadastroProfissional = () => {
    navigation.navigate("ProfessionalRegister");
  };

  const handleEsqueciSenha = () => {
    console.log("Ir para recuperação de senha");
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo e título */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <MaterialCommunityIcons
                name="leaf"
                size={42}
                color="#6DBA75"
              />
            </View>

            <Text style={styles.logoText}>
              Health <Text style={styles.logoHighlight}>Plants</Text>
            </Text>

            <Text style={styles.subtitle}>
              Seu guia de fitoterapia e bem-estar natural
            </Text>
          </View>

          {/* Card de Login */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Entrar na sua conta</Text>
            <Text style={styles.cardDescription}>
              Acesse para identificar plantas, salvar favoritos e acompanhar
              recomendações personalizadas.
            </Text>

            {/* Campo de Email */}
            <View style={styles.inputContainer}>
              <Icon
                name="email"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#8A8A8A"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Campo de Senha */}
            <View style={styles.inputContainer}>
              <Icon
                name="lock"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />

              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#8A8A8A"
                secureTextEntry={!mostrarSenha}
                value={senha}
                onChangeText={setSenha}
              />

              <TouchableOpacity
                onPress={() => setMostrarSenha(!mostrarSenha)}
              >
                <Icon
                  name={mostrarSenha ? "visibility" : "visibility-off"}
                  size={22}
                  color="#8A8A8A"
                />
              </TouchableOpacity>
            </View>

            {/* Esqueci minha senha */}
            <TouchableOpacity
              onPress={handleEsqueciSenha}
              style={styles.forgotButton}
            >
              <Text style={styles.forgotText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            {/* Botão Entrar */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Icon name="login" size={20} color="#FFFFFF" />
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>

            {/* Cadastro */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Ainda não possui conta?</Text>

              <TouchableOpacity onPress={handleCadastro}>
                <Text style={styles.footerLink}> Criar conta</Text>
              </TouchableOpacity>
            </View>

            {/* Cadastro pprofissional */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Quer criar uma conta profissional?</Text>

              <TouchableOpacity onPress={handleCadastroProfissional}>
                <Text style={styles.footerLink}> Criar conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}