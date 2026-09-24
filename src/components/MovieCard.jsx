export default function MovieCard({ movie }) {
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
          </div>
        </div>
      </>
    );
}