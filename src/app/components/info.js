export default function Info({children}) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--luxury-dark)] pb-10">
      <div className="luxury-container min-h-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
