import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function WatchedCard({ watch, onDeleteWatched }) {
  // function handleClick() {
  //   onDeleteWatched(watch.imdbID)
  // }

  return (
    <>
      <div className="card bg-neutral-950 flex-1 min-w-48 shadow-sm/30 rounded-xl">
        <figure className="static">
          <div
            className="badge bg-red-500 border-none absolute top-1 right-1 rounded-full w-10 h-10 font-black cursor-pointer shadow-sm/15"
            onClick={() => onDeleteWatched(watch.imdbID)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>

          <img
            src={`${watch.Poster}`}
            alt={`Poster of ${watch.Title}`}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <span className="badge bg-primary/10 font-bold text-primary">
            <i className="fa-solid fa-circle-check"></i>Watched
          </span>
          <h2 className="card-title">{watch.Title}</h2>
          <p className="text-sm font-semibold text-gray-500">
            {watch.Year} • {watch.Runtime} min
          </p>

          <div className="flex">
            <p className="text-sm text-gray-500">
              ⭐{" "}
              <span className="font-bold text-white">{watch.imdbRating}</span>
              /10
            </p>
            <div className="divider divider-horizontal"></div>
            <p className="text-sm text-gray-500">
              <FontAwesomeIcon icon={faUser} />{" "}
              <span className="font-bold text-white">{watch.userRating}</span>
              /10
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
