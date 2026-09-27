import MovieCard from "./MovieCard";
import Loader from "./Loader";
import ErrorBadge from "./ErrorBadge";

export default function MovieLists({ movies, addToWatchlists, watched, isLoading, error }) {
  
  return (
    <>
      <div className="col-span-6 md:col-span-4 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <h3 className="text-2xl font-semibold">Movies</h3>
            <span className="badge bg-primary/5 text-accent font-bold text-xs">
              {movies.length} Available
            </span>
          </div>
          <p className="text-xs font-bold hidden sm:block">
            SORT: <span className="text-accent">CURATED RANK</span>
          </p>
        </div>

        {movies.length === 0 ? (
          <>
            <div className="flex justify-center items-center h-24 border-2 border-dashed w-full text-gray-600 font-semibold">
              Your movie lists from search result will appear here.
            </div>
          </>
        ) : (
          <div className="flex flex-wrap gap-5 justify-between">
            {isLoading && (
              <>
                <div className="flex flex-wrap gap-4">
                  <Loader />
                  <Loader />
                </div>
              </>
            )}
            {error && (
              <div className="flex w-full">
                <ErrorBadge error={error} />
              </div>
            )}
            {!isLoading &&
              !error &&
              movies?.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  addToWatchlists={addToWatchlists}
                  watched={watched}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
}