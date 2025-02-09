"use client";
import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Ícono de Hamburguesa (solo en móviles) */}
      <button
        onClick={toggleMenu}
        className="md:hidden ml-auto p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menú de navegación */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex sm:flex-col md:ml-20 md:flex-row justify-center items-center gap-4 md:gap-36 w-full md:w-auto absolute md:static top-16 left-0 bg-background p-4 md:p-0 shadow-md md:shadow-none`}
      >
        <Link
          href="./nota"
          className="text-sm md:text-base block text-center hover:underline text-foreground"
          aria-label="Buscar por nota de corte"
        >
          Buscar por Nota de Corte
        </Link>
        <Link
          href="./universidad"
          className="text-sm md:text-base block text-center hover:underline text-foreground"
          aria-label="Buscar por universidad"
        >
          Buscar por Universidad
        </Link>
        <Link
          href="./grado"
          className="text-sm block md:text-base text-center hover:underline text-foreground"
          aria-label="Buscar por grado"
        >
          Buscar por Grado
        </Link>
      </nav>
    </>
  );
}