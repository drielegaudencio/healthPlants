import { useEffect, useState,} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking, ScrollView, ActivityIndicator } from 'react-native';
import { Header } from '../../components/Header';
import { NewsCard } from '../../components/NewsCard';
import { buscarNoticias } from '../../services/api';
import ScreenWrapper from '../../components/screenWrapper';
import { styles } from './style';

interface NewsItem {
  title: string;
  description: string;
  content: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
}

export function NewsScreen({route}: any) {
  
  //const { id } = route.params || {};
  const [noticia, setNoticia] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarNoticias();
    }, []);
    const buscarNoticias = async () => {
        const noticias = await buscarNoticias();
    }
    setLoading(false);
    /* if (noticias.length > 0) {
        const n = noticias[0];
    } */
    /* 
        if (noticias.length > 0) {
            const n = noticias[0];

            setNoticia({
                title: n.title || "Título não disponível", 
                description: n.description || "Descrição não disponível", urlToImage: n.image || "https://via.placeholder.com/150", 
                publishedAt: n.publishedAt ||"Data não disponível", 
                url: n.url || " "});
        }
        setLoading(false);
    }
    if (noticia?.url) {
        Linking.openURL(noticia.url);
    }
    if (loading) {
        return (
            <ActivityIndicator size="large" color="#2d9b7a" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
        );
    }
    if(!noticia) {
        return (
            <Text>Nenhuma notícia encontrada</Text>
        );
    } */


  return (
    <ScreenWrapper>
        <Text >Últimas Notícias</Text>
        <Text> notícias encontradas</Text>
        <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
      {/* <Text >{noticias.title}</Text>

      <View style={styles.row}>
        <Image source={{ uri: noticia.image }} style={styles.image} />

        <Text style={styles.description}>
          {noticia.description}
        </Text>
      </View>

      <Text style={styles.link}>{noticia.url}</Text>

      <TouchableOpacity onPress={abrirLink}>
        <Text style={styles.readMore}>Continuar lendo</Text>
      </TouchableOpacity> */}
    </View>
    </ScrollView>

      {/* <FlatList style={styles.card}
        data={noticias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
            <Text> Título: {item.title}</Text>
        )}
        contentContainerStyle={styles.listContent}
        /> */}
    </ScreenWrapper>
  );

}