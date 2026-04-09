const API_KEY = "af83ebb83798075c8327886a561134c6";

export const buscarNoticias = async () => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=plantas medicinais&lang=pt&max=10&apikey=${API_KEY}`
    );

    const data = await response.json();

    return data.articles;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};