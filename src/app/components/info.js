import Navbar from "../navbar";
export default function Info({children}) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--luxury-dark)] pb-10">
      <Navbar />
      <div className="luxury-container flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
