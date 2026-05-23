import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ScreenWrapper from "../../components/screenWrapper";
import { styles } from "./style";
import { colabGetAll } from "../../storage/colaborador/colabGetAll";
import { ColabStorageDTO } from "../../storage/colaborador/ColabStorageDTO";
import { colabCreate } from "../../storage/colaborador/colabCreate";
import { convertBool } from "../../components/utils/convertBool";
import { userCreate } from "../../storage/user/userCreate";
import { adressCreate } from "../../storage/adress/adressCreate";
import { userGetAll } from "../../storage/user/userGetAll";
import { useNavigation } from "@react-navigation/native";

export function ProfessionalRegisterScreen() {
  const navigation = useNavigation<any>();
  // Dados pessoais
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState("");

  // Endereço
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [bairro, setBairro] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

  // Dados profissionais
  const [profission, setProfission] = useState("");
  const [idUser, idUserUser] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [numeroRegistro, setNumeroRegistro] = useState("");
  const [instituicao, setInstituicao] = useState("");
  const [anosExperiencia, setAnosExperiencia] = useState("");
  const [telefone, setTelefone] = useState("");
  const [site, setSite] = useState("");
  const [biografia, setBiografia] = useState("");
  const [atendimentoOnline, setAtendimentoOnline] = useState("");
  const [atendimentoPresencial, setAtendimentoPresencial] =
    useState("");

  // Senhas
  const [password, setPassword] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Controle de visibilidade das senhas
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] =
    useState(false);

  async function handleRegister(){
    if (password !== confirmarSenha) {
            return Alert.alert(
              "Erro",
              "As senhas não coincidem"
            );
          } 
        const dataUser = {
          id: String(new Date().getTime()),
          name,
          email,
          password,
          typeUser : "colab",
          isAdmin : convertBool(isAdmin),
        };
        const dataAddress = {
          id : String(new Date().getTime()),
          idUser: String(dataUser.id),
          cep,
          logradouro,
          number,
          complement,
          bairro,
          city,
          state
        };
        const dataProfission ={
          id : String(new Date().getTime()),
          profission,
          especialidade,
          idUser: dataUser.id,
          anosExperiencia,
          numeroRegistro,
          instituicao,
          telefone,
          site,
          biografia,
          atendimentoOnline: convertBool(atendimentoOnline),
          atendimentoPresencial: convertBool(atendimentoPresencial) 
        }
        console.log("Cadastro realizado", {
          user: dataUser,
          address: dataAddress,
          profission: dataProfission
        });
        await userCreate(dataUser);
        await colabCreate(dataProfission);
        await adressCreate(dataAddress);
        const result = await userGetAll() ;
        console.log("Usuários cadastrados:", result);
        return navigation.navigate("Login");
    
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
                name="stethoscope"
                size={42}
                color="#6DBA75"
              />
            </View>

            <Text style={styles.logoText}>
              Health <Text style={styles.logoHighlight}>Plants</Text>
            </Text>

            <Text style={styles.subtitle}>
              Cadastre seu perfil profissional e conecte-se a
              pacientes em busca de terapias naturais.
            </Text>
          </View>

          {/* Card de Cadastro */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Cadastro Profissional
            </Text>
            <Text style={styles.cardDescription}>
              Preencha seus dados pessoais e profissionais para
              disponibilizar seus serviços na plataforma.
            </Text>

            {/* ================= DADOS PESSOAIS ================= */}

            <View style={styles.inputContainer}>
              <Icon
                name="person"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="name completo"
                placeholderTextColor="#8A8A8A"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                name="email"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="E-mail profissional"
                placeholderTextColor="#8A8A8A"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* ================= ENDEREÇO ================= */}

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
                value={number}
                onChangeText={setNumber}
              />
            </View>

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
                value={complement}
                onChangeText={setComplement}
              />
            </View>

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
                value={city}
                onChangeText={setCity}
              />
            </View>

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
                value={state}
                onChangeText={setState}
              />
            </View>

            {/* ================= DADOS PROFISSIONAIS ================= */}

            <View style={styles.inputContainer}>
              <Icon
                name="medical-services"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Profissão (Médico, Nutricionista...)"
                placeholderTextColor="#8A8A8A"
                value={profission}
                onChangeText={setProfission}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                name="badge"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Especialidade"
                placeholderTextColor="#8A8A8A"
                value={especialidade}
                onChangeText={setEspecialidade}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                name="verified-user"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Número do Conselho (CRM, CRN...)"
                placeholderTextColor="#8A8A8A"
                value={numeroRegistro}
                onChangeText={setNumeroRegistro}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                name="school"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Instituição de Formação"
                placeholderTextColor="#8A8A8A"
                value={instituicao}
                onChangeText={setInstituicao}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                name="timeline"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Anos de Experiência"
                placeholderTextColor="#8A8A8A"
                keyboardType="numeric"
                value={anosExperiencia}
                onChangeText={setAnosExperiencia}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                name="phone"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Telefone Profissional"
                placeholderTextColor="#8A8A8A"
                keyboardType="phone-pad"
                value={telefone}
                onChangeText={setTelefone}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                name="language"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Site ou LinkedIn (opcional)"
                placeholderTextColor="#8A8A8A"
                autoCapitalize="none"
                value={site}
                onChangeText={setSite}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                name="description"
                size={22}
                color="#6DBA75"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Biografia profissional"
                placeholderTextColor="#8A8A8A"
                multiline
                value={biografia}
                onChangeText={setBiografia}
              />
            </View>

            {/* Tipo de atendimento */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Atendimento Presencial
              </Text>
              <Switch
                value={atendimentoPresencial === 'true'}
                onValueChange={(value) => setAtendimentoPresencial(value ? 'true' : 'false')}
              />
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Atendimento Online
              </Text>
              <Switch
                value={atendimentoOnline === 'true'}
                onValueChange={(value) => setAtendimentoOnline(value ? 'true' : 'false')}
              />
            </View>

            {/* ================= SENHAS ================= */}

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
                value={password}
                onChangeText={setPassword}
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
              <Icon
                name="person-add-alt-1"
                size={20}
                color="#FFFFFF"
              />
              <Text style={styles.registerButtonText}>
                Cadastrar Profissional
              </Text>
            </TouchableOpacity>

            {/* Rodapé */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Já possui conta?
              </Text>

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