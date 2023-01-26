export default function Grafana(props: any) {
	const { url } = props;
	return (
		<div className="flex flex-wrap z-10 bg-slate-800 shadow-neutral-900 shadow-2xl p-2 my-5 mx-auto rounded-xl dark:ring-1 dark:ring-inset dark:ring-white/10 hover:scale-105 transition duration-300 ease-in-out">
			{/* p-2 mx-3 my-3 */}
			{/* <div className="bg-slate-800 border-slate-700 p-6 m-2 rounded-lg w-fit shadow-lg shadow-slate-700/50  "> */}

			{/* relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 p-5' */}
			<iframe
				src={url}
				className="grow-0"
				width="600"
				height="200"
				frameBorder="0"
			></iframe>
		</div>
	);
}
