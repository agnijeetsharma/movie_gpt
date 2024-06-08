
const VideoTitle=({title,overview})=>{
  return ( 
  <div className="px-20 pt-[18%] w-screen aspect-video absolute text-white bg-gradient-to-r from-black ">
  <h1 className="text-3xl my-3 font-bold">{title}</h1>
    <p className="text-sm w-1/2">{overview}</p>
    <button className="text-lg px-12 py-3  bg-white text-black rounded-lg opacity-70  hover:opacity-50"> ▷ Play</button>
    <button className=" m-3 text-lg px-8 py-3 text-white bg-gray-500 rounded-lg opacity-50 hover:opacity-30">ℹ️ More Info</button>
  </div>
  
)
}
export default VideoTitle