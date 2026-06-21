export default function GarantiePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Garantie & Sérénité</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Toutes nos réparations et produits sont couverts par une garantie
          claire, transparente et sans surprise.
        </p>
      </section>

      {/* Contenu */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Garantie réparation */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            🔧 Garantie des réparations
          </h2>
          <p className="text-gray-600 leading-7">
            Toutes nos réparations bénéficient d’une garantie couvrant les
            pièces remplacées et la main-d’œuvre. La durée varie selon le type
            d’intervention (écran, batterie, composants internes…).
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Garantie sur pièces et main-d’œuvre</li>
            <li>Prise en charge en cas de défaut technique</li>
            <li>Diagnostic rapide en cas de problème</li>
          </ul>
        </div>

        {/* Garantie produits */}
        <div>
          <h2 className="text-2xl font-bold mb-4">📦 Garantie des produits</h2>
          <p className="text-gray-600 leading-7">
            Les appareils et accessoires vendus sont couverts par une garantie
            constructeur ou vendeur selon les produits.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Produits testés avant mise en vente</li>
            <li>Garantie contre les défauts de fabrication</li>
            <li>Échange ou réparation selon le cas</li>
          </ul>
        </div>

        {/* Exclusions */}
        <div>
          <h2 className="text-2xl font-bold mb-4">⚠️ Cas non couverts</h2>
          <p className="text-gray-600 leading-7">
            Certaines situations ne sont pas couvertes par la garantie.
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
            <li>Choc, chute ou casse accidentelle</li>
            <li>Dégâts liés à l’eau ou l’humidité</li>
            <li>Mauvaise utilisation ou modification de l’appareil</li>
          </ul>
        </div>

        {/* Engagement */}
        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">🤝 Notre engagement</h2>
          <p className="text-gray-700 leading-7">
            Nous privilégions la transparence et la satisfaction client. Chaque
            intervention est réalisée avec soin et chaque cas est étudié
            individuellement pour proposer la meilleure solution possible.
          </p>
        </div>
      </section>
    </main>
  );
}
