import { PlantStorageDTO } from "./PlantStorageDTO";

export const defaultPlants: PlantStorageDTO[] = [
  // ================= MEDICINAIS =================
  {
      id: "1",
      namePop: "Camomila",
      nameSci: "Matricaria chamomilla",
      tipo: "Planta Medicinal",
      image: "data:image/jpeg;base64,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",
      family: "",
      idIndicacao: [
          "Insonia","Cólica Abdominal", "Clareamento capilar", "Distúrbio gastrointestinal"
      ],
      properties: [
          "Calmante",
          "Anti-inflamatória",
          "Relaxante",
          "Antibacteriana",
          "Fungicida"
      ],
    about: " A camomila é empregada em doenças da pele e mucosas em geral . Os banhos de assento são indicados para hemorróidas , alergias e para assaduras em crianças . Em dermatologia, são utilizadas pomadas e loções a base dos constituintes da camomila, as quais são recomendadas para dermatites de contato, impetigo, exantemas alérgicos, eritemas causados por radioterapia (pomada de azuleno), queimaduras do sol. ",
      favorite: false,
      contraindications: ["Se estiver usando camomila, evitar trabalhos perigosos ou dirigir; pode potencializar ansiolíticos.  Não usar durante a gravidez. ","Pessoas com alergia a flores da família Asteraceae"],
      part: ["flor"],
      naoRecomendada: ["Grávidas"],
      formaUso: ["Chá", "Óleo", ],
      comercializada: true,
      estudo: "A ciência confirma que a camomila possui propriedades medicinais valiosas, como ação ansiolítica, anti-inflamatória, antiespasmódica e cicatrizante. Esses benefícios vêm de compostos ativos, em especial o flavonoide apigenina, que atua no cérebro promovendo relaxamento",
      componentes:["Squiterpenos","Flavonóides","Cumarinas"],
      referencia: "https://hortodidatico.ufsc.br/camomila/"
  },

  {
      id: "2",
      namePop: "Hortelã",
      nameSci: "Mentha spicata",
      tipo: "Planta Medicinal",
      image: "https://acdn-us.mitiendanube.com/stores/002/168/613/products/hortela-2-min1-2f3701cc7498d2995616902325437574-1024-1024.webp",

      properties: [
          "Digestiva",
          "Refrescante",
          "Antisséptica",
          "Analgésica"
      ],

      favorite: false,
      family: "Lamiaceae",
      posologia:["Como chá: ferver cerca de meio litro de água com 1 colher de sopa de folhas, deixar cerca de 3 minutos após levantar fervura, desligar, deixar descansar uns 5 minutos, coar e tomar quente ou frio."],
      idIndicacao: [],
      contraindications: [],
      part: ["folhas"],
      naoRecomendada: [],
      formaUso: [],
      solo: "Sol pleno e umidade moderada",
      comercializada: false,
      estudo: "",
      referencia: "https://www.gvaa.com.br/revista/index.php/INTESA/article/view/8519"
  },

  {
      id: "3",
      namePop: "Erva-cidreira",
      nameSci: "Melissa officinalis",
      tipo: "Planta Medicinal",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2f4jNvc3rq3sX1g1gm-BtQQLG9MBzH4bKJH8Nzhqggoon_IkqjqfO7ipl7uhSy15pW9FxGtqhTgQrU5l4RmSUGEetp4FBC6uowB5zN7-MUg&s=10",

      properties: [
          "Calmante",
          "Ansiolítica",
          "Relaxante",
      ],
      favorite: false,
      contraindications: [],
      part: [],
      naoRecomendada: [],
      formaUso: [],
      comercializada: false,
      estudo: "",
      referencia: "",
      family: "",
      idIndicacao: []
  },

  {
    id: "4",
    namePop: "Alecrim",
    nameSci: "Rosmarinus officinalis",
    tipo: "Planta Medicinal",
    image:
      "https://cdn.awsli.com.br/800x800/1348/1348550/produto/111620982/d327f5a0bd.jpg",

    properties: [
      "Estimulante",
      "Digestiva",
      "Antioxidante",
    ],
      favorite: false,
      contraindications: [],
      part: [],
      naoRecomendada: [],
      formaUso: [],
      comercializada: false,
      estudo: "",
      referencia: "",
      family: "",
      idIndicacao: []
  },

  {
    id: "5",
    namePop: "Boldo",
    nameSci: "Peumus boldus",
    tipo: "Planta Medicinal",
    image:
      "https://jpimg.com.br/uploads/2025/01/7-beneficios-do-boldo-do-chile-para-a-saude-e-como-usa-lo.jpg",

    properties: [
      "Digestiva",
      "Hepática",
      "Antiácida",
    ],
      favorite: false,
      contraindications: [],
      part: [],
      naoRecomendada: [],
      formaUso: [],
      comercializada: false,
      estudo: "",
      referencia: "",
      family: "",
      idIndicacao: []
  },

  // ================= LEGUMES =================
  {
    id: "6",
    namePop: "Cenoura",
    nameSci: "Daucus carota",
    tipo: "Legume",
    image:
      "data:image/jpeg;base64,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",

    properties: [
      "Rica em vitamina A",
      "Antioxidante",
    ],
      favorite: false,
      contraindications: [],
      part: [],
      naoRecomendada: [],
      formaUso: [],
      comercializada: false,
      estudo: "",
      referencia: "",
      family: "",
      idIndicacao: []
  },

  {
    id: "7",
    namePop: "Beterraba",
    nameSci: "Beta vulgaris",
    tipo: "Legume",
    image:
      "https://cdn.awsli.com.br/600x450/998/998380/produto/36785313/sementes-beterraba-rara-nvqpxh556c.jpg",

    properties: [
      "Fonte de ferro",
      "Energética",
    ],
      favorite: false,
      contraindications: [],
      part: [],
      naoRecomendada: [],
      formaUso: [],
      comercializada: false,
      estudo: "",
      referencia: "",
      family: "",
      idIndicacao: []
  },

  // ================= FRUTAS =================
  {
    id: "8",
    namePop: "Banana",
    nameSci: "Musa paradisiaca",
    tipo: "Fruta",
    image:
      "https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg",

    properties: [
      "Fonte de potássio",
      "Energética",
    ],
      favorite: false,
      contraindications: [],
      part: [],
      naoRecomendada: [],
      formaUso: [],
      comercializada: false,
      estudo: "",
      referencia: "",
      family: "",
      idIndicacao: []
  },

  {
    id: "9",
    namePop: "Maçã",
    nameSci: "Malus domestica",
    tipo: "Fruta",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",

    properties: [
      "Antioxidante",
      "Rica em fibras",
    ],
      favorite: false,
      contraindications: [],
      part: [],
      naoRecomendada: [],
      formaUso: [],
      comercializada: false,
      estudo: "",
      referencia: "",
      family: "",
      idIndicacao: []
  },

  // ================= VERDURA =================
  {
    id: "10",
    namePop: "Alface",
    nameSci: "Lactuca sativa",
    tipo: "Verdura",
    image:
      "https://agriconline.com.br/portal/wp-content/uploads/2021/04/a-crespa-470x470.jpeg",

    properties: [
      "Hidratante",
      "Rica em fibras",
      "Baixa caloria",
    ],
      favorite: false,
      contraindications: [],
      part: [],
      naoRecomendada: [],
      formaUso: [],
      comercializada: false,
      estudo: "",
      referencia: "",
      family: "",
      idIndicacao: []
  },
];