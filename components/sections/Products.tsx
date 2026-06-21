"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { products } from "@/app/data/products_data";
import { getProductImages } from "@/utils/productImages";

export default function ReconditionedSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 320;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* TITRE */}
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Nos produits en magasin
        </h2>

        <p className="text-gray-600 mb-10 max-w-3xl">
          Tous nos produits sont testés, nettoyés et sélectionnés avec soin par
          nos techniciens.
        </p>

        {/* CAROUSEL */}
        <div className="relative">
          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 -translate-y-1/2 -ml-3 md:-ml-5 z-20 bg-white text-black shadow rounded-full p-3"
          >
            ←
          </button>

          {/* LIST */}
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-hidden scroll-smooth px-12"
          >
            {products.map((product) => {
              const images = getProductImages(product.id, 1);

              return (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="min-w-[280px] bg-[#fbf6f1] border border-gray-200 rounded-xl shadow p-4 text-center hover:shadow-md transition"
                >
                  {/* IMAGE PRINCIPALE AUTO */}
                  <Image
                    src={images[0]}
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
                </Link>
              );
            })}
          </div>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 -translate-y-1/2 -mr-3 md:-mr-5 z-20 bg-white text-black shadow rounded-full p-3 right-0"
          >
            →
          </button>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
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
            "
          >
            Voir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
