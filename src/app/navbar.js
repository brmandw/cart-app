export default function Navbar({ cartCount }) {
    return (
        <nav className="flex justify-between items-center p-4 mx-7 border-b border-gray-200 bg-white sticky top-0 z-10">
            <h2 className="text-xl font-bold tracking-tight">OnShop</h2>
            <div className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25A3.75 3.75 0 0011.25 18h1.5a3.75 3.75 0 003.75-3.75V6.75m-9 7.5V6.75m0 0L4.125 5.272A1.125 1.125 0 013.75 4.5H2.25m5.25 2.25h9.75m0 0l1.125-1.478A1.125 1.125 0 0019.875 4.5h1.386" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2 py-0.5 min-w-[24px] text-center font-semibold">
                  {cartCount}
                </span>
            </div>
        </nav>
    );
}