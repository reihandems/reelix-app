import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import MovieDetail from "./MovieDetail";

export default function MovieCard({
  movie,
  addToWatchlists,
  watched,
  handleSelectedMovie,
  selected,
  setError,
  isLoading,
  setIsLoading,
}) {
  const isWatched = watched.some((w) => w.imdbID === movie.imdbID);

  return (
    <>
      <div className="card bg-neutral-950 flex-1 min-w-48 shadow-sm/30 rounded-xl">
        <figure>
          <img
            src={movie.Poster}
            alt={`Poster of ${movie.Title}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => {
              document.getElementById("movieDetail").showModal();
              handleSelectedMovie(movie.imdbID);
            }}
          />
        </figure>
        <div className="card-body flex">
          <p className="text-sm font-semibold text-gray-500">{movie.Year}</p>

          <h2
            className="card-title hover:cursor-pointer hover:decoration-solid"
            onClick={() => {
              document.getElementById("movieDetail").showModal();
              handleSelectedMovie(movie.imdbID);
            }}
          >
            {movie.Title}
          </h2>

          <button
            className={`btn ${isWatched ? "btn-disabled" : ""}`}
            onClick={() => addToWatchlists(movie)}
          >
            <FontAwesomeIcon icon={isWatched ? faCircleCheck : faCirclePlus} />
            Add{isWatched ? "ed" : ""} To Watched
          </button>
        </div>

        <MovieDetail
          selected={selected}
          setError={setError}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  );
}
