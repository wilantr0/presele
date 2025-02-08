"use client"
import { useState } from "react";
import Nota from "@/components/NotasAsignaturas.js"
import NotaOpt from "@/components/NotasAsignaturasOpt.js"
import Link from "next/link";

export default function Home() {
  const [notas, setNotas] = useState({});
  const [notaFinal, setNotaFinal] = useState(null);

  console.log(notas); 
  const handleNotaChange = (asignatura, nota) => {
    setNotas(prevNotas => ({
      ...prevNotas,
      [asignatura]: nota
    }));
  };

  const calcularNota = () => {
    // 1. Calcular la Media de Bachillerato
    const notaBachillerato = notas["Bachillerato"] || 0;
  
    // 2. Calcular la Media de Troncales
    const notasTroncales = [
      notas["Lengua Castellana"] || 0,
      notas["Lengua Extranjera"] || 0,
      notas["Historia de España/Filosofia"] || 0,
      notas["Oligatoria de modalidad"] || 0,
      notas["Lengua Cooficial"] || 0, // Solo si aplica
    ].filter(nota => nota !== 0); // Filtrar notas no ingresadas
  
    const mediaTroncales = notasTroncales.reduce((acc, nota) => acc + nota, 0) / notasTroncales.length;
  
    // 3. Calcular la Nota de la Fase Específica
    const ponderaciones = [
      (notas["Optativa 1"] || 0) * (notas["Optativa 1-ponderacion"] || 0),
      (notas["Optativa 2"] || 0) * (notas["Optativa 2-ponderacion"] || 0),
      (notas["Optativa 3"] || 0) * (notas["Optativa 3-ponderacion"] || 0),
    ].filter(nota => nota >= 5 * 0.1); // Solo considerar si la nota es >= 5
  
    // Incluir la ponderación de la obligatoria de modalidad
    const obligatoriaPonderada = (notas["Oligatoria de modalidad"] || 0) * 0.2;
    if (obligatoriaPonderada >= 5 * 0.1) {
      ponderaciones.push(obligatoriaPonderada);
    }
  
    // Ordenar y tomar las dos mejores ponderaciones
    const mejoresPonderaciones = ponderaciones.sort((a, b) => b - a).slice(0, 2);
  
    // 4. Calcular la Nota Final
    const notaFaseEspecifica = mejoresPonderaciones.reduce((acc, nota) => acc + nota, 0);
    const notaFinalCalculada = (0.6 * notaBachillerato) + (0.4 * mediaTroncales) + notaFaseEspecifica;
  
    // Mostrar resultado
    setNotaFinal(notaFinalCalculada.toFixed(3));
  
    console.log("Media de Bachillerato:", notaBachillerato);
    console.log("Media de Troncales:", mediaTroncales.toFixed(3));
    console.log("Nota de la Fase Específica:", notaFaseEspecifica.toFixed(3));
    console.log("Nota Final Calculada:", notaFinalCalculada.toFixed(3));
  };
  

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pb-10 ">
      <div className="mb-5">
        <h1 className="text-4xl font-bold">Calculadora de Nota PAU</h1>
        <p className="text-lg text-center">Calcula tu nota de acceso a la universidad</p>
      </div>

      <div className="w-5/6  p-6 rounded-lg shadow-[15px_14px_42px_1px_#00000024]">
        <h2 className="text-2xl font-bold mb-4">Calcular Nota PAU</h2>
        <div className="grid grid-flow-col grid-rows-4 gap-4">
          <Nota asignatura={"Lengua Castellana"} onChange={handleNotaChange} />
          <Nota asignatura={"Lengua Extranjera"} onChange={handleNotaChange} />
          <Nota asignatura={"Lengua Cooficial"} onChange={handleNotaChange} />
          <Nota asignatura={"Historia de España/Filosofia"} onChange={handleNotaChange} />
          <Nota asignatura={"Oligatoria de modalidad"} onChange={handleNotaChange} />
          <NotaOpt asignatura={"Optativa 1"} onChange={handleNotaChange} />
          <NotaOpt asignatura={"Optativa 2"} onChange={handleNotaChange} />
          <NotaOpt asignatura={"Optativa 3"} onChange={handleNotaChange} />
          <Nota asignatura={"Bachillerato"} onChange={handleNotaChange} />

          <div className="flex justify-center items-center self-end mb-0 h-14 w-1/2 m-auto bg-secondary text-white font-semibold p-2 rounded-xl">
            {notaFinal !== null ? notaFinal : "_,___"}
          </div>
          <button onClick={calcularNota} className="flex justify-center items-center mb-0 h-14 w-3/4 m-auto bg-primary font-bold text-2xl p-2 rounded-xl">
            CALCULAR NOTA
          </button>
          <div></div>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center w-5/6 mt-6">
        <div className="w-1/4 flex flex-col items-center justify-center p-6 gap-4">
          <Link href="/nota" className="flex justify-center items-center mt-6 w-full bg-primary font-bold text-2xl p-4 rounded-xl">
            Buscar opciones<br /> por nota de corte
          </Link>
          <p className="text-justify">Busca grados en todas las universidades de españa con tu nota de corte, filtrando por comunidades, por areas de conocimiento o por grados.</p>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center p-6 gap-4">
          <Link href="/universidad" className="flex justify-center items-center mt-6 w-full bg-primary font-bold text-2xl p-4 rounded-xl">
            Buscar opciones<br /> por universidad
          </Link>
          <p className="text-justify">Busca toda la informacion sobre los grados que ofrece cada universidad, informacion relevante y sin rodeos.</p>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center p-6 gap-4">
          <Link href="/grado" className="flex justify-center items-center mt-6 w-full bg-primary font-bold text-2xl p-4 rounded-xl">
            Buscar opciones<br /> por grado
          </Link>
          <p className="text-justify">Si tienes claro que grado quieres hacer pero no sabes donde lo puedes cursar, este es tu sitio! Todas las universidades que ofrecen tu grado y con comparaciones a tu gusto.</p>
        </div>
      </div>
    </div>
  );
}