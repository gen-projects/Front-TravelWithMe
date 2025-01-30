interface Viagem {
  id: number;
  destino: string;
  tipo: string;
}

interface SidebarProps {
  setFilter: (filter: string) => void;
  viagens: Viagem[];
}

function Sidebar({ setFilter, viagens }: SidebarProps) {
  const tipos = [...new Set(viagens.map((viagem) => viagem.tipo))];

  return (
    <div className="w-40 p-4 bg-slate-950 rounded-[4px] shadow-md">
      <h3 className="text-lg font-bold mb-2 text-white">Filtrar por Tipo</h3>
      <div className="h-117 scrollable">
        <button
          key="Todos"
          className="block w-full text-left p-2 hover:bg-white hover:text-slate-800
           text-white rounded-md transition"
          onClick={() => setFilter("Todos")}
        >
          Todos
        </button>
        {tipos.map((tipo) => (
          <button
            key={tipo}
            className="block w-full text-left p-2 hover:bg-white hover:text-slate-800
             text-white rounded-md transition"
            onClick={() => setFilter(tipo)}
          >
            {tipo}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
