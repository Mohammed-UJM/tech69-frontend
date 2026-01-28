"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  storage: string;
  ram: string;
  condition: string;
};

export default function ReconditionedSection() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 899,
      image: "/iphone.jpg",
      storage: "256 Go",
      ram: "6 Go",
      condition: "Très bon état",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 749,
      image: "/samsung.jpg",
      storage: "256 Go",
      ram: "8 Go",
      condition: "Excellent état",
    },
    {
      id: 3,
      name: "iPhone 13",
      price: 699,
      image: "/iphone.jpg",
      storage: "128 Go",
      ram: "4 Go",
      condition: "Très bon état",
    },
    {
      id: 4,
      name: "Samsung Galaxy S22",
      price: 599,
      image: "/samsung.jpg",
      storage: "128 Go",
      ram: "8 Go",
      condition: "Bon état",
    },
    {
      id: 5,
      name: "iPhone 12",
      price: 499,
      image: "/iphone.jpg",
      storage: "128 Go",
      ram: "4 Go",
      condition: "Très bon état",
    },
  ]);

  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 320;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Formulaire test
  const [form, setForm] = useState({
    name: "",
    price: "",
    storage: "",
    ram: "",
    condition: "",
  });

  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: form.name,
        price: Number(form.price),
        image: "/phones/default.png",
        storage: form.storage,
        ram: form.ram,
        condition: form.condition,
      },
    ]);

    setForm({
      name: "",
      price: "",
      storage: "",
      ram: "",
      condition: "",
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Nos produits en magasin
        </h2>

        <p className="text-gray-600 mb-10 max-w-3xl">
          Tous nos produits sont testés, nettoyés et sélectionnés avec soin par
          nos techniciens.
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Flèche gauche */}
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 -translate-y-1/2 -ml-3 md:-ml-5 z-20 bg-white text-black shadow rounded-full p-3"
          >
            ←
          </button>

          {/* Liste */}
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-hidden scroll-smooth px-12"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[280px] bg-[#fbf6f1] border border-gray-200 rounded-xl shadow p-4 text-center "
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="h-40 mx-auto mb-4 object-contain"
                />

                <h3 className="font-semibold text-black text-lg">
                  {product.name}
                </h3>

                <p className="text-primary font-bold text-2xl">
                  {product.price.toFixed(2)} €
                </p>

                <p className="text-sm text-gray-600">
                  Stockage : {product.storage}
                </p>
                <p className="text-sm text-gray-600">RAM : {product.ram}</p>
                <p className="text-sm text-gray-600">{product.condition}</p>
              </div>
            ))}
          </div>

          {/* Flèche droite */}
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 -translate-y-1/2 -mr-3 md:-mr-5 z-20 bg-white text-black shadow rounded-full p-3 right-0"
          >
            →
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            className="
            bg-primary
            hover:bg-primary/90
            text-white
            font-semibold
            py-2
            text-lg
            px-10
            rounded
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
            href="/produits"
          >
            Voir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
