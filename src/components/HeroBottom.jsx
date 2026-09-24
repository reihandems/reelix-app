import Search from "./Search";
import SearchResult from "./SearchResult";

export default function HeroBottom({ query, inputQuery, onSearchResult, searchMovie }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center grow bg-radial from-accent/15 to-transparent to-70%">
        <div className="text-5xl font-bold">
          Reel<span className="text-accent">ix</span>
        </div>
        <div className="text-sm opacity-50 text-center font-semibold mt-2 mb-5 max-w-120">
          Discover your next favorite movie with pristine curation,
          high-fidelity metadata, and personal screeening journals
        </div>

        <Search
          query={query}
          inputQuery={inputQuery}
          onSearchResult={onSearchResult}
        />

        <div className="flex mt-5 gap-3 items-center flex-wrap">
          <p className="text-gray-500 text-xs font-bold">POPULAR:</p>
          <span className="badge text-gray-500 font-bold border-0 bg-neutral-950 text-xs">
            Sci-Fi
          </span>
          <span className="badge text-gray-500 font-bold border-0 bg-neutral-950 text-xs">
            Drama
          </span>
          <span className="badge text-gray-500 font-bold border-0 bg-neutral-950 text-xs">
            Animation
          </span>
          <span className="badge text-gray-500 font-bold border-0 bg-neutral-950 text-xs">
            Noir
          </span>
        </div>

        <SearchResult searchMovie={searchMovie} query={query} />
      </div>
    </>
  );
}