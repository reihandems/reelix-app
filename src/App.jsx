import { useState } from "react";

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
  const [searchMovie, setSearchMovie] = useState([]);

  function onSearchResult() {
    setSearchMovie(
      movies.filter((movie) => {
        return movie.Title.toLowerCase().includes(query.toLowerCase());
      })
    )
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
        <MovieLists movies={movies} watched={watched} addToWatchlists={addToWatchlists} />
        <WatchedLists watched={watched} />
      </div>
    </>
  );
}

export default App
