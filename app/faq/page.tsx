"use client";

import { useGoToSection } from "@/utils/useGoToSection";

export default function FAQPage() {
  const goToSection = useGoToSection();

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">❓ FAQ</h1>

          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Toutes les réponses essentielles concernant nos réparations, délais,
            garanties et fonctionnement.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-6 text-black">
        {/* ITEM */}
        <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">
            ⏱️ Combien de temps dure une réparation ?
          </h2>
          <p className="text-gray-700 leading-7">
            La plupart des réparations sont effectuées sous 24 à 72 heures selon
            la disponibilité des pièces et la complexité de la panne.
          </p>
        </div>

        <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">
            💰 Les devis sont-ils gratuits ?
          </h2>
          <p className="text-gray-700 leading-7">
            Oui, le diagnostic et le devis sont totalement gratuits et sans
            engagement.
          </p>
        </div>

        <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">
            🔐 Mes données sont-elles sécurisées ?
          </h2>
          <p className="text-gray-700 leading-7">
            Nous ne conservons aucune donnée personnelle sans votre
            consentement. Il est cependant recommandé de sauvegarder vos données
            avant intervention.
          </p>
        </div>

        <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">
            🛡️ Les réparations sont-elles garanties ?
          </h2>
          <p className="text-gray-700 leading-7">
            Oui, toutes nos réparations sont garanties entre 3 et 12 mois selon
            le type d’intervention et les pièces remplacées.
          </p>
        </div>

        <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">
            📱 Quels appareils réparez-vous ?
          </h2>
          <p className="text-gray-700 leading-7">
            Smartphones, tablettes, ordinateurs portables et certains
            accessoires électroniques après diagnostic.
          </p>
        </div>

        <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">
            📦 Puis-je suivre ma réparation ?
          </h2>
          <p className="text-gray-700 leading-7">
            Oui, vous pouvez suivre l’état de votre réparation via votre espace
            client ou en nous contactant directement.
          </p>
        </div>

        <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">
            📍 Faut-il prendre rendez-vous ?
          </h2>
          <p className="text-gray-700 leading-7">
            Ce n’est pas obligatoire, mais fortement recommandé pour garantir
            une prise en charge rapide de votre appareil.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-10">
          <p className="text-gray-600 mb-4">
            ❓ Vous ne trouvez pas votre réponse ?
          </p>

          <button
            onClick={() => goToSection("contact")}
            className="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary/90 transition"
          >
            📞 Nous contacter
          </button>
        </div>
      </section>
    </main>
  );
}
