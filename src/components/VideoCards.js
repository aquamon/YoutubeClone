import React from "react";

const VideoCards = ({ info }) => {
  console.log(info);

  // const {snippet , statistics} = info;

  // const {thumbnails, title, channelTitle} = snippet;

  return (
    <div className="m-2 p-2 shadow-lg w-72">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={info?.snippet?.thumbnails.medium.url}
      />
      <h1 className="font-bold">{info?.snippet?.title}</h1>
      <h2>{info?.snippet?.channelTitle}</h2>
      <p>{info?.statistics.viewCount} views</p>
    </div>
  );
};

export default VideoCards;
