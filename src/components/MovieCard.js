const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[150px] h-[200px] bg-gray-200 rounded-lg">
      <img
        src={`https://image.tmdb.org/t/p/w200/${posterPath}`}
        alt="Movie Poster"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
