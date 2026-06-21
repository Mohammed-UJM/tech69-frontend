export default function MentionsLegalesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">⚖️ Mentions légales</h1>

          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Informations légales relatives à l’éditeur du site, l’hébergement et
            l’utilisation de la plateforme Tech69.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Éditeur */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-4xl mb-4">🏢</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              Éditeur du site
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Nom :</strong> Tech69
              </p>
              <p>
                <strong>Statut :</strong> À compléter
              </p>
              <p>
                <strong>SIRET :</strong> À compléter
              </p>
              <p>
                <strong>Adresse :</strong> À compléter
              </p>
              <p>
                <strong>Email :</strong> contact@tech69.fr
              </p>
              <p>
                <strong>Responsable :</strong> À compléter
              </p>
            </div>
          </div>

          {/* Hébergement */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-4xl mb-4">🌐</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              Hébergement
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>440 N Barranca Ave #4133</p>
              <p>Covina, CA 91723</p>
              <p>États-Unis</p>
              <p className="text-primary">https://vercel.com</p>
            </div>
          </div>

          {/* Activité */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-4xl mb-4">🔧</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">Activité</h2>

            <p className="text-gray-700 leading-7">
              Tech69 propose des services de réparation, diagnostic et vente
              d’appareils électroniques : smartphones, tablettes, ordinateurs
              portables et accessoires.
            </p>
          </div>

          {/* Données personnelles */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-4xl mb-4">🔒</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              Données personnelles
            </h2>

            <p className="text-gray-700 leading-7">
              Les données collectées sont utilisées uniquement dans le cadre des
              services Tech69. Aucune information personnelle n’est vendue ou
              transmise à des tiers sans consentement.
            </p>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-4xl mb-4">🍪</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">Cookies</h2>

            <p className="text-gray-700 leading-7">
              Ce site utilise des cookies techniques afin d’améliorer
              l’expérience utilisateur et le fonctionnement du site. Vous pouvez
              les désactiver dans votre navigateur.
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-4xl mb-4">©</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              Propriété intellectuelle
            </h2>

            <p className="text-gray-700 leading-7">
              Tous les contenus présents sur le site (textes, images, logo,
              design, éléments graphiques) sont protégés par le droit d’auteur.
              Toute reproduction est interdite sans autorisation.
            </p>
          </div>

          {/* Responsabilité */}
          <div className="bg-white rounded-xl shadow-sm border p-8 md:col-span-2">
            <div className="text-4xl mb-4">⚖️</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              Limitation de responsabilité
            </h2>

            <p className="text-gray-700 leading-7">
              Tech69 s’efforce de fournir des informations fiables et à jour.
              Toutefois, des erreurs ou omissions peuvent exister. Le site peut
              être modifié à tout moment sans préavis.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">Dernière mise à jour : Juin 2026</p>
        </div>
      </section>
    </main>
  );
}
