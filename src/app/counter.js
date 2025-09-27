export default function Count({increment, decrement, count}) {

  return (
    <div className="flex items-center bg-[var(--luxury-dark)] rounded-lg border border-[#333] overflow-hidden">
      <button
        className="bg-[var(--luxury-gold)] text-[var(--luxury-dark)] w-8 h-8 md:w-10 md:h-10 text-sm md:text-base font-bold hover:bg-opacity-90 transition-all duration-200 focus:outline-none"
        onClick={decrement}
      >
        −
      </button>
      <input
        value={count} readOnly
        className="w-12 h-8 md:w-16 md:h-10 text-center bg-transparent text-white font-medium focus:outline-none"
      />
      <button
        className="bg-[var(--luxury-gold)] text-[var(--luxury-dark)] w-8 h-8 md:w-10 md:h-10 text-sm md:text-base font-bold hover:bg-opacity-90 transition-all duration-200 focus:outline-none"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
