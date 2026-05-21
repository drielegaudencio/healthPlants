import React, {useCallback, useState} from "react";
import { View, Text, TouchableOpacity , Image} from "react-native";
import { styles } from "./style";
import { PlantStorageDTO } from "../../storage/plant/PlantStorageDTO";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllPlants } from "../../storage/plant/plantGetAll";
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
    const navigation = useNavigation<any>();
    const [plantas, setPlantas] = useState<any[]>([]);
    async function carregarPlantas() {
        const data = await getAllPlants();
        setPlantas(data);
    }
    useFocusEffect(
        useCallback(() => {
        carregarPlantas();
        }, [])
    );
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
              <TouchableOpacity style={styles.heartButton}>
              <Feather name="heart" size={26} color="#7D9B7A" />
            </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
    );
}