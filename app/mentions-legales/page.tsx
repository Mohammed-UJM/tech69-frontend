export default function MentionsLegalesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">⚖️ Mentions légales</h1>

          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Conformément aux dispositions de l'article 6 de la Loi n° 2004-575
            du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN),
            il est précisé aux utilisateurs du site tech69.fr l'identité des
            différents intervenants dans le cadre de sa réalisation et de son
            suivi.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Présentation */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-4xl mb-4">🏢</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              1. Présentation de l'entreprise
            </h2>

            <div className="space-y-3 text-gray-700 leading-7">
              <p>
                <strong>Nom commercial :</strong> tech69.fr
              </p>

              <p>
                <strong>Forme juridique :</strong> SARL
              </p>

              <p>
                <strong>Adresse :</strong> 7 Grande Rue de Vaise 69009 Lyon
                France
              </p>

              <p>
                <strong>Numéro de SIRET :</strong> 912 442 316 00010
              </p>

              <p>
                <strong>Numéro de RCS :</strong> RCS Lyon 912 442 316
              </p>

              <p>
                <strong>Numéro de TVA Intracommunautaire :</strong>{" "}
                FR55912442316
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-4xl mb-4">📞</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              2. Contact
            </h2>

            <div className="space-y-3 text-gray-700 leading-7">
              <p>
                <strong>Téléphone de la boutique :</strong> 07 83 96 32 79
              </p>

              <p>
                <strong>Adresse e-mail :</strong> contact@tech69.fr
              </p>
            </div>
          </div>

          {/* Responsable */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-4xl mb-4">📝</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              3. Responsable de la publication
            </h2>

            <div className="text-gray-700 leading-7">
              <p>
                <strong>Directeur de la publication :</strong> MELIANI Ala
              </p>
            </div>
          </div>

          {/* Hébergement */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="text-4xl mb-4">🌐</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              4. Hébergement du site
            </h2>

            <div className="space-y-3 text-gray-700 leading-7">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>

              <p>
                <strong>Adresse :</strong> 440 N Barranca Ave #4133
                <br />
                Covina, CA 91723
                <br />
                États-Unis
              </p>

              <p>
                <strong>Site internet :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://vercel.com
                </a>
              </p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="bg-white rounded-xl shadow-sm border p-8 md:col-span-2">
            <div className="text-4xl mb-4 text-black">©</div>

            <h2 className="text-2xl font-semibold mb-4 text-black">
              5. Propriété intellectuelle
            </h2>

            <div className="space-y-5 text-gray-700 leading-8">
              <p>
                Le site <strong>tech69.fr</strong> ainsi que chacun des éléments
                qui le composent (logos, textes, images, illustrations, design,
                structure et éléments graphiques) sont la propriété exclusive de{" "}
                <strong> tech69.fr</strong>, sauf mention contraire.
              </p>

              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation ou exploitation, totale ou partielle, de tout ou
                partie du site, quel que soit le procédé utilisé, est interdite
                sans l'autorisation écrite préalable de tech69.fr.
              </p>

              <p>
                Les marques citées sur ce site (Apple, iPhone, Samsung, Galaxy,
                Xiaomi, Huawei, Sony, etc.) demeurent la propriété exclusive de
                leurs détenteurs respectifs.
              </p>

              <p>
                tech69.fr exerce son activité en tant que centre de réparation
                indépendant et n'est ni affilié, ni agréé, ni partenaire
                officiel des fabricants ou des marques mentionnés sur le site.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">Dernière mise à jour : Juillet 2026</p>
        </div>
      </section>
    </main>
  );
}
