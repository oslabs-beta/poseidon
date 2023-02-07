export default function Grafana(props: any) {
  const { url } = props;
  return (
    <div className="flex flex-wrap z-10 bg-slate-800 shadow-neutral-900 shadow-2xl p-2 my-5 mx-auto rounded-xl dark:ring-1 dark:ring-inset dark:ring-white/10 hover:scale-105 transition duration-300 ease-in-out min-h-fit">

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
