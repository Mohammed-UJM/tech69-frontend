import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="Logo" width={200} height={40} priority />
          <p className="mt-4 text-gray-400">
            Réparation et vente d’appareils électroniques en toute confiance.
          </p>
        </div>

        {/* Liens */}
        <div>
          <h3 className="font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/reparation" className="hover:text-primary">
                Réparation
              </Link>
            </li>
            <li>
              <Link href="/produits" className="hover:text-primary">
                Produits
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/garantie" className="hover:text-primary">
                Garantie
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-primary">
                Assistance
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="font-semibold mb-4">Suivez-nous</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
                className="hover:scale-110 transition"
              />
            </Link>
            <Link href="https://x.com" target="_blank">
              <Image
                src="/icons/x.png"
                alt="X"
                width={40}
                height={40}
                className="hover:scale-110 transition"
              />
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
                className="hover:scale-110 transition"
              />
            </Link>

            <Link href="https://linkedin.com" target="_blank">
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="hover:scale-110 transition"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bas de footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tech69 — Tous droits réservés ·{" "}
        <Link href="/mentions-legales" className="hover:text-primary">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
