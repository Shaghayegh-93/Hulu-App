import React from "react";
import MovieCard from "./MovieCard";
// import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  // console.log("results:", results);
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex 3xl:flex-wrap 3xl:justify-center">
      {results.map((result) => (
        <MovieCard key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
