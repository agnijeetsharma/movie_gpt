import { useSelector } from "react-redux"
import VideoBackGround from "./VideoBackGround"
import VideoTitle from "./VideoTitle"
const MainContainer=()=>{
    const movies=useSelector((store)=>store.movies.nowPlayingMovies);
    if(!movies)return;
    const randomInteger = Math.ceil(Math.random() * 19);
    const mainMovie=movies[randomInteger];

    const {original_title,overview, id}=mainMovie


    return (
        <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround movieId={id}/>

        </div>
    )

}



export default MainContainer