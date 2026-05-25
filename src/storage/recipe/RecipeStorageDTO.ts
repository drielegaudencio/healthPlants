// RecipeStorageDTO.ts

export type RecipeStorageDTO = {
  id: string;

  name: string;

  description: string;

  ingredients: string[];

  preparation: string[];

  benefits: string[];

  contraindications: string[];

  indicacao: string;

  type: string;

  image?: string;
};