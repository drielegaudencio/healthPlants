import React, {useEffect, useReducer, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import ScreenWrapper from "../../components/screenWrapper";
import {themes} from "../../global/styles/color";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { buscarNoticias } from "../../services/api";
import { NewsCard } from "../../components/NewsCard";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

type ActionProps = {
  icon: string;
  label: string;
  description: string;
};

export function HomeScreen() {
  const [noticias, setNoticias] = useState<any>(null);

  useEffect(() => {
    const carregarNoticias = async () => {
       const data = await buscarNoticias();
      setNoticias(data);
    };

    carregarNoticias();
  }, []);


  return (
    <ScreenWrapper >
      <Text style={styles.welcome}>
        Bem-vinda, Andriele 🌿
      </Text>

      <Text style={styles.subtitle}>
        Seu guia de fitoterapia e bem-estar natural
      </Text>
    <ScrollView  style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 180 }}
      showsVerticalScrollIndicator={false}>
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

      {/* Card de ultimas notícias */}
      <View style={styles.cardNews}>
        <Text style={styles.cardTitle}>Últimas Notícias </Text>
        {/*  <FlatList
        data={noticias}
        horizontal={true} 
        nestedScrollEnabled={true}
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
        )}/> */}
      </View>
      
        <Text style={styles.section}>🍀Ações rápidas</Text>

        <View style={styles.actions}>
          <Action icon="search" label="Buscar por Sintomas" description="Encontre plantas indicadas para o seu sintoma." />
          <Action icon="favorite" label="Favoritos" description="Acesse rapidamente sua lista de favoritos." />
        </View>
    
      

    </ScrollView>
    </ScreenWrapper>
  );
}

function Action({ icon, label, description }: ActionProps) {
  return (
    <TouchableOpacity style={styles.actionCard}>
      {/*Ícone*/}
      <Icon name={icon} size={28} color={themes.colors.primary} style={styles.actionIcon} />

      {/*Texto*/}
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      
    </TouchableOpacity>
  );
}
