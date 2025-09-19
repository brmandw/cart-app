import Image from "next/image";

export default function CardItem() {
  return (
    <div className="m-8">
      <div className="m-5 px-16 py-8 flex items-center justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center gap-8 w-130">
            <img
              src="/window.svg"
              alt="Gambar"
              className="w-8 h-8 lg:w-16 lg:h-16"
            />
            <div className="">
              <h2 className="text-m lg:text-lg font-semibold mb-2">Judul</h2>
              <p className="lg:text-m text-gray-600">Deskripsi</p>
            </div>
        </div>
        <div className="flex justify-between items-center w-full ">
          <div>$0</div>
          <div className="flex items-center">
            <button className="bg-black text-white w-8 h-8 text-2xl">-</button>
            <input className="w-8 h-8 text-center  flex justify-center items-center" type="text" />
            <button className="bg-black mx-0.5 text-white w-8 h-8 text-xl">+</button>
          </div>
          <div>$0</div>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">Re</button>
        </div>
      </div>
    </div>
  );
}
