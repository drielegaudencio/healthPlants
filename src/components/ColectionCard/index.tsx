import React, {useCallback, useState} from "react";
import { View, Text, TouchableOpacity , Image} from "react-native";
import { styles } from "./style";
import { PlantStorageDTO } from "../../storage/plant/PlantStorageDTO";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { getAllPlants } from "../../storage/plant/plantGetAll";
import { plantUpdate } from "../../storage/plant/plantUpdate";
import { useAuth } from "../../context/AuthContext";
type CollectionCardProps = {
    data : PlantStorageDTO
};
const plantCollection = [
    {
        id: 1,
        name: "Coleção de Plantas Medicinais",
        image: "https://example.com/collection-image.jpg",
        prescription: "Descubra as melhores plantas para o seu bem-estar."
    },
    {
        id: 2,
        name: "Coleção de Plantas Ornamentais",
        image: "https://example.com/collection-image.jpg",
        prescription: "Transforme seu jardim com as melhores plantas ornamentais."
    },
    {
        id: 3,
        name: "Coleção de Plantas Aromáticas",
        image: "https://example.com/collection-image.jpg",
        prescription: "Encontre as plantas aromáticas perfeitas para sua casa."
    }

];
export function CollectionCard({ data}: CollectionCardProps) {
    const { user } = useAuth();
    const navigation = useNavigation<any>();
    const [isFavorite, setIsFavorite] = useState(
  data.favorite || false
);
    async function handleFavorite() {

    const updatedPlant = {
    ...data,
    favorite: !isFavorite,
    };

  setIsFavorite(!isFavorite);

  await plantUpdate(updatedPlant);
}
    
    return (
        //{data.image && (<Image source={{ uri: data.image }} style={styles.image} />)}
        
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("PlantDetails", { planta: data })}
          >
            {data.image && (<Image source={{ uri: data.image }} style={styles.image} />)}
            <View style={styles.cardContent}>
              <Text style={styles.plantName}>{data.namePop}</Text>
              <Text style={styles.label}>Ação Principal:</Text>
              <Text style={styles.description}>
                {Array.isArray(data.properties)
                  ? data.properties.join(", ")
                  : data.properties || "Não informado"}
              </Text>
              <View style={styles.leafRow}>
                <MaterialCommunityIcons name="leaf" size={22} color="#8BAD73" />
                <Text style={styles.decorativeLine}>〜 〜 〜</Text>
              </View>
              <TouchableOpacity onPress={handleFavorite}>
                <MaterialCommunityIcons
                    name={
                    isFavorite
                        ? "heart"
                        : "heart-outline"
                    }
                    size={30}
                    color="#5A8F62"
                />
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
    );
}