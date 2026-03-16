"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-gray-50 py-5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-12">
          Nous contacter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Infos */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-8">
            <h3 className="text-xl font-bold text-secondary mb-4">
              Tech69 – Boutique à Lyon
            </h3>

            <div className="space-y-3">
              <p className="mb-2 text-black font-bold">
                📌 7 Grande Rue de Vaise, 69009 Lyon
              </p>
              <p className="mb-2 text-black font-bold">☎️ 07 83 96 32 79</p>
              <p className="mb-4 text-black font-bold">✉️ contact@tech69.fr</p>
            </div>

            <p className="font-semibold mb-2 mt-4 text-secondary font-bold">
              Horaires :
            </p>
            <p className="text-gray-600 font-bold">
              Lun–Ven : 10h – 19h <br />
              Samedi : 10h – 18h
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="tel:0783963279"
                className="
            bg-primary
            hover:bg-primary/90
            text-white
            font-semibold
            py-2
            text-lg
            px-8
            rounded
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
              >
                Appeler
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=7+Grande+Rue+de+Vaise+69009+Lyon"
                target="_blank"
                className="border border-primary text-primary px-6 py-2 rounded font-semibold hover:bg-primary hover:text-white transition"
              >
                Itinéraire
              </a>
            </div>
          </div>

          {/* Carte */}
          <div className="rounded-lg border border-gray-200 overflow-hidden shadow-lg">
            <iframe
              title="Carte Tech69"
              src="https://www.google.com/maps?q=7+Grande+Rue+de+Vaise+69009+Lyon&output=embed"
              className="w-full h-full min-h-[350px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
