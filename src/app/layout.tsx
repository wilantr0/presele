import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburguerMenu"; // Importar el componente de menú

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRESELE | La web que buscan todos los estudiantes de bachillerato",
  description: "La web que buscan todos los estudiantes de bachillerato",
  icons: {
    icon: [
      {
        url: "/bitmap.png",
        href: "/bitmap.png",
      },
    ],
  },
  keywords: [
    "presele",
    "universidad",
    "nota de corte",
    "grado",
    "estudiantes",
    "bachillerato",
    "selectividad",
    "EBAU",
    "PAU",
    "Estudios",
    "Universidades",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${rubik.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background shadow-sm">
          <div className="flex flex-row items-center justify-between h-fit p-4 md:p-8 w-full">
            <Link href="/" aria-label="Ir a la página de inicio">
              <img className="h-10 w-auto" src="bitmap.png" alt="Logo de PRESELE" />
            </Link>
            <HamburgerMenu />
          </div>
          <hr className="mb-10 border-gray-200 sm:mx-10" />
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-background rounded-lg shadow-sm m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <Link
                href="/"
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                aria-label="Ir a la página de inicio"
              >
                <img src="bitmap.png" className="h-8" alt="Logo de PRESELE" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Presele
                </span>
              </Link>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0">
                <li>
                  <Link href="#" className="hover:underline me-4 md:me-6" aria-label="Sobre nosotros">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline me-4 md:me-6"
                    aria-label="Política de privacidad"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline me-4 md:me-6" aria-label="Licencias">
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline" aria-label="Contacto">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-700 sm:text-center">
              © 2025{" "}
              <Link href="/" className="hover:underline" aria-label="Ir a la página de inicio">
                Presele
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}