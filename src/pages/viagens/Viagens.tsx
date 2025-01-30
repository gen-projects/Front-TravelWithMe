import { useState, useEffect } from "react";
import SearchBar from "../../components/viagens/searchbar/SearchBar";
import BoxViagens from "../../components/viagens/boxviagens/BoxViagens";
import Sidebar from "../../components/viagens/sidebar/Sidebar";
import Carrosel from "../../components/viagens/carrossel/Carrossel";

function Viagens() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Todos");

  const viagens = [
    { id: 1, destino: "Rio de Janeiro", tipo: "Lazer" },
    { id: 2, destino: "São Paulo", tipo: "Negócios" },
    { id: 3, destino: "Salvador", tipo: "Lazer" },
    { id: 4, destino: "Brasília", tipo: "Trabalho" },
    { id: 5, destino: "Florianópolis", tipo: "Lazer" },
    { id: 6, destino: "Curitiba", tipo: "Negócios" },
    { id: 7, destino: "Rio de Janeiro", tipo: "Lazer" },
    { id: 8, destino: "São Paulo", tipo: "Negócios" },
    { id: 9, destino: "Salvador", tipo: "Lazer" },
    { id: 10, destino: "Brasília", tipo: "Trabalho" },
    { id: 11, destino: "Florianópolis", tipo: "Lazer" },
    { id: 12, destino: "Curitiba", tipo: "Negócios" },
    { id: 13, destino: "Rio de Janeiro", tipo: "Lazer" },
    { id: 14, destino: "São Paulo", tipo: "Negócios" },
    { id: 15, destino: "Salvador", tipo: "Lazer" },
    { id: 16, destino: "Brasília", tipo: "Trabalho" },
    { id: 17, destino: "Florianópolis", tipo: "Lazer" },
    { id: 18, destino: "Curitiba", tipo: "Negócios" },
  ];

  useEffect(() => {
  }, [searchQuery, filter]);

  return (
    <div className="flex flex-col items-center gap-6 pt-20 px-4 h-full py-20">
      <div className="w-full max-w-7xl">
        <div className="mb-6">
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
        <div className="flex flex-col md:flex-row gap-4 min-h-[60dvh] md:h-full">
          <div className=" md:w-[1/3]">
            <Sidebar setFilter={setFilter} viagens={viagens} />
          </div>
          <BoxViagens
            viagens={viagens}
            searchQuery={searchQuery}
            filter={filter}
          />
        </div>
      </div>

      <div className="w-full md:w-[60vw] lg:w-[50vw] xl:w-[80vw]">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-950 px-6 py-8 mt-15 rounded-lg text-center sm:text-left ">
          Explore seu próximo destino
        </h1>
        <div className="w-full mt-6">
          <Carrosel />
        </div>
      </div>
    </div>
  );
}

export default Viagens;
