export default function Grafana(props) {
  const { url } = props;
  return (
    <div>
      <div className="bg-gray-900 border border-gray-700 p-6 m-2 rounded-lg w-fit shadow-lg shadow-slate-700/50 hover:scale-105 transition duration-300 ease-in-out">
        <iframe src={url} width="450" height="200" frameBorder="0"></iframe>
      </div>
    </div>
  );
}
