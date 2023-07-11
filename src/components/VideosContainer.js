import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCards from "./VideoCards";
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
      {videos.map((video) => {
        return <VideoCards key={video.id} info={video} />;
      })}
    </div>
  );
};

export default VideosContainer;
