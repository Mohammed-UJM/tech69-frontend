"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { products } from "@/app/data/products_data";
import { getProductImages } from "@/utils/productImages";
import SelectCustom from "@/components/SelectCustom";

export default function ProductsPage() {
  const ITEMS_PER_PAGE = 16;

  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  /* ================= OPTIONS ================= */

  const types = [...new Set(products.map((p) => p.type))];

  const brands = type
    ? [...new Set(products.filter((p) => p.type === type).map((p) => p.brand))]
    : [...new Set(products.map((p) => p.brand))];

  const models = brand
    ? [
        ...new Set(
          products.filter((p) => p.brand === brand).map((p) => p.model),
        ),
      ]
    : [];

  /* ================= FILTER ================= */

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (type && p.type !== type) return false;
      if (brand && p.brand !== brand) return false;
      if (model && p.model !== model) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
        return false;

      return true;
    });
  }, [type, brand, model, search]);

  /* ================= RESET ================= */

  const resetFilters = () => {
    setType("");
    setBrand("");
    setModel("");
    setSearch("");
    setPage(1);
  };

  /* ================= PAGINATION ================= */

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    return filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  }, [filtered, page]);

  const changePage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="bg-gray-900 text-white py-14 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold my-5">Nos produits</h1>

        <p className="opacity-90 mt-2 text-sm md:text-base my-5">
          Smartphones, tablettes, ordinateurs et consoles testés et garantis
        </p>
      </section>

      {/* ================= FILTERS ================= */}
      <div className="bg-white shadow-lg rounded p-4 max-w-7xl mx-auto -mt-10 relative z-10 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          {/* SEARCH */}
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Rechercher un produit..."
            className="text-black placeholder-gray-400 w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
          />

          {/* TYPE */}
          <SelectCustom
            value={type}
            onChange={(v) => {
              setType(v);
              setBrand("");
              setModel("");
              setPage(1);
            }}
            options={types}
            placeholder="Type"
            searchable
          />

          {/* BRAND */}
          <SelectCustom
            value={brand}
            onChange={(v) => {
              setBrand(v);
              setModel("");
              setPage(1);
            }}
            options={brands}
            placeholder="Marque"
            disabled={!type}
            searchable
          />

          {/* MODEL */}
          <SelectCustom
            value={model}
            onChange={(v) => {
              setModel(v);
              setPage(1);
            }}
            options={models}
            placeholder="Modèle"
            disabled={!brand}
            searchable
          />

          {/* RESET */}
          <button
            onClick={resetFilters}
            className="
            bg-primary
            hover:bg-primary/90
            text-white
            font-semibold
            py-2
            text-lg
            rounded
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
          >
            Réinitialiser
          </button>
        </div>
      </div>

      {/* ================= RESULTS ================= */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* COUNT */}
        <p className="text-gray-600 mb-6">
          {filtered.length} produit(s) trouvé(s)
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => {
            const image = getProductImages(product.id, 1)[0];

            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="
                  bg-[#fbf6f1]
                  border
                  border-gray-200
                  rounded-xl
                  shadow
                  p-4
                  text-center
                  hover:shadow-md
                  transition
                "
              >
                <Image
                  src={image}
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

                <p className="text-sm text-gray-600">{product.storage}</p>
                <p className="text-sm text-gray-600">RAM : {product.ram}</p>
                <p className="text-sm text-gray-600">{product.condition}</p>
              </Link>
            );
          })}
        </div>

        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
            {/* PREV */}
            <button
              disabled={page === 1}
              onClick={() => changePage(page - 1)}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              ←
            </button>

            {/* NUMBERS */}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => changePage(i + 1)}
                className={`px-3 py-2 border rounded ${
                  page === i + 1 ? "bg-primary text-white" : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* NEXT */}
            <button
              disabled={page === totalPages}
              onClick={() => changePage(page + 1)}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              →
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
