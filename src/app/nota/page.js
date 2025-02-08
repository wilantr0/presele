"use client"; // Necesario para usar hooks y manejar estado en Next.js

import { Search01Icon as SearchIcon } from "hugeicons-react";
import { useState } from "react";

export default function CCAAFilter() {
  // Estado para almacenar las CCAA seleccionadas
  const [selectedCCAAs, setSelectedCCAAs] = useState([]);

  // Lista de todas las CCAA
  const ccaaList = [
    "Andalucía",
    "Aragón",
    "Asturias",
    "Baleares",
    "Canarias",
    "Cantabria",
    "Castilla y León",
    "Castilla-La Mancha",
    "Cataluña",
    "Extremadura",
    "Galicia",
    "Madrid",
    "Murcia",
    "Navarra",
    "País Vasco",
    "La Rioja",
    "Valencia",
  ];

  // Función para manejar la selección/deselección de una CCAA
  const toggleCCAA = (ccaa) => {
    setSelectedCCAAs((prev) =>
      prev.includes(ccaa)
        ? prev.filter((item) => item !== ccaa) // Deseleccionar
        : [...prev, ccaa] // Seleccionar
    );
  };

  // Función para mostrar las CCAA seleccionadas
  const showSelectedCCAAs = () => {
    alert(`CCAA seleccionadas: ${selectedCCAAs.join(", ")}`);
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Buscar por Nota de Corte</h1>
      

      <div className="w-full flex flex-row items-center justify-center">
      <section className="flex flex-row justify-start p-8 items-center w-2/6">
        <input type="search" name="search" id="Nota" placeholder="Nota de Corte" className="w-full bg-slate-400 rounded-xl placeholder-black p-4" />
        <button className="text-black p-4 rounded-xl"><SearchIcon /></button>
      </section>
      {/* Contenedor de chips */}
        <div className="flex flex-wrap gap-2 mb-6 w-4/6 justify-center">
          {ccaaList.map((ccaa) => (
            <button
            key={ccaa}
            onClick={() => toggleCCAA(ccaa)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCCAAs.includes(ccaa)
                ? "bg-accent text-white" // Estilo cuando está seleccionado
                : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Estilo por defecto
              }`}
              >
              {ccaa}
            </button>
          ))}
        </div>
      </div>

      {/* Botón para mostrar seleccionados */}
      <button
        onClick={showSelectedCCAAs}
        className="px-6 py-2 bg-primary text-black rounded-lg hover:bg-secondary transition-colors"
        >
        Mostrar opciones
      </button>
    </div>
  );
}