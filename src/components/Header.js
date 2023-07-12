import React, { useEffect, useState } from "react";
import Hamburger from "../../src/assets/images/hamburger.png";
import YoutubeLogo from "../../src/assets/images/yout.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_AUTOSUGGEST } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestion = async () => {
    console.log("API -call " + searchText);
    const data = await fetch(YOUTUBE_AUTOSUGGEST + searchText);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({ [searchText]: json[1] }));
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="p-2  grid grid-flow-col shadow-lg sticky top-0 bg-white">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer"
          alt="hamburger-icon"
          src={Hamburger}
        />
        <a href="/">
          <img
            className="h-8 mx-2 cursor-pointer"
            alt="youtube-logo"
            src={YoutubeLogo}
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 py-2 w-1/2 ml-20  border border-gray-400 rounded-l-full"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-5 py-2 border border-gray-400  rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="z-10 mt-2 ml-20 p-2 px-5 bg-white rounded-lg w-[37rem] shadow-lg fixed border border-gray-300">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="shadow-md py-2 hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
    </div>
  );
};

export default Header;
