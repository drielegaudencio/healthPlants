/* import {Text, TouchableOpacity, Image} from "react-native";
import {styles} from "./styles";

type CardProps = {
    title: string;
    description: string;
    date: string;
    image?: string; // Opcional, caso queira adicionar uma imagem à notícia
    onPress: () => void;
};

export function NewsCard({ title, description, date, image, onPress }: CardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {image && <Image source={{ uri: image }} />}
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
            <Text style={styles.cardDate}>{date}</Text>
        </TouchableOpacity>
    );
} */

import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from './styles';

type NewsCardProps = {
  title: string;
  description: string;
  image?: string;
  //date: string;
  url?: string;
  publishedAt?: string;
};

export function NewsCard({ title, description, image,  url, publishedAt }: NewsCardProps) {
  return (
    <View style={styles.card}>
      
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      )}

      <Text style={styles.cardTitle}>
        {title}
      </Text>

      <Text numberOfLines={3} style={styles.cardDescription}>
        {description}
      </Text>

      <Text style={styles.cardDate}>
        {publishedAt && new Date(publishedAt).toLocaleDateString()}
      </Text>

      {url && (
        <TouchableOpacity onPress={() => Linking.openURL(url)}>
          <Text style={styles.cardUrl}>Continue lendo</Text>
        </TouchableOpacity>
      )}
      
    </View>
  );
}