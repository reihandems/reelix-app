export default function Search({ query, inputQuery, onSearchResult }) {
  function handleSubmit(e) {
    e.preventDefault();

    onSearchResult();
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full sm:w-150">
        <label className="input bg-neutral-950 border-0 rounded-xl shadow sm:h-14 sm:p-4 w-full">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            className="grow"
            value={query}
            placeholder="Search for a movie, director, or genre..."
            onChange={(e) => inputQuery(e.target.value)}
          />
          <kbd className="kbd kbd-sm">Enter</kbd>
        </label>
      </form>
    </>
  );
}