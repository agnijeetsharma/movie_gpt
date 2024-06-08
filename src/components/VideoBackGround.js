import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackGround = ({ movieId }) => {
  const nowPlayingTrailer = useSelector(
    (store) => store?.movies?.nowPlayingTrailer
  );
  useMovieTrailer(movieId);
  return (
    <div className=" w-screen">
      <iframe
      className="w-screen aspect-video"
      
        src={"https://www.youtube.com/embed/"+nowPlayingTrailer?.key+"?&autoplay=0&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default VideoBackGround;
