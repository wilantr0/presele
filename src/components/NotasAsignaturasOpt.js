import { useState } from "react";

export default function NotaOpt({ asignatura, className = "", onChange }) {
  const [ponderacion, setPonderacion] = useState();
  return (
    <label className="flex flex-col justify-start items-start">
      <span className="w-full flex flex-row justify-between items-center mb-1">
        {asignatura}
        <ToggleSegment onChange={(value) => {
          setPonderacion(value);
          onChange(`${asignatura}-ponderacion`, value);
        }} />
      </span>
      <input
        className={`bg-gray-300 p-4 rounded-xl w-full outline-none font-semibold ${className}`}
        type="number"
        name={asignatura}
        min="0"
        max="10"
        required
        onChange={(e) => onChange(asignatura, parseFloat(e.target.value) || 0)}
      />
    </label>
  );
}

function ToggleSegment({ onChange }) {
  const [selected, setSelected] = useState(0);
  const options = [0.1, 0.15, 0.2];

  const handleSelect = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex rounded-lg bg-gray-200 p-1 w-1/2 justify-between">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleSelect(option)}
          className={`px-4 py-2 rounded-md text-xs font-light transition-all 
            ${selected === option ? "bg-blue-500 text-white" : "text-gray-700"}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
