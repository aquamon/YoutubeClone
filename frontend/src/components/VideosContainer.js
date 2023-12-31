import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import { AdVideoCard } from "./VideoCards";
const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    console.log(json.items);
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">

      {<AdVideoCard info={videos[0]}/>}
      
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCards  info={video} />
        </Link>
      ))}   
    </div>
  );
};

export default VideosContainer;
