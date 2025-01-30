interface Viagem {
  id: number;
  destino: string;
  tipo: string;
}

interface DadosViagemProps {
  viagem: Viagem;
  onBack: () => void;
  onEdit: (id: number) => void;
  onCancel: (id: number) => void;
}

function DadosViagem({
  viagem,
  onBack,
  onEdit,
  onCancel,
}: DadosViagemProps) {
  return (
    <div className="w-full h-full p-6 bg-white rounded-lg shadow-lg text-gray-900">
      <div className="flex justify-between mb-4">
        <button
          onClick={onBack}
          className="px-3 py-1 bg-red-500 text-white rounded-lg cursor-pointer"
        >
          Voltar
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => onCancel(viagem.id)}
            className="px-3 py-1 bg-gray-500 text-white rounded-lg cursor-pointer"
          >
            Cancelar Viagem
          </button>
          <button
            onClick={() => onEdit(viagem.id)}
            className="px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer"
          >
            Editar Viagem
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Lado Esquerdo - Informações da Viagem */}
        <div className="flex flex-col w-1/2">
          <h2 className="text-2xl font-bold mb-2">{viagem.destino}</h2>
          <p className="text-md text-gray-700 mb-4">Tipo: {viagem.tipo}</p>
          <p className="text-md text-gray-700 mb-4">
            Distância: 250km
          </p>
        </div>

        {/* Lado Direito - Animação do Carro */}
        
      </div>
    </div>
  );
}

export default DadosViagem;
