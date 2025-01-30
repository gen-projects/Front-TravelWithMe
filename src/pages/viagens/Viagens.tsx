import { useState } from "react";
import SearchBar from "../../components/viagens/searchbar/SearchBar";
import BoxViagens from "../../components/viagens/boxviagens/BoxViagens";
import Sidebar from "../../components/viagens/sidebar/Sidebar";

function Viagens() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Todos");

  const viagens = [
    { id: 1, destino: "Rio de Janeiro", tipo: "Lazer" },
    { id: 2, destino: "São Paulo", tipo: "Negócios" },
    { id: 3, destino: "Salvador", tipo: "Lazer" },
    { id: 4, destino: "Brasília", tipo: "Trabalho" },
    { id: 5, destino: "Rio de Janeiro", tipo: "Lazer" },
    { id: 6, destino: "São Paulo", tipo: "Negócios" },
    { id: 7, destino: "Salvador", tipo: "Lazer" },
    { id: 8, destino: "Brasília", tipo: "Trabalho" },
  ];

  return (
    <div className="flex flex-col items-center gap-4 pt-40 h-full">

      <div className="w-5/6 lg:w-[60rem]">
        <div className="mb-4">
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>

        <div className="flex gap-4 max-h-[33rem]">
          <Sidebar setFilter={setFilter} viagens={viagens} />
          <BoxViagens viagens={viagens} searchQuery={searchQuery} filter={filter} />
        </div>


      </div>
    </div>
  );
}

export default Viagens;