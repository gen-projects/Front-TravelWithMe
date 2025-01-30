import CardViagem from "../cardviagem/CardViagem";
import DadosViagem from "../dadosviagem/DadosViagem";
import "./BoxViagens.css";

interface Viagem {
  id: number;
  destino: string;
  tipo: string;
}

interface BoxViagensProps {
  viagens: Viagem[];
  searchQuery: string;
  filter: string;
}

const BoxViagens = ({ viagens, searchQuery, filter }: BoxViagensProps) => {
  const filteredViagens = viagens.filter(({ destino, tipo }) => {
    const matchesSearch = destino.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "Todos" || tipo.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-2 bg-slate-950 rounded-[4px] w-full scrollable">
      <div className="flex flex-wrap gap-2 justify-start">
        {filteredViagens.map(({ id, destino, tipo }) => (
          <CardViagem key={id} destino={destino} tipo={tipo} />
        ))}
      </div>
        {/*<DadosViagem viagens={filteredViagens}/>*/}
    </div>
  );
}

export default BoxViagens;
