function SearchBar({
  setSearchQuery,
}: {
  setSearchQuery: (query: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Pesquisar viagem..."
      className="p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
