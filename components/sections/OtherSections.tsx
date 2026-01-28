"use client";

import Image from "next/image";

export default function HomeSections() {
  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Services proposés */}
        <h2 className="text-3xl font-bold text-secondary mb-12">
          Nos services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
            <Image
              src="/icons/repair.png"
              alt="Réparation"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="font-bold text-xl text-black mb-2">
              Réparation express
            </h3>
            <p className="text-gray-600">
              Smartphones, tablettes et ordinateurs, réparés rapidement par nos
              experts.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
            <Image
              src="/icons/quality.png"
              alt="Produits garantis"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="font-bold text-xl text-black mb-2">
              Produits garantis
            </h3>
            <p className="text-gray-600">
              Tous nos appareils sont testés et garantis avant la vente.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
            <Image
              src="/icons/support.png"
              alt="Support client"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="font-bold text-xl text-black mb-2">
              Support client
            </h3>
            <p className="text-gray-600">
              Conseils et assistance pour choisir et entretenir vos appareils.
            </p>
          </div>
        </div>

        {/* Pourquoi nous choisir */}
        <h2 className="text-3xl font-bold text-secondary mt-20 mb-12">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
            <p className="text-gray-600">Appareils réparés avec succès</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-primary mb-2">10 ans</h3>
            <p className="text-gray-600">D’expérience en réparation</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-primary mb-2">99%</h3>
            <p className="text-gray-600">Clients satisfaits</p>
          </div>
        </div>

        {/* Avis clients */}
        <h2 className="text-3xl font-bold text-secondary mt-20 mb-12">
          Avis de nos clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
            <p className="text-gray-600 italic">{`"Réparation rapide et efficace, je recommande !"`}</p>
            <p className="font-semibold text-secondary mt-4">– Mohamed L.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
            <p className="text-gray-600 italic">{`"Excellente expérience, produit remis comme neuf."`}</p>
            <p className="font-semibold text-secondary mt-4">– Sarah T.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
            <p className="text-gray-600 italic">{`"Professionnels, rapide et très sympa !"`}</p>
            <p className="font-semibold text-secondary mt-4">– Karim B.</p>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-20 flex justify-center py-2">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="
    bg-primary
    hover:bg-primary/90
    text-white
    font-semibold
    py-2
    px-10
    text-lg
    rounded
    transition
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
          >
            Réparer mon appareil
          </button>
        </div>
      </div>
      <div className="h-20" />
      <div className="w-full bg-primary mx-auto px-4 py-10 text-center text-white">
        {/* Icône */}
        <div className="mb-6">
          <Image
            src="/icons/user.png"
            alt="Utilisateur"
            width={60}
            height={60}
            className="mx-auto"
          />
        </div>

        {/* Titre */}
        <h2 className="text-3xl font-bold mb-4">Créez votre compte client</h2>

        {/* Phrase explicative */}
        <p className="mb-8">
          Inscrivez-vous en quelques clics pour simplifier le suivi de vos
          réparations et gagner du temps à chaque visite.
        </p>

        {/* Bouton */}
        <button
          className="
            bg-white
            text-primary
            font-semibold
            px-10
            py-2
            rounded
            text-lg
            transition
            transform
            hover:scale-105
            hover:bg-gray-100
          "
        >
          Activer mon compte
        </button>
      </div>
    </section>
  );
}
