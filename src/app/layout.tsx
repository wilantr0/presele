import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Link from "next/link";


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
})

export const metadata: Metadata = {
  title: "PRESELE | La web que buscan todos los estudiantes de bachillerato",
  description: "La web que buscan todos los estudiantes de bachillerato",
  icons: {
    icon: [
      {
        url: "/bitmap.png",
        href: "/bitmap.png",
      }
    ],
  },
  keywords: ["presele", "universidad", "nota de corte", "grado", "estudiantes", "bachillerato", "selectividad", "EBAU", "PAU", "Estudios", "Universidades"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
  <body
    className={`${rubik.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
  >
    <div className="sticky top-0 z-50 bg-white shadow-sm">

    <div className="flex flex-row items-center h-fit p-8 w-full">
        <Link href="/">
          <img className="h-10 w-auto" src="bitmap.png" alt="Logo" />
        </Link>
        <div className="flex flex-row justify-center items-center gap-36 w-full">
          <Link href="./nota">Buscar por Nota de Corte</Link>
          <Link href="./universidad">Buscar por Universidad</Link>
          <Link href="./grado">Buscar por Grado</Link>
        </div>
    </div>
      <hr className="mb-10 border-gray-200 sm:mx-10" />
    </div>

    {/* Contenedor principal que ocupa toda la pantalla */}
    <div className="flex flex-col min-h-screen">
      {/* Contenido de la página */}
      <main className="flex-grow">{children}</main>

      {/* Footer fijo abajo */}
      <footer className="bg-white rounded-lg shadow-sm m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="bitmap.png" className="h-8" alt="PRESELE Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">Presele</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
              <li><a href="#" className="hover:underline me-4 md:me-6">About</a></li>
              <li><a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline me-4 md:me-6">Licensing</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2025 <a href="https://flowbite.com/" className="hover:underline">Presele</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  </body>
</html>
  )
}
