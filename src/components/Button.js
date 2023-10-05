import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

function Button({ text, icon, search, setQuery, setUnits, updateQueryTo }) {
  function handleClick(updateQueryTo) {
    if (updateQueryTo === "metric" || updateQueryTo === "imperial") {
      setUnits(updateQueryTo);
    } else if (updateQueryTo === "current") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          setQuery({ lat, lon });
        });
      }
    } else if (updateQueryTo === "search") {
      setQuery({ q: search });
    } else {
      setQuery({ q: updateQueryTo });
    }
  }
  return (
    <button
      className="text-white font-semibold  hover:text-slate-200	 mx-1"
      onClick={() => handleClick(updateQueryTo)}
    >
      {icon === "BsSearch" ? (
        <BsSearch />
      ) : icon === "FiMapPin" ? (
        <FiMapPin />
      ) : (
        text
      )}
    </button>
  );
}

export default Button;
