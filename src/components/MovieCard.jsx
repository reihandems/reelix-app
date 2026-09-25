import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard({ movie, addToWatchlists, watched }) {
  const isWatched = watched.some((w) => w.imdbID === movie.imdbID);

  console.log(movie.Title, isWatched);
  return (
    <>
      <div className="card bg-neutral-950 flex-1 min-w-48 shadow-sm/30 rounded-xl">
        <figure>
          <img
            src={movie.Poster}
            alt={`Poster of ${movie.Title}`}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body flex">
          <p className="text-sm font-semibold text-gray-500">{movie.Year}</p>
          <h2 className="card-title">{movie.Title}</h2>

          <button
            className={`btn ${isWatched ? "btn-disabled" : ""}`}
            onClick={() => addToWatchlists(movie)}
          >
            <FontAwesomeIcon icon={isWatched ? faCircleCheck : faCirclePlus} />
            Add{isWatched ? "ed" : ""} To Watched
          </button>
        </div>
      </div>
    </>
  );
}
