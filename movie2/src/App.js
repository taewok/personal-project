import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies";
import './App.css';

const App = () => {
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    setMovie(movies);
  };
  useEffect(()=>{
    getMovies();
  },[movie])



  return (
    <section className="container">
      <div className="movies">
        {movie.map((m) => (
          <Movies
            key={m.id}
            id={m.id}
            year={m.year}
            title={m.title}
            summary={m.summary}
            poster={m.medium_cover_image}
            genres={m.genres}
          />
        ))}
      </div>
    </section>
  );
};

export default App;
