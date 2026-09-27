import { useState, useEffect } from "react";

import MovieData from "./tempMovieData.json"
import WatchedData from "./tempWatchedData.json"

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeroTop from "./components/HeroTop"
import HeroBottom from "./components/HeroBottom";
import MovieLists from "./components/MovieLists";
import WatchedLists from "./components/WatchedLists";

function App() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState(MovieData);
  const [watched, setWatched] = useState(WatchedData);
  const [searchMovie, setSearchMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({})

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY

  useEffect(() => {
    async function fetchMovie() {
      if (searchMovie === "") return;

      try {
        setIsLoading(true);

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchMovie}`,
        );

        if (!response.ok) {
          throw new Error("Could not fetch data!")
        }
        
        const data = await response.json();

        if (data.Response === "False") {
          throw new Error(data.Error)
        }

        setMovies(data.Search)
      }
      catch (error) {
        setError(error.message)
      }
      finally {
        setIsLoading(false);
      }

    };

    fetchMovie();

  }, [searchMovie]);

  function onSearchResult() {
    setSearchMovie(query)
  }

  function addToWatchlists(movie) {
    const newWatchedMovie = {
      ...movie,
      runtime: 0,
      imdbRating: 0,
      userRating: 0
    };

    setWatched([...watched, newWatchedMovie])
  }

  function handleSelectedMovie(value) {
    console.log(value);
    setSelectedMovie(value);
  }

  return (
    <>
      <NavBar />
      <Hero>
        <HeroTop />
        <HeroBottom
          query={query}
          inputQuery={setQuery}
          onSearchResult={onSearchResult}
          searchMovie={searchMovie}
        />
      </Hero>

      <div className="grid grid-cols-6 gap-8 p-6">
        <MovieLists
          movies={movies}
          watched={watched}
          addToWatchlists={addToWatchlists}
          isLoading={isLoading}
          error={error}
          handleSelectedMovie={handleSelectedMovie}
          selected={selectedMovie}
        />
        <WatchedLists watched={watched} />
      </div>
    </>
  );
}

export default App
