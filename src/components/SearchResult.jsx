import SearchCard from "./SearchCard";

export default function SearchResult({ searchMovie, query }) {
    return (
      <>
        {searchMovie.length !== 0 && (
          <div className="flex flex-col gap-5 w-full sm:w-150 mt-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <h3 className="text-sm font-semibold">Search Result</h3>
                <span className="badge bg-primary/5 text-accent font-bold text-xs">
                  {searchMovie.length !== 0 && query !== "" ? searchMovie.length : 0} Result
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-between">
              {searchMovie.length !== 0 && query !== "" ? (
                searchMovie?.map((movie) => (
                  <SearchCard key={movie.imdbID} movie={movie} />
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  No data available
                </p>
              )}
            </div>
          </div>
        )}
      </>
    );
}