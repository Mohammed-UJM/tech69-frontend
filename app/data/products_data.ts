export type ProductType = "smartphone" | "tablette" | "ordinateur" | "console";

export type Product = {
  id: number;

  type: ProductType;

  brand: string;

  model: string;

  name: string;

  price: number;

  storage: string;

  ram: string;

  condition: string;

  description: string;

  year?: number;

  colors?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    type: "smartphone",
    brand: "Apple",
    model: "iPhone 14 Pro",
    name: "iPhone 14 Pro",
    price: 899,
    storage: "256 Go",
    ram: "6 Go",
    condition: "Très bon état",
    description: "iPhone reconditionné testé et garanti 12 mois.",
    year: 2022,
    colors: ["Noir", "Argent", "Violet"],
  },
  {
    id: 2,
    type: "smartphone",
    brand: "Samsung",
    model: "Galaxy S23",
    name: "Samsung Galaxy S23",
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
    price: 1099,
    storage: "512 Go",
    ram: "8 Go",
    condition: "Très bon état",
    description: "Tablette professionnelle Apple.",
    year: 2022,
    colors: ["Gris sidéral"],
  },
  {
    id: 4,
    type: "ordinateur",
    brand: "Apple",
    model: "MacBook Pro M2",
    name: "MacBook Pro M2",
    price: 1999,
    storage: "512 Go",
    ram: "16 Go",
    condition: "Excellent état",
    description: "Ordinateur puissant pour pro.",
    year: 2023,
    colors: ["Gris"],
  },
  {
    id: 5,
    type: "console",
    brand: "Sony",
    model: "PlayStation 5",
    name: "PS5 Standard",
    price: 499,
    storage: "825 Go",
    ram: "16 Go",
    condition: "Très bon état",
    description: "Console de jeu nouvelle génération.",
    year: 2022,
    colors: ["Blanc"],
  },
];
