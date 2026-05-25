// defaultRecipes.ts

import { recipeCreate } from "./recipeCreate";

export async function defaultRecipes() {
  const recipes = [
    {
      id: "1",

      name: "Chá de Camomila",

      description:
        "Receita natural calmante indicada para ansiedade e insônia.",

      ingredients: [
        "2 colheres de flores de camomila",
        "250ml de água",
      ],

      preparation: [
        "Ferver a água",
        "Adicionar a camomila",
        "Tampar por 10 minutos",
        "Coar antes de consumir",
      ],

      benefits: [
        "Ajuda no relaxamento",
        "Melhora o sono",
        "Reduz ansiedade",
      ],

      contraindications: [
        "Gestantes devem consultar médico",
        "Pessoas alérgicas à planta",
      ],

      indicacao: "Ansiedade e Insônia",

      type: "Chá",

      image:
        "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002",
    },

    {
      id: "2",

      name: "Suco Detox de Couve",

      description:
        "Suco natural para auxiliar na desintoxicação do organismo.",

      ingredients: [
        "2 folhas de couve",
        "1 maçã",
        "500ml de água",
        "Suco de 1 limão",
      ],

      preparation: [
        "Lavar todos os ingredientes",
        "Bater no liquidificador",
        "Consumir gelado",
      ],

      benefits: [
        "Auxilia na digestão",
        "Rico em fibras",
        "Ajuda na desintoxicação",
      ],

      contraindications: [
        "Evitar excesso em pessoas com gastrite",
      ],

      indicacao: "Má digestão",

      type: "Suco",

      image:
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
    },

    {
      id: "3",

      name: "Chá de Hortelã",

      description:
        "Receita natural para aliviar desconfortos digestivos.",

      ingredients: [
        "10 folhas de hortelã",
        "300ml de água",
      ],

      preparation: [
        "Ferver a água",
        "Adicionar as folhas",
        "Tampar por 5 minutos",
      ],

      benefits: [
        "Melhora digestão",
        "Reduz gases",
        "Auxilia no alívio de náuseas",
      ],

      contraindications: [
        "Evitar em refluxo intenso",
      ],

      indicacao: "Dor abdominal",

      type: "Chá",

      image:
        "https://images.unsplash.com/photo-1497534446932-c925b458314e",
    },

    {
      id: "4",

      name: "Vitamina Energética de Banana",

      description:
        "Bebida natural rica em energia e nutrientes.",

      ingredients: [
        "2 bananas",
        "300ml de leite",
        "1 colher de aveia",
      ],

      preparation: [
        "Bater todos os ingredientes",
        "Consumir imediatamente",
      ],

      benefits: [
        "Aumenta energia",
        "Rica em potássio",
        "Auxilia no rendimento físico",
      ],

      contraindications: [
        "Diabéticos devem consumir com moderação",
      ],

      indicacao: "Cansaço",

      type: "Vitamina",

      image:
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    },

    {
      id: "5",

      name: "Xarope de Gengibre com Mel",

      description:
        "Receita caseira usada para aliviar tosse e garganta irritada.",

      ingredients: [
        "1 pedaço de gengibre",
        "3 colheres de mel",
        "200ml de água",
      ],

      preparation: [
        "Ferver gengibre com água",
        "Adicionar mel após esfriar",
      ],

      benefits: [
        "Alivia tosse",
        "Auxilia imunidade",
        "Reduz inflamação",
      ],

      contraindications: [
        "Diabéticos devem evitar excesso",
      ],

      indicacao: "Gripe e tosse",

      type: "Xarope",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    },
  ];

  for (const recipe of recipes) {
    await recipeCreate(recipe);
  }

  console.log("Receitas padrão cadastradas");
}