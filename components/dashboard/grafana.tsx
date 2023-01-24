export default function Grafana() {
  
	return (
		<div>
			<div className="bg-gray-200 border border-gray-200 p-6 m-2 rounded-lg w-96 shadow-lg shadow-slate-700/50 hover:scale-105 transition duration-300 ease-in-out">
				<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-cyan-100 text-blue-500 mb-4">
					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-6 h-6"
						viewBox="0 0 24 24"
					>
						<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
					</svg>
				</div>
				<h2 className="text-lg text-gray-900 font-medium title-font mb-2">
					Visualizer
				</h2>
				<p className="leading-relaxed text-base">CPU Metric</p>
			</div>
		</div>
	);
}
