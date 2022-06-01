import React from "react";
import MovieCard from "./MovieCard";

const Results = ({ results }) => {
  console.log("results:", results);
  return (
    <div>
      {results.results.map((result) => (
        <MovieCard key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
