import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "News",
    "Industry",
    "History",
    "Stock Markets",
    "Podcast",
    "AI",
    "Body Building",
    "Comedy",
    "Live",
    "Roads",
    "Web Development",
    "Python",
    "Music",
    "Mixes",
  ];

  return (
    <div className="flex">
      {buttonList.map((button) => {
        return <Button name={button} />;
      })}
    </div>
  );
};

export default ButtonList;
