import { useSelector } from "react-redux"
import MovieList from "./MovieList"


 const SecondaryContainer =()=>{
   const movies=useSelector(store=>store.movies)
 return (
    <div className="bg-black">
    <div className="-mt-40 relative z-20 ml-8">

        <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
    </div>
 )
 }

 export default SecondaryContainer