import React from "react";
import MovieCard from "./MovieCard";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  console.log("results:", results);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <MovieCard key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
