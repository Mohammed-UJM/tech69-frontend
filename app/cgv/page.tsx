export default function CGVPage() {
  return (
    <main className="bg-gray-50 min-h-screen text-black">
      {/* HERO */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            📜 Conditions Générales de Vente
          </h1>

          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Les présentes conditions définissent les règles applicables à nos
            services de réparation et de vente d’appareils électroniques.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        {/* Objet */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-3">🧾 1. Objet</h2>
          <p className="text-gray-700 leading-7">
            Les présentes CGV régissent les prestations de réparation,
            diagnostic et vente proposées par Tech69 auprès de ses clients.
          </p>
        </div>

        {/* Services */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-3">
            🔧 2. Services proposés
          </h2>
          <p className="text-gray-700 leading-7">
            Tech69 propose des services de réparation pour smartphones,
            tablettes, ordinateurs et accessoires électroniques. Un diagnostic
            peut être réalisé avant intervention.
          </p>
        </div>

        {/* Prix */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-3">💰 3. Prix</h2>
          <p className="text-gray-700 leading-7">
            Les prix sont indiqués en euros TTC. Ils peuvent varier selon le
            type de panne et les pièces nécessaires. Un devis est présenté avant
            toute intervention.
          </p>
        </div>

        {/* Commande */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-3">
            📦 4. Commande et validation
          </h2>
          <p className="text-gray-700 leading-7">
            Toute réparation ou achat implique l’acceptation du devis par le
            client. Aucune intervention n’est réalisée sans accord préalable.
          </p>
        </div>

        {/* Délais */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-3">
            ⏱️ 5. Délais de réparation
          </h2>
          <p className="text-gray-700 leading-7">
            Les délais varient selon la disponibilité des pièces et la
            complexité de la panne. En général, les réparations sont effectuées
            sous 24 à 72 heures.
          </p>
        </div>

        {/* Garantie */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-3">🛡️ 6. Garantie</h2>
          <p className="text-gray-700 leading-7">
            Les réparations bénéficient d’une garantie de 3 à 12 mois selon
            l’intervention. Cette garantie couvre les pièces remplacées et la
            main-d’œuvre.
          </p>
        </div>

        {/* Responsabilité */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-3">⚖️ 7. Responsabilité</h2>
          <p className="text-gray-700 leading-7">
            Tech69 ne saurait être tenu responsable des pertes de données. Le
            client est invité à effectuer une sauvegarde avant toute réparation.
          </p>
        </div>

        {/* Paiement */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-3">💳 8. Paiement</h2>
          <p className="text-gray-700 leading-7">
            Le paiement s’effectue après prestation ou selon les modalités
            définies dans le devis. Aucun appareil n’est restitué sans règlement
            complet.
          </p>
        </div>

        {/* Litiges */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-3">⚖️ 9. Litiges</h2>
          <p className="text-gray-700 leading-7">
            En cas de litige, une solution amiable sera privilégiée. À défaut,
            les tribunaux compétents seront ceux du siège de l’entreprise.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 pt-10">
          Dernière mise à jour : Juin 2026
        </div>
      </section>
    </main>
  );
}
