import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faShareNodes} from "@fortawesome/free-solid-svg-icons"

import MovieDetailLoader from "./MovieDetailLoader";

export default function MovieDetail({ selected, setError, isWatched, addToWatchlists }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  console.log(movie);

  useEffect(() => {
    async function fetchDetail() {
      try {
        setIsLoading(true);

        if (selected === "" || movie === "") return;

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${selected}`,
        );

        if (!response.ok) {
          throw new Error("Could not fetch data!");
        }

        const data = await response.json();
        setMovie(data);

        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDetail();
  }, [selected]);

  return (
    <>
      <dialog id="movieDetail" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-0 sm:w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {isLoading && <MovieDetailLoader />}
          {!isLoading && (
            <>
              <img src={movie.Poster} alt="" className="w-full object-cover" />

              <div className="flex flex-col p-6">
                <div className="flex sm:flex-row flex-col justify-between font-jakarta gap-5 items-center">
                  <div className="flex flex-col gap-2">
                    <div className="flex">
                      <div className="text-gray-500 font-semibold text-xs">
                        {movie.Year} •{" "}
                        <span className="text-accent">{movie.Genre} </span> •{" "}
                        {movie.Rated}
                      </div>
                    </div>
                    <div className="title text-3xl font-bold">
                      {movie.Title}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className={`btn ${isWatched ? "btn-disabled" : ""} btn-primary text-black flex-1`}
                      onClick={() => addToWatchlists(movie)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                      Mark{isWatched ? 'ed' : ''} as Watched
                    </button>
                    <div className="btn">
                      <FontAwesomeIcon icon={faShareNodes} />
                    </div>
                  </div>
                </div>

                <div className="divider py-0"></div>

                <div className="flex flex-col gap-2">
                  <p className="text-xs font-bold text-gray-500">SYNOPSIS</p>
                  <p className="text-sm font-semibold text-accent/50">
                    {movie.Plot}
                  </p>
                </div>

                <div className="flex mt-5">
                  <div className="stats bg-base-200/50 shadow-sm/15 w-full flex justify-between">
                    <div className="stat">
                      <div className="stat-title">Director</div>
                      <div className="stat-value text-sm">{movie.Director}</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title">Writer</div>
                      <div className="stat-value text-sm text-wrap">
                        {movie.Writer}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-5">
                  <p className="text-xs font-bold text-gray-500">
                    KEY CAST & ROLES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {movie.Actors?.split(",").map((actor, index) => (
                      <div
                        className="stats bg-base-200/50 shadow-sm/15"
                        key={index}
                      >
                        <div className="stat">
                          <div className="stat-value text-sm">{actor}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}