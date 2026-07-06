export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-gray-50 min-h-screen text-black">
      {/* HERO */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            🔒 Politique de confidentialité
          </h1>

          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Cette politique explique de manière transparente comment le site
            tech69.fr traite (ou ne traite pas) vos données personnelles,
            conformément au Règlement Général sur la Protection des Données
            (RGPD).
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        {/* 1 */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <div className="text-4xl mb-4">🚫</div>

          <h2 className="text-2xl font-semibold mb-4">
            1. Absence de collecte de données personnelles
          </h2>

          <div className="space-y-4 text-gray-700 leading-8">
            <p>
              Le site <strong>tech69.fr</strong> est conçu dans le respect total
              de votre vie privée.
            </p>

            <p>
              Le simulateur de prix fonctionne exclusivement dans votre
              navigateur.{" "}
              <strong>
                {" "}
                Les informations saisies (marque, modèle, type de panne, etc.)
                ne sont ni envoyées vers un serveur, ni enregistrées, ni
                stockées dans une base de données
              </strong>
              .
            </p>

            <p>L’utilisation du site est entièrement anonyme.</p>

            <p>
              Aucun compte utilisateur ni formulaire d’inscription n’est proposé
              sur le site.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <div className="text-4xl mb-4">📞</div>

          <h2 className="text-2xl font-semibold mb-4">
            2. Prise de contact volontaire
          </h2>

          <div className="space-y-4 text-gray-700 leading-8">
            <p>
              Si vous choisissez de contacter volontairement Tech69.fr (par
              e-mail ou par téléphone), les informations que vous communiquez
              sont utilisées uniquement pour répondre à votre demande.
            </p>

            <p>
              Ces données ne sont ni revendues, ni transmises à des tiers, et
              sont utilisées exclusivement dans le cadre de l’activité de
              l’atelier Tech69.
            </p>

            <p>📧 contact@tech69.fr</p>
          </div>
        </div>

        {/* 3 */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <div className="text-4xl mb-4">⚖️</div>

          <h2 className="text-2xl font-semibold mb-4">3. Vos droits</h2>

          <div className="space-y-4 text-gray-700 leading-8">
            <p>
              Conformément au RGPD, vous disposez de droits relatifs à vos
              données personnelles (accès, suppression, rectification).
            </p>

            <p>
              Cependant, le site tech69.fr ne conservant aucune donnée
              personnelle, aucun fichier ou base de données nominative n’existe.
            </p>

            <p>
              Pour toute question relative à la protection des données, vous
              pouvez nous contacter à :
              <br />
              <strong>contact@tech69.fr</strong>
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-500 pt-10">
          Dernière mise à jour : Juillet 2026
        </div>
      </section>
    </main>
  );
}
