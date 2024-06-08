import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingTrailer } from "../utils/moviesSlice";

const useMovieTrailer =(movieId)=>{
   
    const dispatch=useDispatch()

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos", 
      
      API_OPTIONS
    );
    const json = await data.json();
    const filterVideo = json.results.filter((v) => v.type === "Trailer");
    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];
    console.log(trailer)
    dispatch(addNowPlayingTrailer(trailer))
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
}
export default useMovieTrailer