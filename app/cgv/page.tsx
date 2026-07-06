export default function CGVPage() {
  return (
    <main className="bg-gray-50 min-h-screen text-black">
      {/* HERO */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            📜 Conditions Générales de Vente et d'Utilisation (CGV / CGU)
          </h1>

          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Les présentes conditions régissent l'utilisation du site internet
            tech69.fr ainsi que les prestations de réparation proposées par
            l'atelier Tech69 situé au 7 Grande Rue de Vaise, 69009 Lyon.
          </p>
        </div>
      </section>

      {/* CONTENT - SINGLE COLUMN */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        {/* 1 */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <div className="text-4xl mb-4">📝</div>

          <h2 className="text-2xl font-semibold mb-4">1. Objet du site</h2>

          <p className="text-gray-700 leading-8">
            Tech69.fr met à disposition un site vitrine permettant aux
            utilisateurs d'estimer gratuitement le coût indicatif d'une
            réparation grâce à un simulateur en ligne, sans conservation des
            données saisies.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <div className="text-4xl mb-4">💶</div>

          <h2 className="text-2xl font-semibold mb-4">
            2. Nature des estimations en ligne
          </h2>

          <div className="space-y-4 text-gray-700 leading-8">
            <p>
              Les tarifs affichés par le simulateur sont donnés à titre purement{" "}
              <strong>indicatif</strong>. Ils ne constituent ni un devis
              définitif ni un engagement contractuel.
            </p>

            <p>
              Le prix final de la réparation est déterminé{" "}
              <strong>uniquement en boutique</strong> au 7 Grande Rue de Vaise,
              69009 Lyon, après un diagnostic physique gratuit de l'appareil
              réalisé par notre technicien.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <div className="text-4xl mb-4">💾</div>

          <h2 className="text-2xl font-semibold mb-4">
            3. Sauvegarde des données (Responsabilité du client)
          </h2>

          <div className="space-y-4 text-gray-700 leading-8">
            <p className="font-semibold text-red-600">Important</p>

            <p>
              Lors du dépôt de votre appareil dans notre atelier à Lyon,
              Tech69.fr ne pourra en aucun cas être tenu responsable de la perte
              de vos données (photos, contacts, applications, fichiers, etc.).
            </p>

            <p>
              Il est de la responsabilité exclusive du client d'effectuer une
              sauvegarde complète de ses données avant de confier l'appareil
              pour toute intervention.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <div className="text-4xl mb-4">🛡️</div>

          <h2 className="text-2xl font-semibold mb-4">
            4. Garantie des réparations
          </h2>

          <div className="space-y-4 text-gray-700 leading-8">
            <p>
              Les réparations effectuées par Tech69.fr (hors appareils ayant
              subi une oxydation ou manipulés par un tiers), bénéficient d'une
              garantie de <strong>3 mois</strong> à compter de la restitution de
              l'appareil.
            </p>

            <p>
              Cette garantie couvre uniquement la pièce remplacée ainsi que la
              main-d'œuvre.
            </p>

            <p>
              Sont exclus : oxydation, intervention d’un tiers, casse
              accidentelle, chute ou usure normale.
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <div className="text-4xl mb-4">⚖️</div>

          <h2 className="text-2xl font-semibold mb-4">
            5. Droit applicable et litiges
          </h2>

          <p className="text-gray-700 leading-8">
            Les présentes conditions sont soumises au droit français. En cas de
            litige, les tribunaux compétents seront ceux de la ville de Lyon.
          </p>
        </div>

        {/* 6 */}
        <div className="bg-white border rounded-xl shadow-sm p-8">
          <div className="text-4xl mb-4">📱</div>

          <h2 className="text-2xl font-semibold mb-4">
            6. Vente d'appareils en boutique
          </h2>

          <div className="space-y-4 text-gray-700 leading-8">
            <p>
              Les appareils présentés sur le site tech69.fr (neufs, d'occasion
              ou reconditionnés) sont proposés uniquement à la vente en boutique
              au 7 Grande Rue de Vaise, 69009 Lyon.
            </p>

            <p>
              Aucune vente en ligne ni expédition n’est réalisée via le site
              internet.
            </p>

            <p>
              Les stocks étant limités, il est conseillé de contacter la
              boutique avant déplacement pour vérifier la disponibilité.
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
