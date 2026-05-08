import {} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type CollectionCardProps = {
    id: number;
    name: string;
    image: string;
    prescription: string;    
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
export function CollectionCard({ id, name, image, prescription }: CollectionCardProps) {    
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardPrescription}>{prescription}</Text>
        </View>
    );
}   