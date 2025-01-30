interface Viagem {
  id: number;
  destino: string;
  tipo: string;
}


function Sidebar({
  setFilter,
  viagens,
}: {
  setFilter: (filter: string) => void;
  viagens: Viagem[];
}) {
  const tipos = ["Todos", ...new Set(viagens.map((viagem) => viagem.tipo))];

  return (
    <div className="w-full  md:h-[75dvh] p-4 bg-gray-800 rounded-lg shadow-md text-white">
      <h3 className="text-lg font-bold mb-2">Filtrar por Tipo</h3>
      {tipos.map((tipo) => (
        <button
          key={tipo}
          className="block w-full text-left p-2 hover:bg-gray-700 rounded-md transition"
          onClick={() => setFilter(tipo)}
        >
          {tipo}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
