
interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

function SearchBar({ setSearchQuery }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Pesquisar viagem..."
      className="p-2 w-full border border-slate-950 rounded-[3px] shadow-sm 
              focus:outline-none focus:ring-1 focus:ring-slate-950"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;