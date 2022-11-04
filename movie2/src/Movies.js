import React from "react";

const Movies = ({ id, year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul>
          {genres.map((genre,index) => (
            <li className="genres_genre" key={index}>{genre}</li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0,180)}</p>
      </div>
    </div>
  );
};

export default Movies;
