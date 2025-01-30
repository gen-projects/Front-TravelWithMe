import { useEffect, useState } from "react";
import { fetchRandomImage } from "../../../services/apiImagens"; // Atualize o caminho para refletir a mudança no nome da função

interface Viagem {
  id: number;
  destino: string;
  tipo: string;
}

interface CardViagemProps {
  viagem: Viagem;
  onClick: () => void;
}

function CardViagem({ viagem, onClick }: CardViagemProps) {
  const [imagem, setImagem] = useState<string>("");

  useEffect(() => {
    
    fetchRandomImage((image) => {
      setImagem(image); 
    });
  }, []);

  return (
    <div
      className="bg-white hover:bg-gray-200 shadow-lg w-full h-24 rounded-lg flex gap-4 items-center cursor-pointer p-4 transition-all duration-300"
      onClick={onClick}
    >
      <img
        src={imagem || "https://via.placeholder.com/64"} 
        alt="Destino"
        className="w-16 h-16 rounded-full border border-gray-300"
      />
      <div className="w-full text-left">
        <p className="text-gray-900 font-bold text-lg truncate">{viagem.destino}</p>
        <p className="text-gray-700 text-sm truncate">{viagem.tipo}</p>
      </div>
    </div>
  );
}

export default CardViagem;

