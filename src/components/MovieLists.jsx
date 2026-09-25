import MovieCard from "./MovieCard";

export default function MovieLists({ movies, addToWatchlists, watched }) {
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

        <div className="flex flex-wrap gap-5 justify-between">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              addToWatchlists={addToWatchlists}
              watched={watched}
            />
          ))}
        </div>
      </div>
    </>
  );
}