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

export function RegisterScreen() {
  // Dados pessoais
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  // Senhas
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Endereço
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  // Controle de visibilidade das senhas
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  const handleRegister = () => {
    console.log("Cadastro realizado", {
      nome,
      email,
      senha,
      confirmarSenha,
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    });
  };

  const handleGoToLogin = () => {
    console.log("Voltar para login");
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
          {/* Header */}
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
              Crie sua conta e descubra o poder da fitoterapia natural.
            </Text>
          </View>

          {/* Card de Cadastro */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Criar Conta</Text>
            <Text style={styles.cardDescription}>
              Cadastre-se para salvar plantas favoritas, receber recomendações
              personalizadas e utilizar todos os recursos da plataforma.
            </Text>

            {/* Nome */}
            <View style={styles.inputContainer}>
              <Icon
                name="person"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Nome completo"
                placeholderTextColor="#8A8A8A"
                value={nome}
                onChangeText={setNome}
              />
            </View>

            {/* E-mail */}
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

            {/* CEP */}
            <View style={styles.inputContainer}>
              <Icon
                name="markunread-mailbox"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="CEP"
                placeholderTextColor="#8A8A8A"
                keyboardType="numeric"
                value={cep}
                onChangeText={setCep}
              />
            </View>

            {/* Logradouro */}
            <View style={styles.inputContainer}>
              <Icon
                name="location-on"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Logradouro"
                placeholderTextColor="#8A8A8A"
                value={logradouro}
                onChangeText={setLogradouro}
              />
            </View>

            {/* Número */}
            <View style={styles.inputContainer}>
              <Icon
                name="looks-one"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Número"
                placeholderTextColor="#8A8A8A"
                keyboardType="numeric"
                value={numero}
                onChangeText={setNumero}
              />
            </View>

            {/* Complemento */}
            <View style={styles.inputContainer}>
              <Icon
                name="add-home"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Complemento"
                placeholderTextColor="#8A8A8A"
                value={complemento}
                onChangeText={setComplemento}
              />
            </View>

            {/* Bairro */}
            <View style={styles.inputContainer}>
              <Icon
                name="map"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Bairro"
                placeholderTextColor="#8A8A8A"
                value={bairro}
                onChangeText={setBairro}
              />
            </View>

            {/* Cidade */}
            <View style={styles.inputContainer}>
              <Icon
                name="location-city"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Cidade"
                placeholderTextColor="#8A8A8A"
                value={cidade}
                onChangeText={setCidade}
              />
            </View>

            {/* Estado */}
            <View style={styles.inputContainer}>
              <Icon
                name="public"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Estado (UF)"
                placeholderTextColor="#8A8A8A"
                autoCapitalize="characters"
                maxLength={2}
                value={estado}
                onChangeText={setEstado}
              />
            </View>

            {/* Senha */}
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

            {/* Confirmar Senha */}
            <View style={styles.inputContainer}>
              <Icon
                name="lock-outline"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                placeholderTextColor="#8A8A8A"
                secureTextEntry={!mostrarConfirmacao}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
              <TouchableOpacity
                onPress={() =>
                  setMostrarConfirmacao(!mostrarConfirmacao)
                }
              >
                <Icon
                  name={
                    mostrarConfirmacao
                      ? "visibility"
                      : "visibility-off"
                  }
                  size={22}
                  color="#8A8A8A"
                />
              </TouchableOpacity>
            </View>

            {/* Botão Cadastrar */}
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >
              <Icon name="person-add" size={20} color="#FFFFFF" />
              <Text style={styles.registerButtonText}>
                Criar Conta
              </Text>
            </TouchableOpacity>

            {/* Rodapé */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Já possui conta?</Text>

              <TouchableOpacity onPress={handleGoToLogin}>
                <Text style={styles.footerLink}> Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}