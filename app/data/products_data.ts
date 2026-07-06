export type ProductType = "smartphone" | "tablette" | "ordinateur" | "console";

export type Product = {
  id: number; // obligatoire

  type: ProductType; // obligatoire

  brand: string; // obligatoire
  model: string; // obligatoire

  name: string; // obligatoire
  remark?: string;

  price: number; // obligatoire

  storage?: string;
  ram?: string;

  condition?: string;
  description?: string;

  year?: number;
  colors?: string[];
};

export const products: Product[] = [
  // Alaa je te met ici un PRODUIT COMPLET (exemple parfait à respecter pour les autres produits que tu vas ajouté par la suite)
  // Si tu veux pas mettre un champ non obligatoire, tu le supprime tout simplement du coup comme tu as demandé
  {
    id: 1,
    type: "smartphone",
    brand: "SAMSUNG",
    model: "Galaxy S24 Ultra",
    name: "Galaxy S24 Ultra",
    remark: "Produit reconditionné testé et garanti 12 mois",
    price: 599,
    storage: "256 Go",
    ram: "12 Go",
    condition: "Très bon état",
    description:
      "Samsung Galaxy S24 Ultra reconditionné testé et garanti 12 mois.",
    year: 2024,
    colors: ["Noir Titane"],
  },

  // PRODUITS AVEC DONNÉES PARTIELLES (test dynamique)

  {
    id: 2,
    type: "smartphone",
    brand: "Samsung",
    model: "Galaxy S23",
    name: "Samsung Galaxy S23",
    remark: "Produit reconditionné testé et garanti 12 mois",
    price: 749,
    storage: "256 Go",
    ram: "8 Go",
    condition: "Excellent état",
    description: "Smartphone haut de gamme reconditionné.",
    year: 2023,
    colors: ["Noir", "Vert"],
  },

  {
    id: 3,
    type: "tablette",
    brand: "Apple",
    model: "iPad Pro 12.9",
    name: "iPad Pro 12.9",
    // remark manquant
    price: 1099,
    storage: "512 Go",
    ram: "8 Go",
    condition: "Très bon état",
    // description manquante
    year: 2022,
    colors: ["Gris sidéral"],
  },

  {
    id: 4,
    type: "ordinateur",
    brand: "Apple",
    model: "MacBook Pro M2",
    name: "MacBook Pro M2",
    // remark manquant
    price: 1999,
    storage: "512 Go",
    ram: "16 Go",
    // condition manquante volontaire
    description: "Ordinateur puissant pour pro.",
    // year manquante
    colors: ["Gris"],
  },
  {
    id: 5,
    type: "console",
    brand: "Sony",
    model: "PS5 Standard",
    name: "PS5 Standard",
    price: 499,
  },
];
