"use client";
import { Search01Icon as SearchIcon } from "hugeicons-react";
import { useState } from "react";

export default function CCAAFilter() {
  const [selectedCCAAs, setSelectedCCAAs] = useState([]);
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

  const toggleCCAA = (ccaa) => {
    setSelectedCCAAs((prev) =>
      prev.includes(ccaa)
        ? prev.filter((item) => item !== ccaa)
        : [...prev, ccaa]
    );
  };

  const showSelectedCCAAs = () => {
    alert(`CCAA seleccionadas: ${selectedCCAAs.join(", ")}`);
  };

  return (
    <div className="p-6 w-full mx-auto bg-background text-foreground">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Buscar por Nota de Corte
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
        <section className="flex flex-row justify-start p-4 md:p-8 items-center w-full md:w-2/6">
          <input
            type="search"
            name="search"
            id="Nota"
            placeholder="Nota de Corte"
            className="w-full bg-gray-200 rounded-xl placeholder-foreground p-4 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Buscar por nota de corte"
          />
          <button
            className="text-foreground p-4 rounded-xl hover:bg-gray-300 transition-colors"
            aria-label="Buscar"
          >
            <SearchIcon />
          </button>
        </section>

        <div className="flex flex-wrap gap-2 mb-6 w-full md:w-4/6 justify-center">
          {ccaaList.map((ccaa) => (
            <button
              key={ccaa}
              onClick={() => toggleCCAA(ccaa)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCCAAs.includes(ccaa)
                  ? "bg-accent text-white"
                  : "bg-gray-200 text-foreground hover:bg-gray-300"
              }`}
              aria-label={`Seleccionar ${ccaa}`}
              aria-pressed={selectedCCAAs.includes(ccaa)}
            >
              {ccaa}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={showSelectedCCAAs}
          className="px-6 py-2 bg-secondary text-foreground rounded-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Mostrar opciones seleccionadas"
        >
          Mostrar opciones
        </button>
      </div>
    </div>
  );
}