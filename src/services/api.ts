const API_KEY = "af83ebb83798075c8327886a561134c6";
//const API_KEY = "a80499558a8fa590d18f0b804d50e5d3";
export const buscarNoticias = async () => {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=plantas medicinais&lang=pt-br&max=5&apikey=${API_KEY}`
    );

    const data = await response.json();
    console.log('RESPOSTA DA API:', data);

    return data.articles || [];
    
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};