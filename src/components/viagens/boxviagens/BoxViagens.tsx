import { useState, useEffect } from "react";
import CardViagem from "../cardviagem/CardViagem";
import DadosViagem from "../dadosviagem/DadosViagem";
import "./BoxViagens.css";

interface Viagem {
  id: number;
  destino: string;
  tipo: string;
}

function BoxViagens({
  viagens,
  searchQuery,
  filter,
}: {
  viagens: Viagem[];
  searchQuery: string;
  filter: string;
}) {
  const [selectedViagem, setSelectedViagem] = useState<Viagem | null>(null);

  const filteredViagens = viagens.filter(({ destino, tipo }) =>
    destino.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filter === "Todos" || tipo === filter)
  );

  return (
    <div className="p-4 bg-gray-900 rounded-lg w-full text-white shadow-lg transition-all duration-300 scrollable">
      {selectedViagem ? (
        <DadosViagem
          viagem={selectedViagem}
          onEdit={() => ""}
          onCancel={() => ""}
          onBack={() => setSelectedViagem(null)}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredViagens.map((viagem) => (
            <CardViagem
              key={viagem.id}
              viagem={viagem}
              onClick={() => setSelectedViagem(viagem)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BoxViagens;

