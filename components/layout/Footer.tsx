"use client";

import Image from "next/image";
import Link from "next/link";
import { useGoToSection } from "@/utils/useGoToSection";

export default function Footer() {
  const goToSection = useGoToSection();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <button onClick={() => goToSection("home")} className="text-left">
            <Image
              src="/logo.png"
              alt="Logo"
              width={400}
              height={40}
              className="w-40 h-auto"
            />
          </button>

          <p className="mt-4 text-gray-400">
            Réparation et vente d’appareils électroniques en toute confiance.
          </p>
        </div>

        {/* Liens */}
        <div>
          <h3 className="font-semibold mb-4">Liens rapides</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <button
                onClick={() => goToSection("home")}
                className="hover:text-primary"
              >
                Accueil
              </button>
            </li>

            <li>
              <button
                onClick={() => goToSection("repair-form")}
                className="hover:text-primary"
              >
                Réparation
              </button>
            </li>

            <li>
              <Link href="/products" className="hover:text-primary">
                Produits
              </Link>
            </li>

            <li>
              <button
                onClick={() => goToSection("contact")}
                className="hover:text-primary"
              >
                Contact
              </button>
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
              <Link href="/waranty" className="hover:text-primary">
                Garantie
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="hover:text-primary">
                Nos CGV
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="font-semibold mb-4">Suivez-nous</h3>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/tech69lyon"
              target="_blank"
              className="transition-transform duration-200 hover:scale-110"
            >
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
              />
            </Link>

            <Link
              href="https://www.instagram.com/tech69.fr"
              target="_blank"
              className="transition-transform duration-200 hover:scale-110"
            >
              <Image
                src="/icons/instagram.png"
                alt="X"
                width={40}
                height={40}
              />
            </Link>

            <Link
              href="https://www.snapchat.com/@tech69.fr"
              target="_blank"
              className="transition-transform duration-200 hover:scale-110"
            >
              <Image
                src="/icons/snapchat.png"
                alt="Instagram"
                width={40}
                height={40}
              />
            </Link>

            <Link
              href="https://www.tiktok.com/@tech6921"
              target="_blank"
              className="transition-transform duration-200 hover:scale-110"
            >
              <Image
                src="/icons/tiktok.png"
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tech69 — Tous droits réservés ·{" "}
        <Link href="/mentions-legales" className="hover:text-primary">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
