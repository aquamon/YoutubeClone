import React from "react";

const VideoCards = ({ info }) => {
  // console.log(info);

  // const {snippet , statistics} = info;

  // const {thumbnails, title, channelTitle} = snippet;

  return (
    <div className="m-2 p-2 shadow-lg w-72">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={info?.snippet?.thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold">{info?.snippet?.title}</li>
        <li className="mt-2">{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics.viewCount} views</li>
      </ul>
    </div>
  )
};

export const AdVideoCard = ({info})=>{

  return (
    <div className="border border-red-500">
      <VideoCards info={info}/>
    </div>
  )
}

export default VideoCards;
