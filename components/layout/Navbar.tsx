"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition"
        aria-label="Compte utilisateur"
      >
        <Image
          src="/icons/user-black.png"
          alt="Utilisateur"
          width={40}
          height={40}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl border border-gray-200 z-50">
          <div className="p-4">
            <p className="mb-4 text-gray-700 font-semibold">
              Connectez-vous ou créez votre compte Tech 69 !
            </p>
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
    <nav className="flex items-center justify-between px-4 sm:px-8 py-3 shadow-sm bg-white">
      {/* Logo responsive */}
      <div className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150} // taille par défaut desktop
          height={30}
          className="sm:w-[150px] w-[120px] h-auto" // réduit sur mobile
          priority
        />
      </div>

      {/* CTA + User Menu */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-primary text-white hover:bg-primary/90 text-sm sm:text-base px-3 sm:px-5 py-1.5 sm:py-2 rounded font-semibold"
        >
          Contacter nous
        </button>
        <UserMenu />
      </div>
    </nav>
  );
}
