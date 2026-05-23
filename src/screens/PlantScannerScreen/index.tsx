// PlantScannerScreen.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRoute } from "@react-navigation/native";
import ScreenWrapper from "../../components/screenWrapper";
import { styles } from "./styles";
import { Paths, copyAsync } from "expo-file-system";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const API_KEY = "2b10QyQK2ue5Bh8chcwpuAuhGO";

export function PlantScannerScreen() {
  const route = useRoute<any>();
  const imageFromHome = route.params?.imageUri;
  const [image, setImage] = useState<string | null>(
  imageFromHome || null
);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const imageUri = route.params?.imageUri;
  /*  async function selecionarImagem() {
          const res = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ["images"],
              quality: 1,
          });
  
          if (!res.canceled) {
              const uri = res.assets[0].uri;
  
              const nomeArquivo = `plant_${Date.now()}.jpg`;
              const novoCaminho = `${Paths.document.uri}${nomeArquivo}`;
  
              await FileSystem.copyAsync({
                  from: uri,
                  to: novoCaminho,
              });
  
              setImage(novoCaminho);
          }
        } */
  /* async function handleOpenCamera() {
    try {
      const permission =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Permissão negada",
          "É necessário permitir acesso à câmera."
        );
        return;
      }

     const response = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images'],
        quality: 1,
        allowsEditing: true,
      });
      if (response.canceled) return;

      const uri = response.assets[0].uri;

      setImage(uri);
      console.log("Tirando foto....\n",response)

      await identifyPlant(uri);

    } catch (error) {
      console.log(error);
    }
  } */
 async function abrirCamera() {

  const permission =
    await ImagePicker.requestCameraPermissionsAsync();

  if (!permission.granted) {
    return;
  }

  const result =
    await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      quality: 1,
      allowsEditing: true,
    });

  if (!result.canceled) {

    const uri = result.assets[0].uri;

    setImage(uri);

    identifyPlant(uri);
  }
}

  async function identifyPlant(uri: string) {
    try {
      setLoading(true);
      console.log("Dentro da funçao de identificação ...");
      const formData = new FormData();

      formData.append("images", {
        uri,
        name: "plant.jpg",
        type: "image/jpeg",
      } as any);

      formData.append("organs", "leaf");
  
      const response = await fetch(
        `https://my-api.plantnet.org/v2/identify/all?api-key=${API_KEY}`,
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = await response.json();

      console.log('DATA - ',data);

      setResult(data);
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Erro",
        "Não foi possível reconhecer a planta."
      );
    } finally {
      setLoading(false);
    }
  }

  const bestMatch = result?.results?.[0];
  useEffect(() => {

  if (imageUri) {
    identifyPlant(imageUri);
  }

}, []);
  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 200,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="leaf"
              size={42}
              color="#4F8F5B"
            />
          </View>

          <Text style={styles.title}>
            Reconhecimento de Plantas
          </Text>

          <Text style={styles.subtitle}>
            Tire uma foto da planta para identificar a espécie
          </Text>
        </View>

        {/* IMAGEM */}
        {/* <TouchableOpacity
          style={styles.imageContainer}
          onPress={handleOpenCamera}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={styles.image}
            />
          ) : (
            <View style={styles.placeholder}>
              <Icon
                name="photo-camera"
                size={60}
                color="#6DBA75"
              />

              <Text style={styles.placeholderText}>
                Toque para abrir a câmera
              </Text>
            </View>
          )}
        </TouchableOpacity> */}
        <View style={styles.imageContainer}>

  {image ? (

    <Image
      source={{ uri: image }}
      style={styles.image}
    />

  ) : (

    <View style={styles.placeholder}>

      <MaterialIcons
        name="photo-camera"
        size={70}
        color="#7BAA84"
      />

      <Text style={styles.placeholderText}>
        Tire uma foto da planta
      </Text>

    </View>

  )}

</View>

        {/* BOTÃO */}
         <TouchableOpacity
          style={styles.button}
          onPress={abrirCamera}
        >
          <Icon name="camera-alt" size={22} color="#FFF" />

          <Text style={styles.buttonText}>
            Tirar Foto
          </Text>
        </TouchableOpacity>



        {/* LOADING */}
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#4F8F5B" />

            <Text style={styles.loadingText}>
              Reconhecendo planta...
            </Text>
          </View>
        )}

        {/* RESULTADO */}
        {bestMatch && (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>
              Planta Identificada
            </Text>

            <InfoItem
              label="Nome Científico"
              value={
                bestMatch.species.scientificNameWithoutAuthor
              }
            />

            <InfoItem
              label="Família"
              value={bestMatch.species.family.scientificName}
            />

            <InfoItem
              label="Nome Popular"
              value={
                bestMatch.species.commonNames?.[0] ||
                "Não encontrado"
              }
            />

            <InfoItem
              label="Probabilidade"
              value={`${(
                bestMatch.score * 100
              ).toFixed(2)}%`}
            />
          </View>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>{label}</Text>

      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}