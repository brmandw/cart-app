export default function Counter({ value, onIncrement, onDecrement }) {
	return (
		<div className="flex items-center gap-2">
			<button
				className="w-7 h-7 rounded-full bg-gray-200 text-lg font-bold flex items-center justify-center hover:bg-gray-300 transition"
				onClick={onDecrement}
				aria-label="Kurangi"
				disabled={value <= 0}
			>
				-
			</button>
			<span className="w-8 text-center select-none font-medium">{value}</span>
			<button
				className="w-7 h-7 rounded-full bg-gray-200 text-lg font-bold flex items-center justify-center hover:bg-gray-300 transition"
				onClick={onIncrement}
				aria-label="Tambah"
			>
				+
			</button>
		</div>
	);
}
