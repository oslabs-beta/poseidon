export default function Grafana(props:any) {
  const { url } = props;
  return (
    <div>
      <div className="bg-slate-800 border-slate-700 p-6 m-2 rounded-lg w-fit shadow-lg shadow-slate-700/50 hover:scale-105 transition duration-300 ease-in-out ">
        <iframe src={url} className='grow-0' width="650" height="200" frameBorder="0" ></iframe>
      </div>
    </div>
  );
}
