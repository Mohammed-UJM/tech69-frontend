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

export const smartphones: Product[] = [
  {
    id: 1,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone SE",
    name: "Iphone SE 2e gen 64Go en excellent état",
    price: 129,
    storage: "64 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 2,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 11",
    name: "Iphone 11 64Go en excellent état",
    price: 159,
    storage: "64 Go",
    // ram: "8 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
    // year: 2023,
    // colors: ["Noir", "Vert"],
  },
  {
    id: 3,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 12",
    name: "Iphone 12 64Go en excellent état",
    price: 189,
    storage: "64 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 4,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 12 Mini",
    name: "Iphone 12 Mini en excellent état",
    price: 179,
    storage: "64 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 5,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 12 Pro",
    name: "Iphone 12 Pro 128Go en excellent état",
    price: 249,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 6,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 12 Pro Max",
    name: "Iphone 12 Pro Max 128Go en excellent état",
    price: 269,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 7,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 13",
    name: "Iphone 13 128Go en excellent état",
    price: 279,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 8,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 13 Mini",
    name: "Iphone 13 Mini 128Go en excellent état",
    price: 249,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 9,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 13 Pro",
    name: "Iphone 13 Pro 128Go en excellent état",
    price: 319,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 10,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 13 Pro Max",
    name: "Iphone 13 Pro Max 128Go en excellent état",
    price: 389,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 11,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 14",
    name: "Iphone 14 128Go en excellent état",
    price: 319,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 12,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 14 Pro",
    name: "Iphone 14 Pro 128Go en excellent état",
    price: 449,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 13,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 14 Pro Max",
    name: "Iphone 14 Pro Max 128Go en excellent état",
    price: 539,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 14,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 14 Plus",
    name: "Iphone 14 Plus 128Go en excellent état",
    price: 379,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 15,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 15",
    name: "Iphone 15 128Go en excellent état",
    price: 399,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 16,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 15 Pro",
    name: "Iphone 15 Pro 128Go en excellent état",
    price: 559,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 17,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 15 Pro Max",
    name: "Iphone 15 Pro Max 256Go en excellent état",
    price: 679,
    storage: "256 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 18,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 16e",
    name: "Iphone 16e 128Go en excellent état",
    price: 569,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 19,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 16",
    name: "Iphone 16 128Go en excellent état",
    price: 699,
    storage: "128 Go",
    condition: "Excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 20,
    type: "smartphone",
    brand: "Apple",
    model: "Iphone 17e",
    name: "Iphone 17e 256Go NEUF",
    price: 749,
    storage: "256 Go",
    condition: "NEUF",
    description: "Sous blister",
  },
];

export const tablettes: Product[] = [
  {
    id: 21,
    type: "tablette",
    brand: "Samsung",
    model: "Galaxy Tab S11 Ultra",
    name: 'Samsung Galaxy Tab S11 Ultra 14.6" 2025 512 Go Gris (Grade A) (Wifi)',
    remark: 'Samsung Galaxy Tab S11 Ultra 512Go Gris Wifi – 14.6" – Grade A',
    price: 899,
    storage: "512 Go",
    condition: "Grade A, excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 22,
    type: "tablette",
    brand: "Samsung",
    model: "Galaxy Tab S10 Ultra",
    name: "Samsung Galaxy Tab S10 Ultra 256 Go Gris (WiFi) (Grade A)",
    remark: "Samsung Galaxy Tab S10 Ultra 256 Go Gris (WiFi) (Grade A)",
    price: 749,
    storage: "256 Go",
    condition: "Grade A, excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
  {
    id: 23,
    type: "tablette",
    brand: "Samsung",
    model: "Samsung Galaxy Tab S11",
    name: 'Samsung Galaxy Tab S11 11" 2025 256 Go Argent (Grade A) (Wifi)',
    remark: 'Samsung Galaxy Tab S11 11" 2025 256 Go Argent (Grade A) (Wifi)',
    price: 719,
    storage: "256 Go",
    condition: "Grade A, excellent état",
    description:
      "100% fonctionnel (micro, haut-parleurs, Touch ID, appareil photo, réseau... tout fonctionne parfaitement)",
  },
];

export const ordinateurs: Product[] = [
  // tous les ordinateurs
];

export const consoles: Product[] = [
  // toutes les consoles
];

export const products: Product[] = [
  ...smartphones,
  ...tablettes,
  ...ordinateurs,
  ...consoles,
];
