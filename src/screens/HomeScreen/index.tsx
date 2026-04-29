import React, {useEffect, useReducer, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import ScreenWrapper from "../../components/screenWrapper";
import {themes} from "../../global/styles/color";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { buscarNoticias } from "../../services/api";
import { NewsCard } from "../../components/NewsCard";
import { useNavigation } from "@react-navigation/native";
type ActionProps = {
  icon: string;
  label: string;
};

export function HomeScreen() {
  const [noticias, setNoticias] = useState<any>(null);

  /* const limitarDescricao = (texto: string, limite: number) => {
    if (!texto) return "";
    const palavras = texto.split(" ");
    return palavras.slice(0, limite).join(" ") + "...";
  }; */
  useEffect(() => {
    const carregarNoticias = async () => {
       const data = await buscarNoticias();
      setNoticias(data);
    };

    carregarNoticias();
  }, []);


  return (
    <ScreenWrapper>
      <Text style={styles.welcome}>
        Bem-vinda, Andriele 🌿
      </Text>

      <Text style={styles.subtitle}>
        Seu guia de fitoterapia e bem-estar natural
      </Text>
<ScrollView>
      <View style={styles.card}>
        <View style={{flexDirection: "row", alignItems: "center", gap: 15}}>
          <MaterialCommunityIcons name="flower" size={34} color= 'rgba(15, 65, 8, 0.4)' backgroundColor='rgba(15, 65, 8, 0.1)' padding={10} justifyContent="between" position="relative" marginBottom={5} borderRadius={50} />
        <View>
           <Text style={styles.cardTitle}>Identificar Planta</Text>
          <Text style={styles.cardText}>
            Tire uma foto para identificar a espécie
          </Text>
        </View>
       
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon name="photo-camera" size={20} color="#fff" />
          <Text style={styles.buttonText}>Abrir Câmera</Text>
        </TouchableOpacity>
        
      </View>

      /// Card de ultimas notícias
      <View style={styles.cardNews}>
        <Text style={styles.cardTitle}>Últimas Notícias </Text>
         <FlatList
        data={noticias}
        horizontal={true} 
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        renderItem={({ item }) => (
          <NewsCard
            title={item.title}
            description={item.description}
            image={item.image}
            publishedAt={item.publishedAt}
            url={item.url}
          />
    )}
  />
      </View>
      <Text style={styles.section}>Ações rápidas</Text>

      <View style={styles.actions}>
        <Action icon="search" label="Sintomas" />
        <Action icon="eco" label="Catálogo" />
      </View>
      {/* <TouchableOpacity style={styles.button}>
          <Icon name="photo-camera" size={20} color="#fff" />
          <Text style={styles.buttonText}>Abrir Câmera</Text>
        </TouchableOpacity> */}

</ScrollView>
    </ScreenWrapper>
  );
}

function Action({ icon, label }: ActionProps) {
  return (
    <TouchableOpacity style={styles.actionCard}>
      <Icon name={icon} size={28} color={themes.colors.primary} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    color: themes.colors.primary,
    marginTop: 10,
  },
  subtitle: {
    color: themes.colors.textLight,
    marginBottom: 15,
  },
  card: {
    backgroundColor: themes.colors.card,
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 4,
  },
  cardNews: {
    backgroundColor: themes.colors.lightGreen,
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 4,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cardText: {
    color: themes.colors.textLight,
    marginBottom: 10,
  },
  button: {
    backgroundColor: themes.colors.secondary,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
  },
  section: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "48%",
    alignItems: "center",
  },
  newsItem: {
    marginBottom: 15,
  },
  newsTitle: {
    fontWeight: "bold",
  },
  newsDescription: {
    color: themes.colors.textLight,
  },

});