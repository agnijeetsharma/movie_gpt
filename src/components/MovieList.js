import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="py-6">

      <h1 className="text-2xl font-bold mx-7 mb-4 text-white">{title}</h1>
    <div className=" flex ml-6 mr-3 overflow-x-scroll scroll-smooth">
      <div className="flex  space-x-4">
        {movies.map((movie) => (
          <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
