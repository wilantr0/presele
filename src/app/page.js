"use client";
import { useState } from "react";
import Nota from "@/components/NotasAsignaturas.js";
import NotaOpt from "@/components/NotasAsignaturasOpt.js";
import Link from "next/link";

export default function Home() {
  const [notas, setNotas] = useState({});
  const [notaFinal, setNotaFinal] = useState(null);

  const handleNotaChange = (asignatura, nota) => {
    setNotas((prevNotas) => ({
      ...prevNotas,
      [asignatura]: nota,
    }));
  };

  const calcularNota = () => {
    const notaBachillerato = notas["Bachillerato"] || 0;

    const notasTroncales = [
      notas["Lengua Castellana"] || 0,
      notas["Lengua Extranjera"] || 0,
      notas["Historia de España/Filosofia"] || 0,
      notas["Oligatoria de modalidad"] || 0,
      notas["Lengua Cooficial"] || 0,
    ].filter((nota) => nota !== 0);

    const mediaTroncales =
      notasTroncales.reduce((acc, nota) => acc + nota, 0) / notasTroncales.length;

    const ponderaciones = [
      (notas["Optativa 1"] || 0) * (notas["Optativa 1-ponderacion"] || 0),
      (notas["Optativa 2"] || 0) * (notas["Optativa 2-ponderacion"] || 0),
      (notas["Optativa 3"] || 0) * (notas["Optativa 3-ponderacion"] || 0),
    ].filter((nota) => nota >= 5 * 0.1);

    const obligatoriaPonderada = (notas["Oligatoria de modalidad"] || 0) * 0.2;
    if (obligatoriaPonderada >= 5 * 0.1) {
      ponderaciones.push(obligatoriaPonderada);
    }

    const mejoresPonderaciones = ponderaciones.sort((a, b) => b - a).slice(0, 2);
    const notaFaseEspecifica = mejoresPonderaciones.reduce((acc, nota) => acc + nota, 0);
    const notaFinalCalculada =
      0.6 * notaBachillerato + 0.4 * mediaTroncales + notaFaseEspecifica;

    setNotaFinal(notaFinalCalculada.toFixed(3));
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pb-10 bg-background text-foreground">
      {/* Título */}
      <div className="mb-5 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Calculadora de Nota PAU</h1>
        <p className="text-lg">Calcula tu nota de acceso a la universidad</p>
      </div>

      {/* Calculadora de Nota */}
      <div className="w-11/12 md:w-5/6 p-4 md:p-6 rounded-lg shadow-[15px_14px_42px_1px_#00000024] bg-background">
        <h2 className="text-2xl font-bold mb-4">Calcular Nota PAU</h2>

        {/* Contenedor Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Columna 1: Asignaturas Generales */}
          <div className="space-y-4">
            <Nota asignatura={"Lengua Castellana"} onChange={handleNotaChange} />
            <Nota asignatura={"Lengua Extranjera"} onChange={handleNotaChange} />
            <Nota asignatura={"Lengua Cooficial *"} onChange={handleNotaChange} />
            <Nota asignatura={"Historia de España/Filosofia"} onChange={handleNotaChange} />
          </div>

          {/* Columna 2: Asignaturas Específicas */}
          <div className="space-y-4">
            <Nota asignatura={"Oligatoria de modalidad"} onChange={handleNotaChange} />
            <NotaOpt asignatura={"Optativa 1"} onChange={handleNotaChange} />
            <NotaOpt asignatura={"Optativa 2"} onChange={handleNotaChange} />
            <NotaOpt asignatura={"Optativa 3"} onChange={handleNotaChange} />
          </div>

          {/* Columna 3: Nota de Bachillerato, Nota Final y Botón */}
          <div className="flex flex-col justify-center gap-4 md:col-span-2 lg:col-span-1">
            {/* Nota de Bachillerato */}
            <Nota asignatura={"Bachillerato"} onChange={handleNotaChange} />

            {/* Nota Final */}
            <div className="flex justify-center items-center h-14 w-full bg-accent text-white text-2xl font-semibold p-2 rounded-xl">
              {notaFinal !== null ? notaFinal : "_,___"}
            </div>

            {/* Botón de Calcular */}
            <button
              onClick={calcularNota}
              className="flex justify-center items-center h-14 w-full bg-secondary font-bold text-2xl p-2 rounded-xl"
            >
              CALCULAR NOTA
            </button>
          </div>
        </div>
      </div>

      {/* Enlaces de Búsqueda */}
      <div className="w-11/12 md:w-5/6 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/nota" className="flex flex-col items-center p-4 bg-background rounded-lg shadow-md">
          <div className="w-full text-center bg-primary font-bold text-xl p-4 rounded-xl">
            Buscar opciones por nota de corte
          </div>
          <p className="mt-2 text-justify">
            Busca grados en todas las universidades de España con tu nota de corte, filtrando por comunidades, áreas de conocimiento o grados.
          </p>
        </Link>

        <Link href="/universidad" className="flex flex-col items-center p-4 bg-background rounded-lg shadow-md">
          <div className="w-full text-center bg-primary font-bold text-xl p-4 rounded-xl">
            Buscar opciones por universidad
          </div>
          <p className="mt-2 text-justify">
            Busca toda la información sobre los grados que ofrece cada universidad, información relevante y sin rodeos.
          </p>
        </Link>

        <Link href="/grado" className="flex flex-col items-center p-4 bg-background rounded-lg shadow-md">
          <div className="w-full text-center bg-primary font-bold text-xl p-4 rounded-xl">
            Buscar opciones por grado
          </div>
          <p className="mt-2 text-justify">
            Si tienes claro qué grado quieres hacer pero no sabes dónde lo puedes cursar, este es tu sitio. Todas las universidades que ofrecen tu grado y con comparaciones a tu gusto.
          </p>
        </Link>
      </div>
    </div>
  );
}