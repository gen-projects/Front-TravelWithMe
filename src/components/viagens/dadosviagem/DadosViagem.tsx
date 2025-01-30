interface Viagem {
  id: number;
  destino: string;
  tipo: string;
}

function DadosViagem({ viagem }: Viagem) {
  return (
    <div className="w-full h-full flex">
      <div className="bg-white rounded-[4px] w-1/2 h-full">lsjfalsf</div>
      <div>
        <iframe
          src="https://embed.waze.com/iframe?zoom=12&lat=45.6906304&lon=-120.810983"
          width="300"
          height="400"
        ></iframe>
      </div>
    </div>
  );
}

export default DadosViagem;
