export default function Nota({ asignatura, className = "", onChange }) {
  return (
    <label className="flex flex-col justify-start items-start">
      <span className="mb-5">{asignatura}</span>
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
