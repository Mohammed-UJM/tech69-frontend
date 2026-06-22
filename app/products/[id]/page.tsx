"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import { products } from "@/app/data/products_data";
import { getProductImages } from "@/utils/productImages";
import { useGoToSection } from "@/utils/useGoToSection";

export default function ProductDetailsPage() {
  const goToSection = useGoToSection();
  const router = useRouter();
  const params = useParams();

  const id = Number(params.id);

  const product = useMemo(() => {
    return products.find((p) => p.id === id);
  }, [id]);

  const images = useMemo(() => {
    if (!product) return [];
    return getProductImages(product.id, 6);
  }, [product]);

  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">Produit introuvable</h1>
        <button
          onClick={() => router.push("/produits")}
          className="mt-4 text-primary font-semibold"
        >
          Retour aux produits
        </button>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold my-5">{product.name}</h1>
        <p className="opacity-90 my-5">
          Produit reconditionné garanti et testé
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* IMAGE GALLERY */}
        <div>
          {/* MAIN IMAGE */}
          <div className="bg-white rounded-xl shadow p-4">
            <Image
              src={images[activeImage] || images[0]}
              alt={product.name}
              width={500}
              height={500}
              className="mx-auto object-cover rounded-lg"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {images.map((img, index) => (
              <button
                key={img}
                onClick={() => setActiveImage(index)}
                className={`border rounded-lg mx-1 bg-white ${
                  activeImage === index ? "border-primary" : "border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  width={70}
                  height={70}
                  className="mx-auto object-cover rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-black">{product.name}</h2>

            <p className="text-3xl font-bold text-primary mt-2">
              {product.price.toFixed(2)} €
            </p>

            <p className="text-gray-600 mt-3">{product.description}</p>
          </div>

          {/* SPECS */}
          <div className="bg-white p-6 rounded-xl shadow space-y-3 text-gray-700">
            <h3 className="font-semibold text-lg text-black">
              Caractéristiques
            </h3>

            <p>📱 Type : {product.type}</p>
            <p>🏷️ Marque : {product.brand}</p>
            <p>📦 Modèle : {product.model}</p>
            <p>💾 Stockage : {product.storage}</p>
            <p>⚡ RAM : {product.ram}</p>
            <p>📅 Année : {product.year}</p>
            <p>🎨 Couleurs : {product.colors?.join(", ")}</p>
            <p>🧾 État : {product.condition}</p>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <button
              onClick={() => router.back()}
              className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary/90 transition"
            >
              Retour
            </button>

            <button
              onClick={() => goToSection("contact")}
              className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary/90 transition"
            >
              Interessé ? Contacter nous !
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
