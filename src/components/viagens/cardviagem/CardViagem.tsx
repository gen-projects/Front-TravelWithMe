interface CardViagemProps {
  destino: string;
  tipo: string;
}

function CardViagem({ destino, tipo }: CardViagemProps) {
  return (
    <div
      className="bg-white  hover:bg-slate-100 hover:shadow-slate-300 
                w-full h-20 rounded-[2px] flex gap-3 items-center cursor-pointer p-3
                hover:shadow-[0_0_15px_10px_rgba(30, 31, 94, 0.9)] transition-all 
                duration-300 "
    >
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Destino"
        className="w-auto h-full rounded-[3px]"
      />

      <div className="w-full text-left">
        <p className="text-slate-900 font-bold text-md h-7 overflow-hidden 
        text-ellipsis whitespace-nowrap">
          {destino}
        </p>
        <p className="text-slate-900 text-sm h-6 overflow-hidden text-ellipsis
         whitespace-nowrap">
          {tipo}
        </p>
      </div>
    </div>
  );
}

export default CardViagem;
