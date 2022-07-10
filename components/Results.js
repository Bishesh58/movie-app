import MovieCard from "./MovieCard";


function Results({results}) {
  return <div>
      {results.map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
  </div>;
}

export default Results;
