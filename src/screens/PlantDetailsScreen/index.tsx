// PlantDetailsScreen.tsx

import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";
import ScreenWrapper from "../../components/screenWrapper";
import { PLANT_COLLECTION } from "../../storage/storageConfig";
import { useState } from "react";

export default function PlantDetailsScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { planta } = route.params;
  


  return (
    <ScreenWrapper>
      
        <ScrollView style={{flex : 1}} contentContainerStyle={{ paddingBottom: 250, flexGrow: 1,}} showsVerticalScrollIndicator={false}>

        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack("PlantsList")}>
              <Feather name="chevron-left" size={34} color="#31583A" />
          </TouchableOpacity>
        </View>
        
          <Image source={{ uri: planta.image }} style={styles.heroImage} />
          <View style={styles.topBar}>
            <Text style={styles.title}>{planta.namePop}</Text>
          </View>
          
          <Text style={styles.scientificName}>{planta.nameSci}</Text>
          <Text style={styles.categoryText}>{planta.tipo}</Text>
          <Text style={styles.description}>{planta.estudo || " "}</Text>

          <Text style={styles.sectionTitle}>🌿 Sobre</Text>
          <Text style={styles.description}>{planta.about}</Text>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>🌿 Informações</Text>

          <InfoItem title="Ação Principal" text={planta.properties[0] || "Não informado"} icon="medical-bag" />
          <InfoItem title="Benefícios" text={planta.benefits || "Não informado"} icon="heart" />
          <InfoItem title="Vitaminas e Minerais" text={planta.vitaminas && planta.minerais ? `${planta.vitaminas} e ${planta.minerais}` : "Não informado"} icon="pill" />
          <InfoItem title="Indicações" text={planta.idIndicacao?.join(', ') || "Não informado"} icon="doctor" />
          <InfoItem title="Contraindicações" text={planta.contraindications || "Não informado"} icon="alert-circle" />
          <InfoItem title="Não Recomendado para" text={planta.naoRecomendada?.join(', ') || "Não informado"} icon="alert-octagon" />
          <InfoItem title="Parte Utilizada" text={planta.part ||"Não informado"} icon="flower" />
          <InfoItem title="Forma de Uso" text={planta.formaUso.join(', ') || "Não informado"} icon="tea" />
          <InfoItem title="Se encontra para venda?" text={planta.comercializada ? "Sim" : "Não"} icon="store" />
          <InfoItem title="Como Cultivar" text={"Em clima "+ planta.clima && "em solo"+ planta.solo ? ` Em clima ${planta.clima} e em solo ${planta.solo}` : "Não informado"} icon="sprout" />
          <InfoItem title="Onde Encontrar" text={planta.regiao || "Não informado"} icon="map-marker" />
          <InfoItem title="Pesquisas Relacionadas" text={planta.referencia || "Não informado"} icon="book-open-page-variant" />
          
      </ScrollView>
  </ScreenWrapper>
  );
}

function InfoItem({ title, text, icon }: any) {
  return (
    
      <View style={styles.infoItem}>
        <View style={styles.infoIcon}>
          <MaterialCommunityIcons name={icon} size={22} color="#557B4E" />
        </View>
        <View style={styles.infoTextArea}>
          <Text style={styles.infoTitle}>{title}</Text>
          <Text style={styles.infoText}>{text}</Text>
        </View>
        {/* <Feather name="chevron-right" size={22} color="#557B4E" /> */}
      </View>
   
  );
}
