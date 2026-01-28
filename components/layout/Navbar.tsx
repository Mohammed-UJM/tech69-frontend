"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer le modal quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Icône user */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 ml-4 rounded-full hover:bg-gray-200 transition"
        aria-label="Compte utilisateur"
      >
        <Image
          src="/icons/user-black.png"
          alt="Utilisateur"
          width={40}
          height={24}
        />
      </button>

      {/* Modal */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl border border-gray-200 z-50">
          <div className="p-4">
            {/* Phrase */}
            <p className="mb-4 text-gray-700 font-semibold">
              Connectez-vous ou créez votre compte Tech 69 !
            </p>

            {/* Boutons */}
            <div className="flex flex-col gap-3">
              <a
                href="/login"
                className="w-full text-center bg-primary text-white py-2 rounded font-semibold hover:bg-primary/90 transition"
              >
                Se connecter
              </a>
              <a
                href="/register"
                className="w-full text-center border border-primary text-primary py-2 rounded font-semibold hover:bg-primary hover:text-white transition"
              >
                Créer un compte
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={200} height={40} priority />
      </div>

      {/* CTA + User Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-primary text-white text-lg px-5 py-2 rounded-lg font-semibold"
        >
          Contacter nous
        </button>
        <UserMenu />
      </div>
    </nav>
  );
}
