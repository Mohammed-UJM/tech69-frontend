export default function Support() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Assistance</h1>

      <p className="text-gray-600 mb-10">
        Notre équipe est disponible pour vous accompagner avant, pendant et
        après votre réparation.
      </p>

      <div className="grid gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="font-semibold text-lg">📧 Support email</h2>
          <p className="text-gray-600">support@tech69.fr</p>
          <p className="text-sm text-gray-500">Réponse sous 24h</p>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="font-semibold text-lg">📱 Téléphone</h2>
          <p className="text-gray-600">Disponible du lundi au samedi</p>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="font-semibold text-lg">📍 Support en boutique</h2>
          <p className="text-gray-600">
            Accueil et diagnostic sur place sans rendez-vous
          </p>
        </div>
      </div>
    </main>
  );
}
